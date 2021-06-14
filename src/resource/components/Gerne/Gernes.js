import Gerne from "./Gerne";
import {useEffect, useState} from "react";
import {URLGENRE} from "../../microElements";

function Gernes() {

    let [ganre, setGenre] = useState([]);

    useEffect(() => fetch(URLGENRE)
        .then(value => value.json())
        .then(value => setGenre(value.genres)), [])


    return (<div className = "center">

        {ganre.map((value, index) => <Gerne key = {index} value = {value}/>)}
    </div>);
}

export default Gernes;
