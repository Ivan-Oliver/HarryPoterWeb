import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  image: Yup.string()
  .required('The image field is required'),
  name: Yup.string()
  .required('The name field is required'),
  house: Yup.string()
  .required('The status field is required'),
})

export const initialValues = {
  image: '',
  name: '',
  house: '',
}