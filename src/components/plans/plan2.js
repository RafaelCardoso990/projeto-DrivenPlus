import axios from "axios";
import {useState, useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import DataContext from "../../context/Datacontext";

function Plan2(){

    // const {data} = useContext(DataContext)
    
    // const {idPlan} = useParams()
    // const [plan, setPlan] = useState([])
    // console.log(idPlan)

    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${data.token}`
    //     }
    // }


    // useEffect(() =>{    
    //     const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlan}`, config)
    //     promise.then(response=> {
    //         setPlan(response.data)
    //         console.log(response.data)
    //     }) 
    //     promise.catch(err=> console.log(err.response.data))
    // },[])

    return(
        <h1>bler</h1>
    )
}

export default Plan2;