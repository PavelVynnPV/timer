import React from 'react'

export default function DisplayButtons({start, stop, resume, reset, styles, status}) {
    return (
        <div className={styles.btns}>
            <button className={status === 'start' ? styles.btn : styles.unActive} onClick={()=> start()}>Start</button>
            <button className={status === 'stop' ? styles.btn : styles.unActive} onClick={()=> stop()}>Stop</button>
            <button className={status === 'resume' ? styles.btn : styles.unActive} onClick={()=> resume()}>Resume</button>
            <button className={status === 'resume' ? styles.btn : status === 'stop' ? styles.btn : styles.unActive} onClick={()=> reset()}>Reset</button>
        </div>
    )
}
