export const getProfile = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        number: "07525100777",
        name: "jineesh",
        email: "jineeshjohn@gmail.com"
      });
    }, 500);
  });
};
