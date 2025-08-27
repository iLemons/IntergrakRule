// 生成唯一id
export const createUUID = (len = 8) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomValues = new Uint32Array(len);
  crypto.getRandomValues(randomValues);

  return Array.from(randomValues, (value) => chars[value % chars.length]).join(
    ""
  );
};
