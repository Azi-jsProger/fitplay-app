import {axiosInstance} from "../Utils/Api/api";


export const postUser = async (userData) => {
    const response = await axiosInstance.post('/login', userData);
    return response.data
}