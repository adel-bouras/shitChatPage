import { Link } from 'react-router-dom';
import avatar from './../../assets/avatar.svg';
import './error.css';
function ErrorPage(){
    return (
        <div id="error">
            <div id="errorconatiner">
                <h1>Oops ! Something went wrong</h1>
                <img src={avatar} alt="image"/>
            </div>
            <p>Please make sure that you are on the correct url this </p>
            <Link id='link' to='/'>Return to the home Page</Link>
        </div>
    )
}

export default ErrorPage;