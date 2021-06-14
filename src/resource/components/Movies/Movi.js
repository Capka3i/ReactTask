import {Link} from "react-router-dom";

function Movi(props) {
    let {poster_path, overview, id, title} = props.value;

    return (<div className = "card">
        <Link to = {{pathname: '/' + id, state: props.value}}>
            <img className = "card-img-top"
                 src = {'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + poster_path}
                 alt = ""/>
            <div className = "card-body">
                <h3>{title}</h3>
                <p className = "card-text">{overview}</p>
            </div>
        </Link>
    </div>)
}

export default Movi;
