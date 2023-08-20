import * as Yup from "yup";

const requiredMessage = "This field is required";

export const schema = Yup.object().shape({
  input: Yup.string().required(requiredMessage),
});
