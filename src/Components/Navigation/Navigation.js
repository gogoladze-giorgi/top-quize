
import Classes from './Navigation.module.css'
const Navigation=(props)=> {

     const link =  <link rel="stylesheet" href="https://en.wikipedia.org/wiki/Product_(business)"/>

    return<nav>
            <ul>
                <li onClick={props.homeChange}>
                    home
                    <span></span><span></span><span></span><span></span>
                </li>
                <li >
                    <a href="https://en.wikipedia.org/wiki/Product_(business)">products
                    <span></span><span></span><span></span><span></span>
                    </a>
                </li>
                <li>
                    services
                    <span></span><span></span><span></span><span></span>
                </li>
                <li>
                    contact
                    <span></span><span></span><span></span><span></span>
                </li>
            </ul>
        </nav>
}
export default Navigation;
