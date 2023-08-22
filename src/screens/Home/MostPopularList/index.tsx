import { ReactElement } from "react";
import { collection, query, limit, where } from "firebase/firestore";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { firestore } from "../../../api";
import { doc } from "firebase/firestore";
import { Center, Text } from "@chakra-ui/react";
import Card from "components/Card";

const MostPopularList = (): ReactElement => {
  const ref = query(collection(firestore, "jobs"), limit(10));

  const { data: jobsSnapshot } = useFirestoreQuery(["jobs"], ref, {
    subscribe: true,
  });

  const jobs = jobsSnapshot?.docs;

  const jobsData = jobs?.map((job) => {
    return { ...job.data(), id: job.id };
  }) as { id: string; name: string; description: string }[];

  return (
    <Center paddingTop="12">
      {jobsData?.map((job) => {
        return (
          <Card w="md" h="40" mr="2" id={job.id}>
            <Text>{job.name}</Text>
            <Text noOfLines={3}>{job.description}</Text>
          </Card>
        );
      })}
    </Center>
  );
};

export default MostPopularList;
