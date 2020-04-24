import React from "react"

import "./components.scss";


export default function MsicList(props: any): any {
    return props.musicList.map((item: any, index: number) => {
        return <div className="musicList" key={`${item.musicList}+${index}`}>
            <ul>
                <li>01</li>
                <li>爱心</li>
                <li>{item.musicName}</li>
                <li>{item.singer}</li>
                <li>{item.album}</li>
                <li>{item.time}</li>
            </ul>
        </div>
    })
}