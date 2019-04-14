export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  let fullDay = year + '/' + ('00' + month).slice(-2) + '/' + ('00' + day).slice(-2);
  if (year === now.getFullYear() && (month === now.getMonth() + 1) && day === now.getDate()) {
    fullDay = 'Today'
  }

  return fullDay + ', at ' + hours + ':' + minutes;
};