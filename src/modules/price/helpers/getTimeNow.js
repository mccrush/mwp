export const getTimeNow = () => {
  // Получаем текущую дату
  const currentDate = new Date();

  // Форматируем время в строку 00
  const hours = String(currentDate.getHours()).padStart(2, '0')
  const minutes = String(currentDate.getMinutes()).padStart(2, '0')

  // Возвращаем время в формате 00:00
  return `${hours}:${minutes}`;
}
