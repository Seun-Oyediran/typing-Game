import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import Instruction from '../components/Instruction'
import { DataContext } from '../Context'
import EndSars from '../components/EndSars'
const Home = () => {

    const { inst, show, setInst, sars, setSars } = useContext(DataContext)
    useEffect(() => {
        setInst(prev => prev = !false)
        setTimeout(() => {
            setSars(prev => prev = false)
        }, 5500)
    }, [])
    return (
        <>
            <Header />
            <Form />
            {inst && show[0] === 0 && <Instruction />}
            {sars && <EndSars />}
        </>
    )
}

export default Home
