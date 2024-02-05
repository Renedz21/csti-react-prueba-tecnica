import { QueryEnum } from "@/types/query-enums";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./queries";


export function useGetUsers() {
    return useQuery({
        queryKey: [QueryEnum.GET_USERS],
        queryFn: () => getUsers(),
        refetchOnWindowFocus: false,
    })
}