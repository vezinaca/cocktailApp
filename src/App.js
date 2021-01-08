import logo from './logo.svg';
//import './App.css';
import './App2.css';
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import DrinkCard from "./components/DrinkCard";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {DrinkProvider} from "./components/DrinkContext";



function App() {
  return (
    <Router>
        <DrinkProvider>
        <div className="App">
        
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/shop" component={Shop}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/shop/:id" component={DrinkCard}/>
               </Switch>
            </div>
       </div>
       </DrinkProvider>
    </Router>
  );
}

// const Home = () => {
//     <div>
//         <h1>Home page</h1>
//     </div>
// }

const Home = () => <div><h4>Home page</h4></div>

export default App;



