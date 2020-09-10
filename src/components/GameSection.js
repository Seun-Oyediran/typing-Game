import React, { useRef, useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context'
const GameSection = () => {
    const [col, setCol] = useState(false)
    const data = useContext(DataContext)
    const { currentWord, matched, score, time, setTime, setCurrentWord, name, difficulty } = data
    const place = useRef()
    useEffect(() => {
        place.current.focus()
        setCurrentWord(null)
        let timer = setInterval(() => {
            setTime(prev => prev - 1)

        }, 1000)
        return (() => {
            clearInterval(timer)
        })
    }, [])
    const classes = !col ? 'card-panel transparent' : 'card-panel white'
    const word = useRef()

    const compare = (e) => {

        if (e.target.value === word.current.innerHTML) {
            e.target.value = ''
            matched()
            setCol(prev => prev = !prev)
        }
    }
    return (
        <section>
            <div className="container">
                <div className="section"></div>
                <div className={classes}>
                    <div className="info">
                        {name && <p className='cap'>Player: <span>{name}</span> </p>}
                        {difficulty && <p className='cap'>Difficulty: <span>{difficulty}</span> </p>}
                    </div>
                    <h3 ref={word} className="center-align">
                        {currentWord}
                        {!currentWord && 'start'}
                    </h3>
                    <div className="section"></div>
                    <input type="text" className='center-align' ref={place} placeholder='Type Here' onChange={compare} autoFocus />
                    <div className="section"></div>
                    <div className="info">
                        <h6>Score: <span>{score}</span></h6>
                        {time > -1 && <h6>Time-left: <span className='red-text'>{time}</span>s</h6>}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default GameSection
