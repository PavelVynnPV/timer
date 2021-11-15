import React from 'react'

export default function DisplayComponent({time, styles}) {
    return (
        <div className={styles.time}>
            <span>{time.h >= 10 ? time.h : "0" + time.h}:</span>
            <span>{time.m >= 10 ? time.m : "0" + time.m}:</span>
            <span>{time.s >= 10 ? time.s : "0" + time.s}</span>
        </div>
    )
}
