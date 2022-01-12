import { useQuery, QueryKey } from "react-query";
import { client } from "@src/lib/axiosClient";

export interface Flags {
  [key: string]: boolean;
}

export function Flags() {
  const getFlags = client.request<Flags>({ url: "/api/flags" });

  const queryKey: QueryKey = ["flags"];
  const flagsQuery = useQuery(queryKey, () => getFlags);

  if (flagsQuery.isLoading) return <p>Loading...</p>;
  if (flagsQuery.isError) return <p>Error</p>;

  const flags = Object.entries(flagsQuery?.data?.data ?? {});

  return (
    <div>
      <h1>Flags</h1>
      {flags.map(([flag, status]) => {
        return (
          <div key={flag}>
            <h2>{`${flag}: ${status}`}</h2>
          </div>
        );
      })}
      {console.log({ flags })}
    </div>
  );
}

export default Flags;
