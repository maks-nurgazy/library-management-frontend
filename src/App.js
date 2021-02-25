import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './components/Login';
import Register from "./components/Register";
import Page from './components/NavigationDrawer';
import Books from "./components/Books";
import Customers from './components/Customers';
import useToken from "./hooks/useToken";


function App() {
    const {token, setToken} = useToken();

    console.log(token);
    if (!token) {
        return <Router>
            <Route exact path="/register">
                <Register/>
            </Route>
            <Route exact path='/login'>
                <Login setToken={setToken}/>
            </Route>
        </Router>
    }
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/users">
                        <Page>
                            <Customers/>
                        </Page>
                    </Route>
                    <Route exact path="/">
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
