import './App.css'
import Example from './components/Example'
import { Route, Switch } from "react-router-dom";

import NavbarExample from './components/Navbar/NavbarExample'
import { Home } from './pages/Home';
import ProductList from './components/ProductList';
import ProductListSimple from './components/ProductListSimple';
import PromoSections from './components/PromoSections';
import QuickView from './components/QuickView';
import Navigation from './components/Navigation';
import FormLayout from './components/FormLayout';


function App() {
  return (
    <>      
      <NavbarExample />     

      <Switch>
        <Route path="/" exact>
          <PromoSections />
        </Route>
        <Route path="/example">
          {/* <Example /> */}
          <FormLayout />
        </Route>
        <Route path="/team">
          <Navigation />
        </Route>
        <Route path="/products">     
         <ProductListSimple /> 
        </Route>
        <Route path="/projects">
          <ProductList /> 
        </Route>
      </Switch>
    </>
  )
}

export default App
