import {Link} from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/image/logo.png'

function MainPage(){
    return(
        <Main>
            <img src={logo}/>
            <div>
                <input placeholder='E-mail'></input>
                <input placeholder='senha'></input>
                <button>Entrar</button>
            </div>
           <Link to='/sign-up'><h1>Não possuí uma conta? Cadastre-se</h1></Link>
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

export default MainPage;