import { ReactElement, useState } from "react";
import MostPopularList from "./MostPopularList";
import { Button, Center, Text, Image, Box } from "@chakra-ui/react";
import Card from "components/Card";
import AddJobModal from "./AddJobModal";

const HomeScreen = (): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Box paddingX="24" paddingY="12">
      <Box w="full" display="flex" justifyContent="flex-end">
        <Button
          onClick={() => setIsModalOpen(true)}
          color="white"
          rounded="md"
          p="2"
          bg="blue.600"
          variant="solid"
        >
          Create Job
        </Button>
      </Box>
      <Center paddingTop="4">
        <Image
          h="md"
          objectFit="cover"
          width="full"
          borderRadius="md"
          src={
            "https://assets.taskrabbit.com/v3/assets/homepage/tasker1-desktop.jpg"
          }
        />
      </Center>
      <MostPopularList />
      {isModalOpen && (
        <AddJobModal isOpen={isModalOpen} close={() => setIsModalOpen(false)} />
      )}
    </Box>
  );
};

export default HomeScreen;
