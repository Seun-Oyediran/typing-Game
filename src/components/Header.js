import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {

    return (
        <header>
            <nav className='orange darken-3'>
                <div className="container">
                    <div className="nav-wrapper ">
                        <Link to='/'>
                            <p className="brand-logo left">Typing Game</p>

                        </Link>
                        <Link to='/high-scores'><p className="right hid">
                            High Score
                        </p></Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
