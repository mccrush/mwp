// getDateNow2
// 03.02.2025

import { getTimeNow } from './getTimeNow'

export const getDateNow2 = () => {
  const currentDate = new Date()

  // Форматируем дату в строку
  const day = String(currentDate.getDate()).padStart(2, '0'); // День (добавляем ведущий ноль, если нужно)
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяц (добавляем ведущий ноль, если нужно)
  const year = currentDate.getFullYear(); // Год

  // Возвращаем дату в формате YYYY-MM-DDT00:00

  return `${year}-${month}-${day}T${getTimeNow()}`;

}
