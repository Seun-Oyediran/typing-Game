import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import GameSection from '../components/GameSection'
import { DataContext } from '../Context'
import GameOver from '../components/GameOver'
import { useHistory } from 'react-router-dom'
const Game = () => {
    const data = useContext(DataContext)
    const { isPlaying, setIsPlaying, score, setError, setTime, difficulty, setScore, name } = data
    const history = useHistory()
    useEffect(() => {
        if (!name) {
            setError('Please Enter Your Name!!!')
            history.push('/')
        }
        if (difficulty === 'easy') {
            setTime(7)
        }
        if (difficulty === 'medium') {
            setTime(5)
        }
        if (difficulty === 'hard') {
            setTime(3)
        }
        setIsPlaying(true)
        setScore(0)
    }, [])
    return (
        <>
            <Header />
            {isPlaying && <GameSection />}
            {!isPlaying && <GameOver score={score} />}

        </>
    )
}

export default Game
