import React from "react"

import "./components.scss";


// 音乐列表（歌单使用）
export let MusicList = (props: any): any => {

    // 请求到双击后的歌曲，并且把url给父组件的audio组件使用
    function playMusic(musicId: string) {
        let url = `http://localhost:4000/song/url?id=${musicId}`;
        requestData(url)
            .then((data: any) => {
                // 注意：如果没有版权或者没有的音乐你双击之后返回的也是null
                // console.log(data.data[0].url);  // 音频地址，放入audio组件的src即可
                props.getMusicUrl(data.data[0].url)     // 传给父组件，让audio组件播放
                




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
            return <ul key={`${item.musicId}+${index}`} onDoubleClick={() => playMusic(item.musicId)}>
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


// 歌单列表
export class MusicSongList extends React.Component<any, any> {
    static defaultProps = {
        data: {
            coverImgUrl: "https://p2.music.126.net/apsoAvOWvOf--D1vfNl7Pg==/3296335861568246.jpg",        // 歌单的封面
            name: "Skyblue_Air喜欢的音乐",               // 歌单的名字
            id: "471267581",                  // 歌单的Id
            avatarUrl: "http://p1.music.126.net/56_Km5Vsr0S8cIgiI-C0Mw==/109951164938014307.jpg",
            nickname: "Skyblue_Air",
            musicList: [
                {
                    like: true,
                    musicName: "好像爱这个世界",
                    singer: "华晨宇",
                    album: "歌手·当打之年 第9期",
                    time: "04:22"
                }
            ],
        }
    }

    constructor(props: any) {
        super(props);
        this.state = {
            navList: [
                {
                    name: "歌曲列表",
                    urlName: "songLis",
                    select: true
                },
                {
                    name: "评论",
                    urlName: "comment",
                    select: false
                },
                {
                    name: "收藏者",
                    urlName: "collect",
                    select: false
                },
            ],
            musicList: [],                      // 获取歌单的音乐的列表
            requestSusscess: false,             // 请求是否成功，成功则隐藏Loading
            currentMusicUrl: ""                 // 当前播放音乐的URL
        }
    }

    // 当组件被加载时
    componentWillMount() {
        this.reqCurrentSongListMusic(this.props.songListId);
        return true;
    }

    // 当props改变
    componentWillReceiveProps(nextProps: any) {
        this.reqCurrentSongListMusic(nextProps.songListId);
        return true;
    }


    // 传递给子组件的方法，用于获取双击之后music的src
    getMusicUrl(url: string){
        this.setState({
            currentMusicUrl: url
        })
        console.log(url)
    }



    reqCurrentSongListMusic(songListId: string) {
        let url = `http://localhost:4000/playlist/detail?id=${songListId}`;
        console.log("start request")
        this.setState({
            requestSusscess: false
        })
        requestData(url)
            .then((data: any) => {
                let songListMusic = data.playlist.tracks.map((item: any, index: number) => {
                    return {
                        name: item.name,
                        musicId: item.id,
                        mvId: item.mv,
                        avatarName: item.ar[0].name,
                        avatarId: item.ar[0].id,
                        describe: item.alia[0],
                        albumPic: item.al.picUrl,
                        albumName: item.al.name,
                        albumId: item.al.id,
                    }
                })

               
                this.setState({
                    requestSusscess: true,
                    musicList: songListMusic
                })

            })
    }

    render() {

        return (
            <div className="mySongList">
                <div className="listMessage">
                    <section className="picture">
                        <img src={this.props.data.coverImgUrl} alt="" className="coverImg" />
                    </section>
                    <section className="message">
                        <h3>{this.props.data.name}</h3>


                        <div className="listCreate">
                            <img src={this.props.data.avatarUrl} alt="" className="avatar" />
                            <p>
                                <span className="user">{this.props.data.nickname}</span>
                                <span className="createTime">创建时间：2016-1-1</span>
                            </p>
                        </div>


                        <section className="btn-ctrl">
                            <button type="button" className="btn btn-primary">播放全部</button>
                            <button type="button" className="btn btn-light">收藏</button>
                            <button type="button" className="btn btn-light">分享</button>
                            <button type="button" className="btn btn-light">下载</button>
                        </section>
                    </section>
                </div>

                <div className="currentSongList">
                    <NavList navList={this.state.navList} />
                    <MusicList musicList={this.state.musicList}  getMusicUrl={this.getMusicUrl.bind(this)} />
                </div>

                {/* Loading加载界面，暂时关闭 */}
                {this.state.requestSusscess ? null : <Loading />}
                <AudioComponent musicUrl={this.state.currentMusicUrl}/>

            </div>
        )
    }
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
    return <audio src={props.musicUrl} autoPlay>你的浏览器不支持</audio>
}