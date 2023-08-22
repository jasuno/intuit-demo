import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "components/Modal";
import { ReactElement, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { addJobSchema } from "./addJobSchema";
import ModalContent from "./ModalContent";
import Card from "components/Card";

const AddJobModal = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}): ReactElement => {
  const addJobDefaults = {
    description: "",
    requirements: "",
    jobName: "",
  };
  const methods = useForm({
    defaultValues: addJobDefaults,
    reValidateMode: "onChange",
    resolver: yupResolver(addJobSchema),
  });

  return (
    <FormProvider {...methods}>
      <form>
        <Modal
          onClose={close}
          isOpen={isOpen}
          title="Create job"
          subtitle="Here youll be able to create a job for professionals to be able to bid on, lowest bid wins"
          BodyContent={<ModalContent close={close} />}
        />
      </form>
    </FormProvider>
  );
};

export default AddJobModal;
