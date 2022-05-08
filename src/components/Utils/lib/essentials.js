export const createRandom = (size) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < size; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
