import React from "react";
import "./songList.scss";

import { MusicList } from "../../components/MusicComponent";


export default class songList extends React.Component<any,any> {
    constructor(props: any){
        super(props);

        this.state = {
            musicList: [
                {
                    like: true,
                    musicName: "好像爱这个世界",
                    singer: "华晨宇",
                    album: "歌手·当打之年 第9期",
                    time: "04:22"
                },
                {
                    like: true,
                    musicName: "好像爱这个世界",
                    singer: "华晨宇",
                    album: "歌手·当打之年 第9期",
                    time: "04:22"
                },
                {
                    like: true,
                    musicName: "好像爱这个世界",
                    singer: "华晨宇",
                    album: "歌手·当打之年 第9期",
                    time: "04:22"
                },
            ]
        }
    }


    render(){
        return (
            <div className="mySongList">
                <div className="listMessage">
                    <section className="picture">
                        <img src="https://pic4.zhimg.com/80/v2-2994fa192eb7b766b21b97d2a7a46c69_720w.jpg" alt=""/>
                    </section>
                    <section className="message">
                        <h3>我喜欢的歌单</h3>
                        <p>
                            <span className="user">青空</span>
                            <span className="createTime">2016-1-1</span>
                        </p>
                        <section className="btn-ctrl">
                            <button type="button" className="btn btn-primary">播放全部</button>
                            <button type="button" className="btn btn-light">收藏</button>
                            <button type="button" className="btn btn-light">分享</button>
                            <button type="button" className="btn btn-light">下载</button>
                        </section>
                    </section>
                </div>

                <div>
                    <MusicList musicList={this.state.musicList} />
                </div>
            </div>
        )   
    }
}