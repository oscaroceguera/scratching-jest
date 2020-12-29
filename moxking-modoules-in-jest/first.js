module.exports.returnOnError = (operation, alternative) => {
  try {
    return operation()
  } catch (error) {
    return alternative
  }
}