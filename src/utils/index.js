const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return new Date(date).toLocaleDateString('id-ID', options)
}

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const extractContent = (html) => new DOMParser()
  .parseFromString(html, 'text/html')
  .documentElement.textContent

export { showFormattedDate, capitalizeFirstLetter, extractContent }
