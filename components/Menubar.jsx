import { Link } from "react-router-dom";
import "../stylesheets/Menubar.css"

const Menubar = () => {
    return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/woman">Woman</Link>
            </li>
            <li>
                <Link to="/man">Man</Link>
            </li>
            <li>
                <Link to="/tech">Tech</Link>
            </li>
            <li>
                <Link to="/jewelery">Jewelery</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Menubar;