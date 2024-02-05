import { instance } from "@/utils/api";

export async function getUsers() {
    try {
        const response = await instance.get("/api");
        return response.data.results;
    } catch (error) {
        return error;
    }
}