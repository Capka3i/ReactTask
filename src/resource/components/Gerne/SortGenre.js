import {useEffect, useState} from "react";
import {centerUrlMovies, urlGenreMovies, urlGenreMoviesEnd} from "../../microElements";
import Movi from "../Movies/Movi";

function SortGenre(props) {
    let {state: id} = props.location
    let [page, setPage] = useState(1);

    const pageN = () => {
        setPage(page + 1)
    }
    const pageP = () => {
        if (page > 1) setPage(page - 1)
    }

    let [movie, setMovie] = useState([]);


    useEffect(() => fetch(urlGenreMovies + page + centerUrlMovies + id + urlGenreMoviesEnd)
        .then(value => value.json())
        .then(value => setMovie(value.results)), [page])

    return (<div className = "someBox center">
        <div className = "someBox">{movie.map((value, index) => <Movi key = {index} value = {value}/>)}</div>
        <div color = "center" className = {'center'}>
            <nav aria-label = "Page navigation example">
                <ul className = "pagination">
                    <li className = "page-item"><a className = "page-link" onClick = {pageP}>Previous</a></li>
                    <li className = "page-item"><a className = "page-link" onClick = {pageN}>Next</a></li>
                </ul>
            </nav>
        </div>
    </div>);
}

export default SortGenre;
