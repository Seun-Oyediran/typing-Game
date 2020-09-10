import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Header from '../components/Header'
const Error = () => {
    const location = useLocation()
    console.log(location);
    return (
        <>
            <Header />
            <section>
                <div className="container">
                    <div className="section"></div>
                    <div className="section"></div>
                    <div className="card-panel transparent">
                        <h3 className="center-align">
                            ERROR 404
                        </h3>
                        <div className="divider"></div>
                        <h5 className="center-align">
                            The requested page <span className="red-text">'{location.pathname}'</span> was not found
                        </h5>
                        <div className="section"></div>
                        <div className="button">
                            <Link to='/'><p className="btn darken-3 orange hoverable">return home</p></Link>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error
