import {Link} from "react-router-dom";
import React from "react";

function Header() {


    return (<div className = "navbar navbar-light bg-light">
        <div className = "container-fluid">
            <Link className = "navbar-brand" to = "">SomeSite</Link>
        </div>
    </div>);
}

export default Header;
