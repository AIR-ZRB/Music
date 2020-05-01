import React from "react";

import { NavList, MusicList, Loading, requestData } from "../../components/MusicComponent";

import { connect } from "react-redux";

class songList extends React.Component<any, any> {

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
            ]
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
            audio: ""
        }


    }


    // 当组件被加载时
    componentWillMount() {
        this.reqCurrentSongListMusic(this.props.router.location.search.substr(4));
        return true;
    }

    // 当props改变
    componentWillReceiveProps(nextProps: any) {
        // 当路由发生改变
        this.reqCurrentSongListMusic(nextProps.router.location.search.substr(4));
        return true;
    }


    // 传递给子组件的方法，用于获取双击之后music的src
    getMusicUrl(currentMusicMessage: any) {
        console.log("dbClick");
        console.log(currentMusicMessage.musicUrl);
        this.props.getCurrentPlayMusic(currentMusicMessage);
        this.props.dispatch({type: "musicUrl",data: currentMusicMessage.musicUrl});     // 当前播放的URL用Redux管理 
    }

    // 请求当前音乐列表里的音乐
    reqCurrentSongListMusic(songListId: string) {
        console.log("开始请求歌单里的音乐");


        let url = `http://localhost:4000/playlist/detail?id=${songListId}`;
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
                    <MusicList musicList={this.state.musicList} getMusicUrl={this.getMusicUrl.bind(this)} />
                </div>

                {/* Loading加载界面，暂时关闭 */}
                {this.state.requestSusscess ? null : <Loading />}
            </div>


        )
    }
}



const mapStateToProps = (state: any) => {
    return {
      store: state
    }
  }


export default connect(mapStateToProps)(songList)