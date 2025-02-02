import { getTimeNow } from './getTimeNow'

export const getDateAfterMonths = (months) => {
  // Получаем текущую дату
  const currentDate = new Date();

  // Добавляем указанное количество месяцев
  currentDate.setMonth(currentDate.getMonth() + months);

  // Форматируем дату в строку
  const day = String(currentDate.getDate()).padStart(2, '0'); // День (добавляем ведущий ноль, если нужно)
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяц (добавляем ведущий ноль, если нужно)
  const year = currentDate.getFullYear(); // Год

  // Возвращаем дату в формате YYYY-MM-DDT00:00
  //return `${day}.${month}.${year}T${getTimeNow()}`;
  return `${year}-${month}-${day}T${getTimeNow()}`;
}