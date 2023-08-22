import { Box, Button, Text } from "@chakra-ui/react";
import Card from "components/Card";
import FormInput from "components/FormInput";
import { useFormContext } from "react-hook-form";
import { ReactElement } from "react";
import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { firestore } from "api";

const ModalContent = ({ close }: { close: () => void }): ReactElement => {
  const ref = collection(firestore, "jobs");
  const { mutate } = useFirestoreCollectionMutation(ref);

  const { getValues } = useFormContext();
  const submit = () => {
    mutate({
      description: getValues("description"),
      name: getValues("jobName"),
      requirements: getValues("requirements"),
    });

    close();
  };

  return (
    <Card bg="white">
      <Box>
        <Text>Job Name</Text>
        <FormInput id="jobName" />
        <Text>Description</Text>
        <FormInput id="description" />
        <Text>Requirements</Text>
        <FormInput id="requirements" />
      </Box>
      <Button
        mt="2"
        color="white"
        rounded="md"
        p="2"
        bg="blue.600"
        variant="solid"
        onClick={submit}
      >
        Submit
      </Button>
    </Card>
  );
};

export default ModalContent;
