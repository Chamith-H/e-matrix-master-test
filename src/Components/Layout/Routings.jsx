import { Routes, HashRouter as Router, Route} from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Offerings from "../Pages/Offerings";

const Routings =( props )=> {
    return (
        <div className="Routings">
            <Router>
                <Routes>
                    <Route path='/' element={ <Home Scroll={props.Catch}/> } />
                    <Route path='/about-us' element={ <About/> } />
                    <Route path='/offerings' element={ <Offerings/> } />
                </Routes>
            </Router>
        </div>
    )
}

export default Routings