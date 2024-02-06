import { QueryEnum } from "@/types/query-enums";
import { useMutation, useQuery, } from "@tanstack/react-query";
import { getUsers, getUsersParams } from "./queries";
import { SearchParams } from "@/types";

export function useGetUsers() {
    return useQuery({
        queryKey: [QueryEnum.GET_USERS],
        queryFn: () => getUsers(),
        refetchOnWindowFocus: false,
    })
}

export function useGetUsersParams() {
    return useMutation({
        mutationFn: (data: SearchParams) => getUsersParams(data),
    })
}