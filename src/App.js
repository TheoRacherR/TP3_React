import './App.css';
import Home from './Component/Home'
import Route from './Component/Route'
import Person from './Component/Person';
import Details from './Component/Details';
import Link from './Component/Link'


const App = () => {


  return (
    <div className="App">
      <div className="container">
        <Link className="item Home" href="/">
          Vers la page d'accueil
        </Link>

        <Link className="item Person" href="/Person">
          Vers la fiche de la personne
        </Link>

        <Link className="item Details" href="/Details">
          Vers la page la Details
        </Link>
      </div>
    
      <Route path="/">
        <Home/>
      </Route>

      <Route path="/Person">
          <Person/>
      </Route>

      <Route path="/Details">
          <Details/>
      </Route>

    </div>
  );
}

export default App;
