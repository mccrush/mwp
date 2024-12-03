export default (date = '') => {
  let LocaleDate
  if (date) {
    LocaleDate = new Date(date)
  } else {
    LocaleDate = new Date()
  }

  LocaleDate = LocaleDate.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })

  return LocaleDate
}