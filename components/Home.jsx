import { Link } from "react-router-dom"
import React from 'react'

const Home = () => {
    return (
    <>
        <div>
            <hr></hr>
            <nav>
                <ul>
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
            <main></main>
        </div>
        </>
    )
}

export default Home;