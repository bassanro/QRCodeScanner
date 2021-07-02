import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { AssetDetails } from './components/AssetDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
          <AssetDetails />
        </Route>
        <Route path="/asset/:AssetId">
            <AssetDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}



export default App;
