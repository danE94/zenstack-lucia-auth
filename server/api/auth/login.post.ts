// server/api/login.post.ts
import { Argon2id } from "oslo/password";
import { lucia } from "../../utils/auth";
import { prisma } from "../../utils/prisma";

export default eventHandler(async (event) => {
  const formData = await readFormData(event);
  const email = formData.get("email");
  if (typeof email !== "string" || email.length < 3 || email.length > 31) {
    throw createError({
      message: "Invalid email",
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

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (!existingUser) {
      // NOTE:
      // Returning immediately allows malicious actors to figure out valid usernames from response times,
      // allowing them to only focus on guessing passwords in brute-force attacks.
      // As a preventive measure, you may want to hash passwords even for invalid usernames.
      // However, valid usernames can be already be revealed with the signup page among other methods.
      // It will also be much more resource intensive.
      // Since protecting against this is none-trivial,
      // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
      // If usernames are public, you may outright tell the user that the username is invalid.
      throw createError({
        message: "Incorrect username or password",
        statusCode: 400,
      });
    }

    const validPassword = await new Argon2id().verify(
      existingUser.hashedPassword,
      password
    );
    if (!validPassword) {
      throw createError({
        message: "Incorrect username or password",
        statusCode: 400,
      });
    }

    const session = await lucia.createSession(existingUser.id, {});
    appendHeader(
      event,
      "Set-Cookie",
      lucia.createSessionCookie(session.id).serialize()
    );
  } catch (e) {
    if (e) {
      console.log("Error", e);
      // NOTE:
      // Returning immediately allows malicious actors to figure out valid usernames from response times,
      // allowing them to only focus on guessing passwords in brute-force attacks.
      // As a preventive measure, you may want to hash passwords even for invalid usernames.
      // However, valid usernames can be already be revealed with the signup page among other methods.
      // It will also be much more resource intensive.
      // Since protecting against this is none-trivial,
      // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
      // If usernames are public, you may outright tell the user that the username is invalid.
      throw createError({
        message: "Incorrect username or password",
        statusCode: 400,
      });
    }
  }
});
