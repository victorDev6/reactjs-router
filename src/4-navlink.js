import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";

const Proyecto = () => {
    const match = useRouteMatch();
    const { proyecto_id } = match.params;
    return(
        <h2>Proyecto {proyecto_id}</h2>
    );
}

const Portafolio = () => {
    const match = useRouteMatch();

    return(
        <div>
            <h1>Portafolio</h1>
            <ul>
                <li><NavLink exact to={`${match.url}/proyecto-1`}>Proyecto 1</NavLink></li>
                <li><NavLink activeStyle={{ fontSize: 20 }} exact to={`${match.url}/proyecto-2`}>Proyecto 2</NavLink></li>
            </ul>
            <div>
                <Switch>
                    <Route path={`${match.path}/:proyecto_id`}>
                        <Proyecto />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink exact to='/'>Inicio</NavLink></li>
          <li><NavLink isActive={(match, location) => {
              console.log(match, location);
              return true;
          }} exact to='/portafolio'>Portafolio</NavLink></li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Route exact path='/'>
            <h1>Inicio</h1>
          </Route>
          <Route path='/portafolio'>
              <Portafolio />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
