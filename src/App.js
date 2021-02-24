import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './components/Login';
import Register from "./components/Register";
import Page from './components/NavigationDrawer';
import Books from "./components/Books";
import Customers from './components/Customers';


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/users">
                        <Page>
                            <Customers/>
                        </Page>
                    </Route>
                    <Route path="/">
                        <Page>
                            <Books/>
                        </Page>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
