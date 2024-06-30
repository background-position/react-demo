/**
 * @description: Convert a file to base64 string
 * @param {File} file: File object
 * @return {*} {Promise<string>} base64 string
 */
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const base64String = event.target?.result as string
      resolve(base64String)
    }
    reader.onerror = (event: ProgressEvent<FileReader>) => {
      reject(event.target?.error)
    }
    reader.readAsDataURL(file)
  })
}

export { fileToBase64 }
