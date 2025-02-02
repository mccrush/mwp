export const getLocaleDateTimeFromDate = (date = '') => {
  let newLocaleDateTime
  if (date) {
    newLocaleDateTime = new Date(date)
  } else {
    return ''
  }

  newLocaleDateTime = newLocaleDateTime.toLocaleTimeString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return newLocaleDateTime
}