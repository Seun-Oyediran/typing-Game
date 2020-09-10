import React, { useRef, useContext } from 'react'
import { DataContext } from '../Context'
const Form = () => {
    const name = useRef()
    const diff = useRef()
    const data = useContext(DataContext)
    const { getName, error } = data
    const doName = () => {
        getName(name.current.value, diff.current.value)
    }

    return (
        <>
            <div className="section"></div>
            <section>
                <div className="container">

                    <div className="section"></div>
                    <div className="card-panel  transparent">
                        <h3 className="center-align">
                            Welcome
                        </h3>
                        <h6 className='center-align' style={{ textTransform: 'capitalize' }}>please enter your name and choose a difficulty below</h6>

                        <div className="section"></div>
                        {error && <p className="center-align red-text">{error}</p>}

                        <input type="text" placeholder="Enter Your Name" ref={name} />


                        <div className="input-field col s12">

                            <h5 className='center-align'>Select Difficulty</h5>
                            <select name='difficulty' className="browser-default" ref={diff}>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>

                        </div>
                        <div className="section"></div>
                        <div className="button">
                            <p className="btn hoverable orange darken-3" onClick={doName}>Start Game</p>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Form
