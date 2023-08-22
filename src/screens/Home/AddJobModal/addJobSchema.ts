import * as Yup from "yup";

const requiredMessage = "This field is required";

export const addJobSchema = Yup.object().shape({
  description: Yup.string().required(requiredMessage).max(16000),
  requirements: Yup.string(),
  jobName: Yup.string().required("You must add a job name"),
});
