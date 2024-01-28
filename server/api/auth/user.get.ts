export default defineEventHandler((event) => {
  console.log("get user called");
  return event.context.user;
});
