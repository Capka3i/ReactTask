import Gerne from "./Gerne";
import {useEffect} from "react";
import {URLGENRE} from "../../microElements";
import {useDispatch, useSelector} from "react-redux";
import {GENRE} from "../../reduxComponents/constActive";

function Gernes() {
    const someStore = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => fetch(URLGENRE)
        .then(value => value.json())
        .then(value => dispatch({type: GENRE, payload: value.genres})), [])


    return (<div className = "center">

        {someStore.genre.map((value, index) => <Gerne key = {index} value = {value}/>)}
    </div>);
}

export default Gernes;
