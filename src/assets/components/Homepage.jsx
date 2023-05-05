import React from "react"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Banner from "./Banner/Banner"
import Lobby from "./Lobby/News/Lobby"
import Newpost from "./Lobby/Create/Newpost"

function Homepage(){
    return(
        <React.Fragment>  
            <Banner />
            <Router>
            <Switch>
                <Route exact path="/news">
                    <Lobby />
                </Route>
                <Route exact path="/create">
                    <Newpost/>
                </Route>
            </Switch>
            </Router>
        </React.Fragment>
    )
}

export default Homepage