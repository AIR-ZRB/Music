import React from "react"

import "./components.scss";


// 音乐列表（歌单使用）
export let MusicList = (props: any): any => {

    // 请求到双击后的歌曲，并且把url给父组件的audio组件使用
    function playMusic(currentMusicMessage: any) {
        // console.log(currentMusicMessage.name);
        // console.log(currentMusicMessage.albumPic);
        // console.log(currentMusicMessage.avatarName);
        
        let url = `http://localhost:4000/song/url?id=${currentMusicMessage.musicId}`;
        requestData(url)
            .then((data: any) => {
                // 注意：如果没有版权或者没有的音乐你双击之后返回的也是null
                // console.log(data.data[0].url);  // 音频地址，放入audio组件的src即可
                props.getMusicUrl({
                    musicName:currentMusicMessage.name,
                    albumPic:currentMusicMessage.albumPic,
                    avatarName: currentMusicMessage.avatarName,
                    musicUrl: data.data[0].url
                })     // 传给父组件，让audio组件播放
                



            })
    }


    return <div className="musicList">
        <ul>
            <li></li>
            <li>操作</li>
            <li>音乐标题</li>
            <li>歌手</li>
            <li>专辑</li>
            <li>时长</li>
        </ul>

        {props.musicList.map((item: any, index: number) => {
            return <ul key={`${item.musicId}+${index}`} onDoubleClick={() => playMusic(item)}>
                <li>1</li>
                <li>Heart</li>
                <li>{item.name}</li>
                <li>{item.avatarName}</li>
                <li>{item.albumName}</li>
                <li>{item.time}</li>
            </ul>

        })}
    </div>

}

// 请求数据
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

// 网易云的经典导航栏
export let NavList = (props: any): any => {
    // 点击切换，需要传入一个方法来修改父组件的state
    let clickActive = (select: boolean, index: number) => {
        props.navList.map((item: any) => {
            return item.select = false;
        })
        props.navList[index].select = true;
        props.edit("navList", props.navList)

    }
    return <div className="navigation">
        <ul>
            {props.navList.map(((item: any, index: number) => {
                return <li key={item.name} onClick={() => clickActive(item.select, index)} style={{ "borderBottomWidth": item.select ? "2px" : "0px" }}><a>{item.name}</a></li>
            }))}
        </ul>
    </div>

}


// 加载动画
export let Loading = (): any => {
    return <div className="loading">
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>

}


// 音频
export let AudioComponent = (props: any): any => {
    console.log("音乐组件")
    return <audio src={props.musicUrl} autoPlay ref={(audio)=>{props.getAudio(audio)}}>你的浏览器不支持</audio>
    // return <audio src={props.musicUrl} autoPlay ref={(audio)=>{aa = audio}}>你的浏览器不支持</audio>
}