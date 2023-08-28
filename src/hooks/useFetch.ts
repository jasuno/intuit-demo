import { useQuery, UseQueryResult } from "react-query";

import { instance } from "../api";

const getSomething = async () => {
  const results = await instance.get("sub-url");
  return results.data;
};

type SomeType = {};

export const useFetch = (): UseQueryResult<SomeType[], unknown> =>
  useQuery(["someKey"], () => getSomething(), {
    staleTime: 0,
  });
