import {Link} from "react-router-dom";

function Gerne(props) {
    let {id, name} = props.value
    return (<div className = "ots">
        <Link className = "btn btn-primary" to = {{pathname: 'gen/' + name, state: id}} role = "button">{name}</Link>
    </div>);
}

export default Gerne;
