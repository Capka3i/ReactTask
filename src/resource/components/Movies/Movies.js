import Movi from "./Movi";
import {useEffect, useState} from "react";
import {URLMOVI} from "../../microElements";


function Movies() {


    let [id, setId] = useState([]);
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(URLMOVI + id + '')
            .then(value => value.json())
            .then(value => setMovies([...value.results]))
    }, [id])


    return (<div className = "someBox center" >

        <div className = "someBox">{movies.map((value, index) => <Movi key = {index} value = {value}/>)}</div>
        <div color = "center" className={'center'}>
            <nav aria-label = "Page navigation example">
                <ul className = "pagination">
                    <li className = "page-item">
                        <button className = "page-link">Previous</button>
                    </li>
                    <li className = "page-item">
                        <button className = "page-link">Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>);
}

export default Movies;
