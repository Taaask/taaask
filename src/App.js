import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './styles/index.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Switch>
	  		  <Route path="/" exact component={Home} />
	  	  </Switch>
      </BrowserRouter>
    </div>
  )
}
