import mafia from "../assets/mafia1.jpg"
export default function Header(){
    return(
        <header>
            <h1>FINDING THE MAFIA</h1>
            <div className="fullscreen-background">
                    <img src={mafia} className="fullscreen-image"/>
            </div>
        </header>
    );
}