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

## Pushing new values into the Array State named 'songs'

You can notice the helper function named pushSong in the configuration file. That function is created to do some dataloading that will eventually give us the state updated with all the existing array elements and also the songname, got from the first arguement of that function, pushed into that array state. So first of all for ease let's add some dummy default data to the array state manually

```js
const [songs, setSongs] = useState(['Tum Prem Ho', 'Hai Katha Sangram Ki', 'Ram Siya Ram' ]);
```

So, now that we have updated our state, which was previously an empty array, now we can call it an Array State of some Strings. Or, more preciesly (not neccessary) an Array State of three Strings.

Now, if we wish to add a new song to this Array of songs, we can use the helper function that we have created in the configuration step namely pushSong. Remember the function accepts a String as an argument and that String should be added on the Array of songs. And also notice, that the button we rendered on screen, calls the function when clicked. So now let's add some code to actually make the mechanism that pushes that new piece of song to the Array State.

```js
const [songs, setSongs] = useState(['Tum Prem Ho', 'Hai Katha Sangram Ki', 'Ram Siya Ram' ]);

const pushSong = (songname) => {
    const updatedState = [
        ...songs,
        songname
    ];

    setSongs(updatedState);
}

```

This function above creates a completely new array named updatedState. That expression '...songs' fetches all the elements of the array songs and adds them in this array. Then after the comma we added the songname that we wished to add, and which is got in the argument of the function.


