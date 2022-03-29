export const padWithZero = (num, length = 2) => {
  return String(num).padStart(length, "0");
};

export const formatTime = (time) => {
  //const minutes = "0";
  const getHours = Math.floor(time / 3600);
  const getMinutes = Math.floor((time - getHours * 3600) / 60);
  const getSeconds = time - getHours * 3600 - getMinutes * 60;

  return `${padWithZero(getHours)} : ${padWithZero(getMinutes)} : ${padWithZero(
    getSeconds
  )}`;
};
