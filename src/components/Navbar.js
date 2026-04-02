import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav">
            <h2>Atharva Mishra</h2>
            <div>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </nav>
    );
}

export default Navbar;

// https://drive.google.com/file/d/1QTSzjzHp-D5GoCqUSUx6C8BhkeULsZsQ/view?usp=sharing