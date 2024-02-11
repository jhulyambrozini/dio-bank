export function getDate() {
  const actualData = new Date();

  const day = String(actualData.getDate()).padStart(2, '0');
  const month = String(actualData.getMonth() + 1).padStart(2, '0');
  const year = actualData.getFullYear();
  const hours = String(actualData.getHours()).padStart(2, '0');
  const minutes = String(actualData.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year}, ${hours}:${minutes}`;
}
