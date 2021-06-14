import {useEffect, useState} from "react";
import {urlGenreMovies, urlGenreMoviesEnd} from "../../microElements";
import Movi from "../Movies/Movi";

function SortGenre(props) {
    console.log(props.location)
    let {state: id} = props.location
    let [movie, setMovie] = useState([]);
    useEffect(() => fetch(urlGenreMovies + id + urlGenreMoviesEnd)
        .then(value => value.json())
        .then(value => setMovie(value.results)), [])

    return (<div className = "someBox center">

        <div className = "someBox">{movie.map((value, index) => <Movi key = {index} value = {value}/>)}</div>

        <div color = "center" className = {'center'}>
            <nav aria-label = "Page navigation example">
                <ul className = "pagination">
                    <li className = "page-item"><a className = "page-link" href = "#">Previous</a></li>
                    <li className = "page-item"><a className = "page-link" href = "#">Next</a></li>
                </ul>
            </nav>
        </div>
    </div>);
}

export default SortGenre;
