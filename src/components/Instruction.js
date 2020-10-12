import React, { useContext } from 'react'
import { DataContext } from '../Context'

const Instruction = () => {

    const { setInst, setShow } = useContext(DataContext)
    return (
        <>
            <section className='instruction'>
                <div className="container cont">
                    <div className='inst card-panel'>
                        <h3 className="center-align">
                            Instructions
                </h3>
                        <ul className='listing'>
                            <li > <h5> The first word is always "START".</h5></li>
                            <li> <h5>It is not case sensitive.</h5> </li>
                            <li><h5>7 seconds for Easy, 5 seconds for Medium and 3 seconds for Hard</h5></li>
                        </ul>
                        <div className='options optons'>
                            <h6 className='vvv btn hoverable red darken-3' onClick={() => { setShow(prev => prev = [1]) }}>Never show again</h6>
                            <h6 className='vvv btn hoverable orange darken-3' onClick={() => { setInst(prev => prev = false) }}>close</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Instruction
