import './App.css'
import Example from './components/Example'
import { Route, Switch } from "react-router-dom";

import NavbarExample from './components/Navbar/NavbarExample'
import { Home } from './pages/Home';


function App() {
  return (
    <>      
      <NavbarExample />     

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/example">
          <Example />
        </Route>
      </Switch>
    </>
  )
}

export default App
