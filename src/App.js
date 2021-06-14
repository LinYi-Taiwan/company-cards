import './style/App.css';
import { Route } from 'react-router-dom';
import Cards from './Cards';
function App() {
    return (
        <div className="App">
            {/* <Route path="/" exact={true} component={Cards}></Route> */}

            <Cards></Cards>
        </div>
    );
}

export default App;
