import { Link } from "react-router-dom";
import './home.css'
import paypal from './../../assets/paypal.png';
import wise from './../../assets/wise.png';
import Button from '../../Components/ui/buttons/button1';

function Home(){

    return( 
    <div id="homeContainer">
        <h1>Welcome to <strong>adel</strong>'s chat app</h1>
        <div id="homesometext">
            <h1>Hey there ...</h1>
            <p>I’m Adel, a computer science student and freelancer. I built this chat app from scratch to provide you with a seamless and enjoyable communication experience. As a full-stack application, it allows you to connect and chat with people effortlessly. </p>
            <Button url='/login' text='GO LOGIN' />
        </div>
        <p style={{marginTop : '20px'}}>You can easily support me </p>

        <div id="homesupport">
            <div id="paypal">
                <a href="#"><img src={paypal} alt="paypal" /></a>
            </div >

            <div id="wise">
            <a href="https://wise.com/pay/me/adelb729"><img src={wise} alt="wise account" /></a>
            </div>
        </div>

    </div>
    )
}

export default Home;