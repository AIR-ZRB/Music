import React from "react"

import "./components.scss";


export let MusicList = (props: any): any => {
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


export let requestData = (url: string, params?: object): any => {
    return new Promise((reject: any, resolve: any) => {
        fetch(url)
            .then((res: any) => {
                return res.json();
            })
            .then((data: any) => {
                data.code === 200 ? reject(data) : resolve(data.msg);
            })
    })
}

// export let toSetState = (attr: string, newData: any): any => {

//     let getLogin = JSON.parse(JSON.stringify(this.state[attr]));

//     for (let key in newData) {
//       getLogin[key] = newData[key];
//     }

//     this.setState({
//       [attr]: getLogin
//     })
//   };