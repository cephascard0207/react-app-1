
function Header(){
    return(
        <header>
            <nav className="nav">
            <img src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0" className="nav-logo"></img>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
        </header>
    )
}

function MainContent(){
    return(
        <div className="div-1">
            <center >
            <h1><strong>Fun Facts about React</strong></h1>
        <ul>
            <li>First Released in 2013</li>
            <li>Originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </center>
        </div>
    )
}

function Page() {
    return(
    <div>
        <MainContent/>
        <footer>
            <center>
            2021 Cephas Cardozo. All Rights Reserved
            </center>
        </footer>
    </div>
    )
}

ReactDOM.render(
    <div>
        <Header/>
        <Page/>
    </div>
    ,document.getElementById("root"))


























