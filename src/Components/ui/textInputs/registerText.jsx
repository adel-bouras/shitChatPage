import './registerText.css';

function Text(props){

    function changeValue(e){
        props.onchange(e.target.value);
    }


    return (
        <p className="input-container">
    <input onChange={changeValue} type="text" placeholder={props.placeH} name="text" id="text" className="input-field" autoComplete="name" />
    <label className="input-label" htmlFor="text">{props.text}</label>
        </p>    
    )
}

export default Text;