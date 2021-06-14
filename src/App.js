import './App.css';
import Movies from "./resource/components/Movies/Movies";
import Header from "./resource/components/Header/Header";
import Gernes from "./resource/components/Gerne/Gernes";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Details from "./resource/components/Details/Details";
import SortGenre from "./resource/components/Gerne/SortGenre";

function App(param) {
    console.log(param.value)
    return (<div>
        <Router>
            <Header/>
            <Switch>
                <Route exact path = {"/:id"} component = {Details}/>
                <Route path = {"/:genre"} component = {SortGenre}/>
                <div className={'someBox'}>
                    <Gernes/>

                    <Movies/>
                </div>
            </Switch>
        </Router>

    </div>);
}

export default App;
