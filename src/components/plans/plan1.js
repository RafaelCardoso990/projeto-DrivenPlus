import axios from "axios";
import {useState, useContext, useEffect} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import DataContext from '../../context/Datacontext';
import styled from 'styled-components'
import InputMask from "react-input-mask";

import vetor1 from '../../assets/image/Vector1.png'
import vetor from '../../assets/image/Vector.png'
import vetor2 from '../../assets/image/Vector2.png'
import vetor3 from '../../assets/image/Vector3.png'

function Plan1(){
    const navigate = useNavigate()
    
    const {datas} = useContext(DataContext)
    const {idPlan} = useParams()

    const [isVisible, setIsVisible] = useState(false)    
    const [plan, setPlan] = useState([])
    const [record, setRecord] = useState({
        membershipId: "",
        cardName: "",
        cardNumber: "",
        securityNumber: "",
        expirationDate: ""
    })

    console.log(datas)
    console.log(plan)

    const config = {
        headers: {
            Authorization: `Bearer ${datas.token}`
        }
    }


    useEffect(() =>{    
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlan}`, config)
        promise.then(response=> {
            const {data} = response;
            setPlan(data)
                     
        }) 
        promise.catch(err=> console.log(err.response.data))
    },[])

  
    const handleFormChange=(e) =>{
        setRecord({...record, [e.target.name]: e.target.value})
    }   
  
    function sign(id){
        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions',{
            membershipId: id,
            cardName: record.cardName,
            cardNumber: record.cardNumber,
            securityNumber: record.securityNumber,
            expirationDate: record.expirationDate
        },config)
        promise.then(response =>{
            const {data} = response
            navigate("/home")
            console.log(data)            
        })
        promise.catch(err => alert("Preencha todos os dados corretamente."))
    }


    return(
            <Main>
                <Link to="/subscriptions"><img className="back" src={vetor3}/></Link>  
                <div className="logo">
                    <img src={plan.image}/>
                    <h1>{plan.name}</h1>
                </div>
                <div className="benefits">
                    <img src={vetor}/>
                    <h1>Benefícios</h1>
                    <h2>1. Brindes exclusivos</h2>
                    <h2>2. Materiais bônus da web</h2>
                </div>
                <div className="price">
                    <img src={vetor1}/>
                    <h1>Preço:</h1>
                    <h2>R$ {plan.price} cobrados mensalmente</h2>             
                </div>
                <input type='text' placeholder='Nome impresso no cartão' name='cardName' value={record.cardName} onChange={handleFormChange}></input>
                <InputMask type='text' placeholder='Digitos do cartão'  name='cardNumber' mask='9999 9999 9999 9999'  value={record.cardNumber} onChange={handleFormChange}></InputMask>
                <div className="separado">
                    <InputMask type='text'placeholder='Código de segurança' name='securityNumber' mask="999" value={record.securityNumber} onChange={handleFormChange}></InputMask>
                    <InputMask type='text' placeholder='Validade' name='expirationDate'  mask="99/99"value={record.expirationDate} onChange={handleFormChange}></InputMask>
                </div>
                    <button onClick={() => setIsVisible(!isVisible)}>Assinar</button>

                {isVisible === true ? <Modal onClick={() => setIsVisible(!isVisible)}> 
                                            <img onClick={() => setIsVisible(!isVisible)} src={vetor2}/>
                                        <main>
                                            <div className="plan">
                                                <h1>Tem certeza que deseja assinar o plano {plan.name} ({plan.price}) ?</h1>                                                
                                            </div>
                                            <div className="button">
                                                <button onClick={() => setIsVisible(!isVisible)} className="no">Não</button>     
                                                <button onClick={() => sign(plan.id)} className="yes">Sim</button>
                                            </div>
                                        </main>
                                       </Modal> : <></>}
            </Main>
        
    )
}


const Modal = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: hsla(0, 0%, 1%, 0.39);
    position: absolute;
    margin-top: 210px;

    .no{
        background-color:#CECECE;
    }

    img{
        top: 30px;
        right: 30px;
        position: absolute;
        z-index: 1;
        background-color: #000000;
    }

    main{
        top: 230px;
        left: 70px;
        width: 248px;
        height: 210px;
        background: #FFFFFF;
        border-radius: 12px;
        box-sizing: border-box;        
        position: absolute;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } 

    .button > button{
        width: 95px;
        height: 52px;      
        margin-top: 40px;
        margin-left: 5px;
        margin-right: 5px;
    }
    
    
    .plan > h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #000000;
        margin-top: 30px;
    }
`
const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .back{
        top: 30px;
        left: 30px;
        position: absolute;
        z-index: 1;
        background-color: #000000;
    }

    .benefits > img{
        position: absolute;
        left: 55px;
        z-index: 0;
    }

    
    .price > img{
        position: absolute;
        left: 45px;
        top: 323px;
        z-index: 0;
    }

    .benefits{
        margin-right: 30px;
        margin-bottom: 10px;
    }

    .price{
        margin-bottom: 10px;
    }

    .benefits > h1, .price > h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #FFFFFF;
    }
    .benefits > h2, .price > h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #FFFFFF;
    }
    .logo > h1{
        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #FFFFFF;
        margin-bottom: 25px;
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

    .separado > input{
        width: 145px;
        height: 55px;
        margin-right: 5px;  
    }

    .logo{
        margin-top: 90px;
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

export default Plan1;