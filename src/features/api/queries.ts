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
