import Movi from "./Movi";
import {useEffect, useState} from "react";
import {URLMOVI} from "../../microElements";


function Movies() {


    let [page, setPage] = useState(1);

    const pageN = () => {
        setPage(page + 1)
    }
    const pageP = () => {
        if (page > 1) setPage(page - 1)
    }
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(URLMOVI + page + '')
            .then(value => value.json())
            .then(value => setMovies([...value.results]))
    }, [page])


    return (<div className = "someBox center">

        <div className = "someBox">{movies.map((value, index) => <Movi key = {index} value = {value}/>)}</div>
        <div color = "center" className = {'center'}>
            <nav aria-label = "Page navigation example">
                <ul className = "pagination">
                    <li className = "page-item">
                        <button className = "page-link" onClick = {pageP}>Previous</button>
                    </li>
                    <li className = "page-item">
                        <button className = "page-link" onClick = {pageN}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>);
}

export default Movies;
