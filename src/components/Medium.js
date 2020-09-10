import React from 'react'

const Medium = ({ index, item }) => {
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.score}</td>
                <td>{item.time}</td>
            </tr>
        </>
    )
}

export default Medium
