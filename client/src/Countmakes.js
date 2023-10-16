import axios from "axios"
export const Countmakes=async(make)=>
{
    const res=await axios.get(`/autos/findnumbers/${make}`)
    return(<>{res.data}</>)
}