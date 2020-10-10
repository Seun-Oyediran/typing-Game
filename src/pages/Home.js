import React, { useContext } from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import Instruction from '../components/Instruction'
import { DataContext } from '../Context'
const Home = () => {
    const { inst, show } = useContext(DataContext)

    return (
        <>
            <Header />
            <Form />
            {inst && show[0] === 0 && <Instruction />}
        </>
    )
}

export default Home
