export const requiredField = (value) => {
  if (value){
    return undefined
  } else {
    return 'Field is required'
  }
  
  
}

const maxLength = max => value =>
value && value.length > max ? `Must be ${max} characters or less` : undefined


export const maxLength100 = maxLength(1000)
export const maxLength150 = maxLength(100)
