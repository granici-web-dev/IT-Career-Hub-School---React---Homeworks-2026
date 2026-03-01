const validationForm = {
  firstField: {
    required: 'First Field is required',
    minLength: {
      value: 3,
      message: 'First Field must be at least 3 characters',
    },
    maxLength: {
      value: 10,
      message: 'First Field must be at most 10 characters',
    },
  },
  secondField: {
    required: 'Second Field is required',
    minLength: {
      value: 3,
      message: 'Second Field must be at least 3 characters',
    },
    maxLength: {
      value: 10,
      message: 'Second Field must be at most 10 characters',
    },
  },  
}

export default validationForm;