import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Detalle from '../components/Detalle';
import Crear from '../components/Crear';


const AppRouter = () => {

    return (

        <>

        <Router>
        < NavBar /> 

        <Switch>

          

        <Route exact path="/detalle" >
        < Detalle />                

        </Route>   
        <Route exact path="/crear" >
        < Crear />                

        </Route>  
        <Route exact path="/" >
        < Home />                

        </Route>  



        </Switch>

        </Router>





    </>
    )

   


}

export default AppRouter;
