import {Fragment,useState} from "react";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Footer from './Components/footer/Footer'
import Home from "./Components/Home/Home";
const App =()=> {
    const [home, setHome]=useState(false)
    const homeChangeHandler =()=> {
        setHome(true)
    }
    const acsses = !home;
    return <Fragment>
        {home && <Home/>}
        {acsses && <Header/>}
        {acsses && <Navigation homeChange={homeChangeHandler}/>}
        {acsses && <Footer/>}
    </Fragment>
}
export default App;
