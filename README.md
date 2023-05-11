# How to push values into React Array State or Object States
## Configuration
Let's assume that we have a file named Example.js which used functional component and hooks system for React State system. As - 

```js
import React, { useState } from 'react'

const Example = () => {
    const [songs, setSongs] = useState([]);

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
```


