import React from 'react'
import {useTimer} from 'use-timer'

function App() {

    const {time, start, pause, reset, status} = useTimer();

    return (
        <>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
           <p>Start Timer {time}</p>
           {status === 'RUNNING' && <p> RUNNING...</p>}
        </>
    )

}

export default App;
