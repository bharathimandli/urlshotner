import AddUser from './components/AddUser'
import GetUser from './components/GetUser';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route exact path="/all" component={GetUser} />
        <Route exact path="/add" component={AddUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
