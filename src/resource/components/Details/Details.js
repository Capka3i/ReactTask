import {IMAGE} from "../../microElements";


function Details(props) {
    console.log(props.location.state)
    let {
        poster_path, original_title, overview, popularity,
    } = props.location.state
    return (<div className = "someClass">
        <img src = {IMAGE + poster_path} className = "someImg" alt = "..."/>
        <div>
            <h4 className = "card-title">{original_title}</h4>
            <p className = "card-text">{overview}</p>
            <p className = "card-text">Popularity: {popularity}</p>
        </div>

    </div>);
}

export default Details;
