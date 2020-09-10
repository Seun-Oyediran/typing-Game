import React, { useState, useContext } from 'react'
import Header from '../components/Header'
import Easy from '../components/Easy'
import Medium from '../components/Medium'
import Hard from '../components/Hard'
import { DataContext } from '../Context'
const HighScore = () => {
    const [current, setCurrent] = useState(0)
    const data = useContext(DataContext)
    const { profile } = data
    const hardP = profile.filter(item => item.difficulty === 'hard').sort((a, b) => (a.score < b.score ? 1 : -1))
    const mediumP = profile.filter(item => item.difficulty === 'medium').sort((a, b) => (a.score < b.score ? 1 : -1))
    const easyP = profile.filter(item => item.difficulty === 'easy').sort((a, b) => (a.score < b.score ? 1 : -1))

    const change = (e) => {
        if (e.target.classList.contains('easy')) {
            setCurrent(prev => prev = 0)
        } else if (e.target.classList.contains('medium')) {
            setCurrent(prev => prev = 1)
        } else if (e.target.classList.contains('hard')) {
            setCurrent(prev => prev = 2)
        }
    }
    const style = {
        borderBottom: current === 0 ? '3px solid rgba(0, 0, 0, 0.6)' : 'none'
    }
    const style1 = {
        borderBottom: current === 1 ? '3px solid rgba(0, 0, 0, 0.6)' : 'none'
    }
    const style2 = {
        borderBottom: current === 2 ? '3px solid rgba(0, 0, 0, 0.6)' : 'none'
    }
    // { current == 0 && style={ { borderBottom: '3px solid rgba(0, 0, 0, 0.6)' } } }
    return (
        <>
            <Header />
            <section>
                <div className="container">
                    <h3 className="center-align">
                        High Scores
                </h3>
                    <div className="card-panel transparent">
                        <div className="options" onClick={change}>
                            <h5 style={style} className='easy'>Easy</h5>
                            <h5 style={style1} className="medium">Medium</h5>
                            <h5 style={style2} className="hard">Hard</h5>
                        </div>
                        <div className="section"></div>
                        <table>
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Name</th>
                                    <th>Score</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>

                                {current === 0 && easyP.map((item, index) => (<Easy key={index} index={index} item={item} />))}
                                {current === 1 && mediumP.map((item, index) => (<Medium key={index} index={index} item={item} />))}
                                {current === 2 && hardP.map((item, index) => (<Hard key={index} index={index} item={item} />))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HighScore
