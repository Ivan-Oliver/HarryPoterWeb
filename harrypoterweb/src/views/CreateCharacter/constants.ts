import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string()
  .required('The name field is required'),
  house: Yup.string()
  .required('The status field is required'),
})

export const initialValues = {
  name: '',
  house: '',
}