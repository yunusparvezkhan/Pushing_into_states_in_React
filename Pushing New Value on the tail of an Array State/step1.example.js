import React, { useState } from 'react'

const Example = () => {
    const [songs, setSongs] = useState(['Tum Prem Ho', 'Hai Katha Sangram Ki', 'Ram Siya Ram']);

    const renderSongs = () => {
        songs.map((song) => {
            return (
                <div>
                    <label>{song}</label>
                </div>
            )
        })
    }

    const pushSong = (songname) => {
        // some code to push the new song into the existing array of songs
    }

    return (
        <div>
            <ol>
                {renderSongs}
            </ol>
            <div>
                <h3>Push 'Mahabharat' Song</h3>
                <button onClick={() => pushSong('Mahabharat')} />
            </div>
        </div>
    )
}

export default Example