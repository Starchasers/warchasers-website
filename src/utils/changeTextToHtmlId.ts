const changeTextToHtmlId = (text: string): string => {
  return text.toLowerCase().normalize('NFKD').replace(/[^\w]/g, '')
}

export default changeTextToHtmlId
