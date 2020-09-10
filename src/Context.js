import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { datas } from './Data'
export const DataContext = React.createContext()

const Context = ({ children }) => {
    const [words, setWords] = useState([])
    const [currentWord, setCurrentWord] = useState(null)
    const [name, setName] = useState(null)
    const [error, setError] = useState(null)
    const [score, setScore] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [profile, setProfile] = useState([])
    const [difficulty, setDifficulty] = useState('easy')
    const [time, setTime] = useState(6)

    const HIGH_SCORE_KEY = 'high_score_key'
    useEffect(() => {
        const getWord = () => {
            setWords(datas)
        }
        getWord()
        let data = JSON.parse(localStorage.getItem(HIGH_SCORE_KEY))
        if (data) {
            setProfile(prev => prev = [...data])
        }
    }, [])

    useEffect(() => {
        if (time === 0) {
            setIsPlaying(false)
            setTime(prev => prev = -1)
            setProfile(prev => prev = [...prev, { name, score, difficulty, time: new Date().toLocaleString() }])
        }
    }, [time])

    useEffect(() => {
        let data = JSON.stringify(profile)
        localStorage.setItem(HIGH_SCORE_KEY, data)
    }, [profile])


    const history = useHistory()


    const getName = (name, diff) => {
        if (name === '') {
            setError('Please Enter Your Name!!!')
            setName(null)
        } else {
            setName(name)
            setError(null)
            setDifficulty(diff)
            setIsPlaying(true)
            history.push('/game')
        }
    }
    const matched = () => {
        setword()
        setScore(prev => prev + 1)
        let nos = 0
        if (difficulty === 'easy') {
            nos = 7
        }
        if (difficulty === 'medium') {
            nos = 5
        }
        if (difficulty === 'hard') {
            nos = 3
        }
        setTime(prev => prev = nos)
    }
    const setword = () => {
        let num = (words.length);

        let a = Math.floor(num * Math.random())
        let word = words[a]

        setCurrentWord(word.toLowerCase())
    }




    return (
        <DataContext.Provider value={{ getName, error, currentWord, matched, score, time, isPlaying, setIsPlaying, difficulty, setTime, setScore, name, setError, profile, setCurrentWord }}>
            {children}
        </DataContext.Provider>
    )
}

export default Context
