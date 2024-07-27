import axios from "axios";
import { useEffect, useState } from "react";


function fetchData(props){
const [data , setData] = useState(null);
const [loading , setLoading] = useState(false);
const [error , setError] = useState(null);
const [success , setSuccess] = useState(false);


useEffect(()=>{
    if(!props.click)return
    const fetchIt = async ()=>{
        try{
            setLoading(true);
            const response = await axios({
                method : `${props.method}`,
                url : `${props.url}`,
                data : props.data,
                headers : {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${props.token}`
                }
            });
            setData(response.data.data);
            setSuccess(true);
        }catch(e){
            setError(e.response.data);
        }finally{
            setLoading(false);
        }   
    }

fetchIt();
},[props.click]);

return ({
    data ,
    loading,
    error,
    success
})
}

export default fetchData;