import {useState} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/image/logo.png'
import InputMask from "react-input-mask";


function Sign(){

    const navigate = useNavigate();

    const [data, setData] = useState([])
    const [record, setRecord] = useState({
        email: "",
        name: "",
        cpf: "",
        password: ""
    })

    console.log(record)

    function register(){
        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up',{
            email: record.email,
            name: record.name,
            cpf: record.cpf,
            password: record.cpf
        })
        promise.then(response =>{
            const {data} = response
            console.log(data)            
            navigate('/')
        })
        promise.catch(err => console.log(err.response.data))
    }

    const handleFormChange=(e) =>{
        setRecord({...record, [e.target.name]: e.target.value})
    }
    return(
        <Main>
            <img src={logo}/>
            <div>
                <input type='text' placeholder='Nome' name='name' value={record.name} onChange={handleFormChange}></input>
                <InputMask type='text' placeholder='CPF'  name='cpf' mask='999.999.999-99'  value={record.cpf} onChange={handleFormChange}></InputMask>
                <input type='text'placeholder='E-mail' name='email' value={record.email} onChange={handleFormChange}></input>
                <input type='password' placeholder='Senha' name='password'  value={record.password} onChange={handleFormChange}></input>
                <button onClick={register}>Cadastar</button>
            </div>
            <Link to='/'><h1>Não possuí uma conta? Cadastre-se</h1></Link>
        </Main>
    )
}

const Main = styled.main`
    margin-top: 135px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 100px;

    }

    input{
        width: 300px;
        height: 55px; 
        background: #FFFFFF;
        border-radius: 8px;
        margin-bottom: 10px; 
        border: none;    
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #7E7E7E;        
    }

    button{
        width: 305px;
        height: 55px;  
        background: #FF4791;;
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

    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: #FFFFFF;
    }
`
export default Sign;