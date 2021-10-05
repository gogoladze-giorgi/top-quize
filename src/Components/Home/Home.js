import Classes from './Home.module.css'
const Home =()=> {

    return <header className={Classes.home_headers}>
        <div className={Classes.home}>
            <h1>home</h1>
        </div>
        <div className={Classes.links}>
            <div>products</div>
            <div>servises</div>
            <div>contacts</div>
        </div>
    </header>
}
export default Home;
