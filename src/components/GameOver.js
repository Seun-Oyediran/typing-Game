import React from 'react'
import { Link } from 'react-router-dom'
const GameOver = ({ score }) => {
    return (
        <>
            <section className='gameover'>
                <div className="container">
                    <div className="div">
                        <div className="card-panel">
                            <h3 className="center-align">GAME OVER</h3>
                            <h5>Final Score: <span>{score}</span></h5>
                            <div className="section"></div>
                            <div className="info">
                                <Link to='/'><p className="btn orange darken-3 hoverable">Restart</p></Link>
                                <Link to='/high-scores'><p className="btn orange darken-3 hoverable">high score</p></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default GameOver
