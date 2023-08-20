import { UseQueryResult } from "react-query";

export const generateQueryResponse = (
  data: unknown,
  overrides: Partial<UseQueryResult<unknown, unknown>> = {}
) => ({
  data,
  dataUpdatedAt: 0,
  error: null,
  errorUpdatedAt: 0,
  failureCount: 0,
  isError: false,
  isFetched: true,
  isFetchedAfterMount: false,
  isFetching: false,
  isLoading: false,
  isLoadingError: false,
  isPlaceholderData: false,
  isPreviousData: false,
  isRefetchError: false,
  isRefetching: false,
  isStale: false,
  isSuccess: true,
  refetch: () => null,
  remove: () => null,
  status: "success",
  isIdle: false,
  ...overrides,
});
