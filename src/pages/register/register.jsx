import userData from './../../Components/data/data';
import { useState } from "react";
import './register.css';
import Text from './../../Components/ui/textInputs/registerText';
import Button from './../../Components/ui/buttons/button1';
import useFetch from './../../hooks/useFetch';

function Register(){
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [first , setFirst] = useState('');
    const [last , setLast] = useState('');
    const [register,setRegister] = useState(false);

    const response = useFetch({
        url : 'http://localhost:8000/api/user/register',
        method : 'post',
        data : {
            email : email,
            password : password,
            firstName : first,
            lastName : last
        },
        token : '',
        click : register
    });
    if(response.success)userData.setUserData(response.data);
    console.log(response);



    return (
    <div id="registerContainer">
    {(response.error)&&(<h3 style={{color : 'red',textDecoration : 'underline'}}>{response.error.message}</h3>)}
    <Text type='text' placeH='Your first name' text='First name' onchange={(v)=>setFirst(v)} />
    <Text type='text' placeH='Your last name' text='Last name' onchange={(v)=>setLast(v)} />
    <Text type='text' placeH='Your email' text='Email name' onchange={(v)=>setEmail(v)} />
    <Text type='password' placeH='Your password' text='Password name' onchange={(v)=>setPassword(v)} />
        <Button url={response.success&&'/chat'} onclick={()=>setRegister(!register)} text='sing up'/>
    </div>
    )
}


export default Register;