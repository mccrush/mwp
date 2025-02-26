export const getFoolLink = (link) => {
  // Взять первые 3 символа и сравнить со значением http
  // Если это так, вернуть ссылку как есть
  // Иначе подставить впереди ссылки https://

  const first3simbols = link.slice(0, 4)

  if (first3simbols === 'http') return link

  return `https://${link}`
}