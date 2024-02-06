import { SearchParams } from "@/types";
import { instance } from "@/utils/api";

export async function getUsers() {
    try {
        const response = await instance.get("/api", {
            params: {
                results: 15,
            }
        });
        return response.data.results;
    } catch (error) {
        return error;
    }
}

export async function getUsersParams({ gender, nat }: SearchParams) {
    try {
        const response = await instance.get("/api", {
            params: {
                gender,
                nat,
            }
        });
        return response.data.results;
    } catch (error) {
        return error;
    }
}
