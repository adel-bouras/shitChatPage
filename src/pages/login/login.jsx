import './login.css';
import man from './../../assets/man.jpg';
import Text from './../../Components/ui/textInputs/text';
import Button from './../../Components/ui/buttons/button1';
import userData from './../../Components/data/data';
import { useState } from 'react';
import LoadingPage from './../loading/loading';
import fetchData from './../../hooks/useFetch';
function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [login,setLogin] = useState(false);

    const response = fetchData({
        url : 'http://localhost:8000/api/user/login',
        data : {
            email : email,
            password : password
        },
        method : 'post',
        token : '',
        click : login
    })

    if(response.success) userData.setUserData(response.data);
    return(

       (response.loading)? (<LoadingPage />) : (
         <div id="loginContainer">
             <div id="login">
                 <h1>LOGIN</h1>
                 <p>Login in to see my chat rooms</p>
                 {(response.error)&&(<h3 style={{color : 'red',textDecoration : 'underline'}}>{response.error.message}</h3>)}
                 <Text onchange={(value)=>setEmail(value)} value={email} type='email' text='Email'/>
                 <Text onchange={(value)=>setPassword(value)} value={password} type='password' text='Password'/>
                 <div id="logOrSing">
                     <br />

                     <Button url='/register'  text='register'/>
                     <Button url={(response.success&&'/chat')} onclick={()=>setLogin(!login)} text='login'/>
                 </div>
             </div>
             <img src={man} alt="show room" />
         </div>
       )
    )
}

export default Login;