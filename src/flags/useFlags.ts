import { useQuery, QueryKey } from "react-query";
import { client } from "@src/lib/axiosClient";

export interface Flags {
  [key: string]: boolean;
}

const getFlags = client.request<Flags>({ url: "/api/flags" });

export function useFlags() {
  const queryKey: QueryKey = ["flags"];
  const queryResponse = useQuery(queryKey, () => getFlags);

  const data = queryResponse.data?.data as Flags;
  const response = queryResponse.data;

  return {
    ...queryResponse,
    queryKey,
    data,
    response,
  };
}

export default useFlags; 
