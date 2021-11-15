import React, { useState } from "react";
import DisplayButtons from "./DisplayButtons";
import DisplayComponent from "./DisplayComponent";
import styles from "./Display.module.css"

export default function Display() {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [timeInterval, setTimeInterval] = useState();
  const [status, setStatus] = useState('start')

  function start() {
    run();
    setTimeInterval(setInterval(run, 1000));
  }

  let updatedHours = time.h;
  let updatedMin = time.m;
  let updatedSec = time.s;

  function run() {
    if (updatedSec === 60) {
      updatedMin++;
      updatedSec = 0;
    }
    if (updatedMin === 60) {
      updatedHours++;
      updatedMin = 0;
    }

    setStatus('stop')
    updatedSec++;
    return setTime({ s: updatedSec, m: updatedMin, h: updatedHours });
  }

  function stop() {
    setStatus('resume')
    clearInterval(timeInterval);
  }

  function resume() {
    setStatus('stop')
    start();
  }

  function reset() {
    setStatus('start')
    clearInterval(timeInterval);
    setTime({ s: 0, m: 0, h: 0 });
  }

  return (
    <div className={styles.content}>
      <div>
        <DisplayComponent time={time} styles={styles} />
      </div>
      <div>
        <DisplayButtons
          status={status}
          styles={styles}
          start={start}
          stop={stop}
          resume={resume}
          reset={reset}
        />
      </div>
    </div>
  );
}
