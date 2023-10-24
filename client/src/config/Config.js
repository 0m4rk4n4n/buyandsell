import axios from "axios"
export const axiosInstance=axios.create(
    {
        baseURL:"https://sellsphere.online/api/"
    })
