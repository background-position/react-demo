const handelError = (errorStatus: number) => {
  let errorMessage = 'unknown error'
  switch (errorStatus) {
    case 400:
      errorMessage = 'Bad Request'
      break
    case 401:
      errorMessage = 'Unauthorized'
      break
    case 403:
      errorMessage = 'Forbidden'
      break
    case 404:
      errorMessage = 'Not Found'
      break
    case 500:
      errorMessage = 'Internal Server Error'
      break
    default:
      errorMessage = 'Something went wrong'
      break
  }
  return errorMessage
}
export default handelError
