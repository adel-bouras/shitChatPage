import { Link, useNavigate } from 'react-router-dom';
import './button1.css'

function Submite(props){
    const navigate = useNavigate('');
    const changePage = () => {
        if (props.onclick) {
            props.onclick();
        }
        if (props.url) {
            navigate(props.url);
        }
    };
    return <button onClick={changePage}>{props.text}</button>
}

export default Submite;