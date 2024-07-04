import './Navbar.css'
import logoImg from '../assets/nav-img.png'

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={logoImg} alt="" />
                <h1>My Travel Journal</h1>
            </div>
        </nav>
    )
}

export default Navbar