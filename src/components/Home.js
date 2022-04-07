import axios from "axios";
import {useState, useContext, useEffect} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import DataContext from '../context/Datacontext';
import styled from 'styled-components'

import vetor4 from '../assets/image/Vector4.png'

function Home(){
    const {datas} = useContext(DataContext)

    const navigate = useNavigate();
    console.log(datas)

    function cancel(){
        const config = {
            headers: {
                Authorization: `Bearer ${datas.token}`
            }
        }

        const promise = axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', config)
        promise.then(response =>{
           console.log('deu')
           navigate('/subscriptions')
                  
        })
        promise.catch(err => {alert(err.response.data.message)
            console.log(err.response.data)})
    }

    return(
        <Main>
            <header>
                <img className="logo" src={datas.membership.image}/>
                <img className="user" src={vetor4}/>
            </header> 
                <h1>Olá, {datas.name}</h1>

                {datas.membership.perks.map((item)=>{
                    const {title, id, link} = item
                    return (
                        <button><a target="_blank" href={link}>{title}</a></button>
                    )
                })}

                <footer>
                    <Link to="/planos"><button>Mudar plano</button></Link>    
                    <button className="cancel" onClick={cancel}>Cancelar plano</button>                      
                </footer>   
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    footer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        bottom: 0px;
        position: absolute;
    }

    a {
        color: #FFFFFF;
        text-decoration: none;
    }

    button{
        width: 305px;
        height: 55px;  
        background: #FF4791;
        border-radius: 8px;
        margin-bottom: 10px;   
        color: #FFFFFF;
        border:none;    
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;    
    }

    .cancel{
        background: #FF4747; 
    }

    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
        margin-bottom: 55px;
    }

    .user{
        margin-bottom: 20px;
    }

    .logo{
        width: 70px;
        height: 70px;
        margin-right: 230px;
        margin-left: 30px;
        margin-top: 20px;
    }

  
`
export default Home;