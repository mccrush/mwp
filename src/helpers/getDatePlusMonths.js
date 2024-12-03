export default (plusMonths) => {

  const zeroFormat = num => {
    return num > 9 ? num : '0' + num
  }

  let futureYear = new Date().getFullYear()
  let futureMonth = new Date().getMonth() + plusMonths + 1

  const futureDate = zeroFormat(new Date().getDate())
  const futureHours = zeroFormat(new Date().getHours())
  const futureMinutes = zeroFormat(new Date().getMinutes())

  if (futureMonth > 12) {
    futureYear += 1
    futureMonth = Math.abs(12 - futureMonth)
  }

  futureMonth = zeroFormat(futureMonth)

  return futureYear +
    '-' +
    futureMonth +
    '-' +
    futureDate +
    'T' + futureHours + ':' + futureMinutes

}
