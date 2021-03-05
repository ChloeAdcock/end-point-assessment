const formatDateTime = (dateTime) => {
  const date = new Date(dateTime.slice(0, -1));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return `${day}/${month}/${year} ${hour}:${minutes}`;
};

export default formatDateTime;
