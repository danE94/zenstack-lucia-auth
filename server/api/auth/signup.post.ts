import { Argon2id } from "oslo/password";
import { generateId } from "lucia";
import { prisma } from "../../utils/prisma";
import { lucia } from "../../utils/auth";

export default eventHandler(async (event) => {
  const formData = await readFormData(event);
  const email = formData.get("email");
  if (typeof email !== "string" || email.length < 3 || email.length > 31) {
    throw createError({
      message: "Invalid username",
      statusCode: 400,
    });
  }
  const password = formData.get("password");
  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    throw createError({
      message: "Invalid password",
      statusCode: 400,
    });
  }

  const hashedPassword = await new Argon2id().hash(password);
  const userId = generateId(15);

  // TODO: check if username is already used
  await prisma.user.create({
    data: {
      id: userId,
      email: email.toLowerCase(),
      hashedPassword: hashedPassword,
    },
  });

  const session = await lucia.createSession(userId, {});
  appendHeader(
    event,
    "Set-Cookie",
    lucia.createSessionCookie(session.id).serialize()
  );
});
