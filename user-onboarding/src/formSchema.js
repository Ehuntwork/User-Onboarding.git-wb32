import * as Yup from "yup";

const formSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  name: Yup
    .string()
    .required("Name is Required"),
  password: Yup
    .string()
    .required("Password is Required"),
  terms: Yup
    .boolean()
    .oneOf([true], "Please accept the Terms of Service.")
})

export default formSchema;