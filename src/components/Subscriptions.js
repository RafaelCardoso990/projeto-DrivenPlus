import {useState,useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'
import DataContext from '../context/Datacontext';


function Subscriptions(){
    const {datas} = useContext(DataContext)
    const [plans, setPlans] = useState([])
    console.log(datas)

    const config = {
        headers: {
            Authorization: `Bearer ${datas.token}`
        }
    }

    useEffect(() =>{    
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config)
        promise.then(response=> {
            setPlans(response.data)
            console.log(response.data)
        }) 
        promise.catch(err=> console.log(err.response.data))
    },[])

 

    return(
        <Main>
            <h1>Escolha seu Plano</h1>
            {plans.map((item) =>{
                const {image, id, price} = item
                return (
                    <Link to={`/subscriptions/${id}`}><Plan key={id} >
                        <img src={image} alt="plan"/>
                        <h1>R$ {price}</h1>
                    </Plan></Link>
                )
                
            })}
        </Main>
    )
}
const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    h1{
        margin-top: 30px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #FFFFFF;
        margin-bottom: 25px;
    }
`
const Plan = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 290px;
    height: 180px;      
    border: 3px solid #7E7E7E;
    box-sizing: border-box;
    border-radius: 12px;
    margin-top:10px;
    
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        margin-left: 10px;
        
        color: #FFFFFF;
    }
`
export default Subscriptions;