import React from "react";
import { HashRouter, Route, NavLink, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

import recommendMusic from "./pages/recommendMusic/recommendMusic";
import personalFM from "./pages/personalFM/personalFM";
import video from "./pages/video/video";
import liveStreaming from "./pages/liveStreaming/liveStreaming";
import friends from "./pages/friends/friends";
import SongList from "./pages/songList/songList";

import { requestData } from "./components/MusicComponent";

import { connect } from "react-redux";

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      themeColor: "primary",
      navList: [
        {
          id: 0,
          name: "recommendMusic",
          icon: "Music-note-beamed",
          content: "推荐音乐",
          select: true,
        },
        {
          id: 1,
          name: "personalFM",
          icon: "Mic",
          content: "私人FM",
          select: false,
        },
        {
          id: 2,
          name: "video",
          icon: "Camera-video",
          content: "最新MV",
          select: false,
        },
        {
          id: 3,
          name: "liveStreaming",
          icon: "Filter",
          content: "排行榜",
          select: false,
        },
        {
          id: 4,
          name: "friends",
          icon: "people",
          content: "朋友",
          select: false,
        }
      ],
      login: {
        loginShow: false,     // 登录框是否显示
        nickname: "未登录",   // 用户名
        avatarUrl: "",        // 头像
        loginState: false     // 是否登录
      },
      musicCtrl: {
        musicName: "空",
        avatarName: "空",
        albumPic: "https://p1.music.126.net/VpxLTSBr1mAcIqIneMFKxA==/1374389547119710.jpg",
        musicUrl: "",
        // 播放，时间相关
        play: false,
        timer: "",
        speed: 100,
        volume: 50,
        playDuration: 0,
        playPercentage: 0,
        durationSecond: 0,
        durationMinute: "00:00"
      },
      todaySongList: {},
      length: 0,
    }


  };

  // 信息更新，登录框显示与隐藏,
  toSetState = (attr: string, newData: any): void => {
    let getLogin = JSON.parse(JSON.stringify(this.state[attr]));

    for (let key in newData) {
      getLogin[key] = newData[key];
    }

    this.setState({
      [attr]: getLogin
    })
  };

  setData = (editName: any, step: any = 11): void => {
    this.setState({
      editName: step
    })
  }


  // 发送登录请求
  reqLogin = (username: string, password: any): void => {
    let url = `http://localhost:4000/login/cellphone?phone=${username}&password=${password}`;
    requestData(url)
      .then((data: any) => {
        this.toSetState("login", {
          nickname: data.profile.nickname,
          avatarUrl: data.profile.avatarUrl,
          loginState: true,
          loginShow: false
        })
      })
      .then(() => {
        // 登录之后自动请求歌单列表
        this.reqSongList("337199199")
      })
  }


  // 请求歌单（应该放到登录完后）
  reqSongList = (userId: string): void => {
    let url = `http://localhost:4000/user/playlist?uid=${userId}`;

    let songListData = [];
    requestData(url)
      .then((data: any) => {
        songListData = data.playlist.map((item: any, index: number) => {
          return {
            name: "songList",
            content: item.name,
            id: item.id,
            select: false,
            icon: "Music-note-list",
          }
        })


        this.setState({
          length: this.state.navList.push(...songListData)
        })

      })

  }


  // 获取当前播放音乐的信息,双击音乐后会被调用
  getCurrentPlayMusic = (message: any): void => {
    console.log("获取目前歌曲的信息")
    this.toSetState("musicCtrl", message);
    const audio: any = this.getAudioComponent();
    // 获取双击之后音乐的秒数
    audio.load();
    audio.oncanplay = () => {
      // 开启定时器
      // 清空之前的的数据
      this.toSetState("musicCtrl", { durationSecond: audio.duration, playDuration: 0, playPercentage: 0 });


      this.progresstimer(true);

    }



  }

  // 进度条滚动
  progresstimer = (flag: boolean) => {
    let timer;
    if (flag) {
      timer = setInterval(() => {
        this.currentPlayTime(this.state.musicCtrl.durationSecond);
      }, this.state.musicCtrl.speed)
      this.toSetState("musicCtrl",{timer: timer});
    } else {
      console.log("停止停止");
      clearInterval(timer);
      clearInterval(this.state.musicCtrl.timer);
    }

  }
  currentPlayTime = (musicDuration: number) => {
    if (this.state.musicCtrl.durationSecond > this.state.musicCtrl.playDuration) {
      let percentage: number = (this.state.musicCtrl.playDuration / musicDuration) * 100;
      this.toSetState("musicCtrl", { playDuration: this.state.musicCtrl.playDuration + 0.1, playPercentage: percentage });
    } else {
      this.progresstimer(false)
    }
  }

  // 控制声音的进度条
  currentVolume = (event: any) => {
    event.persist();
    let clickCoordinates = event.pageX - event.target.offsetLeft;
    let afterClickVolume =  clickCoordinates / event.target.offsetWidth;

    const audio: any = this.getAudioComponent();
    audio.volume = afterClickVolume;

    this.toSetState("musicCtrl",{volume: parseInt(afterClickVolume * 100 + '')});
    console.log(audio.volume);
  }




  // 音乐点击暂停或者开始
  playAndPause = () => {
    if (!this.state.musicCtrl.musicUrl) {
      return;
    }
    const audio: any = this.getAudioComponent();

    // 由于setState还是dispatch都有延迟，所有这么写是可以的
    this.toSetState("musicCtrl", { play: !this.state.musicCtrl.play });
    let flag = !this.state.musicCtrl.play;

   

    if (flag) {
      audio.play();
      // this.progresstimer(true);
    } else {
      audio.pause();
      // this.progresstimer(false);
    }

  }

  // 使用闭包来获取audio组件
  getAudio = (audio: any) => {
    let audioComponent = audio;
    return function () {
      return audioComponent ? audioComponent : "未获取组件";
    }
  }
  getAudioComponent = () => { }



  // props变化
  componentWillReceiveProps(nextProps: any) {

    if (!(JSON.stringify(nextProps) == JSON.stringify(this.props))) {
      console.log("App 监视props已变化");
      this.toSetState("musicCtrl", { musicUrl: nextProps.store.musicUrl, play: nextProps.store.musicPlay });
    }

    return true;
  }

  render(): any {
    return (
      <div className="App">
        <audio src={this.state.musicCtrl.musicUrl} autoPlay ref={(audio) => { this.getAudioComponent = this.getAudio(audio) }}></audio>

        <HashRouter>
          {/* 顶部导航栏 */}
          <nav className={`navbar navbar-dark bg-${this.state.themeColor}`}>
            <a className="navbar-brand" href="http://localhost:3000/#/">青空云音乐</a>
            <div className="user">
              <img src={this.state.login.avatarUrl} alt="" />
              <span onClick={() => this.toSetState("login", { loginShow: true })}>{this.state.login.nickname}</span>
            </div>
          </nav>


      
            {/* 左边的列表 */}
          <div className="navList">
            <ul>
              <ListLink navList={this.state.navList} edit={this.setData} />
            </ul>
          </div>

          {/* 右边对应的内容 */}
          <div className="column">
            <Redirect path="/" to="/recommendMusic" />
            <Route path="/recommendMusic" component={recommendMusic} />
            <Route path="/personalFM" component={personalFM} />
            <Route path="/video" component={video} />
            <Route path="/liveStreaming" component={liveStreaming} />
            <Route path="/friends" component={friends} />
            <Route path="/songList" render={(routeProps: any) => {
              return (
                <SongList router={routeProps} getCurrentPlayMusic={this.getCurrentPlayMusic} />
              )
            }}></Route>

          </div>
       
          
        </HashRouter>


        {/* 登录组件是否显示 */}
        {this.state.login.loginShow ? <Login toSetState={this.toSetState} reqLogin={this.reqLogin} /> : null}



        {/* 底部现在播放歌曲的进度条等 */}
        <div className="audio">
          <div className="audioCtrl">
            <span><img src={process.env.PUBLIC_URL + `/icons/Skip-start.svg`} alt="" /></span>
            <span onClick={this.playAndPause}>
              <img src={this.state.musicCtrl.play ? process.env.PUBLIC_URL + `/icons/pause.svg` : process.env.PUBLIC_URL + `/icons/play.svg`} alt="" />
            </span>
            <span><img src={process.env.PUBLIC_URL + `/icons/Skip-end.svg`} alt="" /></span>
          </div>


          <div className="currentSong">
            <img src={this.state.musicCtrl.albumPic} alt="" className="avatarImg" />
            <section className="avatar">
              <p title={this.state.musicCtrl.musicName}>{this.state.musicCtrl.musicName}</p>
              <p>{this.state.musicCtrl.avatarName}</p>
            </section>


            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: `${this.state.musicCtrl.playPercentage}%` }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>{this.state.musicCtrl.playPercentage}%</div>
            </div>

            <div className="voice">
              <span><img src={process.env.PUBLIC_URL + `/icons/Volume-up.svg`} alt="" /></span>
              <div className="progress" onClick={this.currentVolume}>
                <div className="progress-bar" role="progressbar" style={{ width: `${this.state.musicCtrl.volume}%` }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} >{this.state.musicCtrl.volume}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




// 左边列表
function ListLink(props: any) {

  let clickActive = (select: boolean, index: number) => {
    props.navList.map((item: any) => {
      return item.select = false;
    })
    props.navList[index].select = true;
    props.edit("navList", props.navList)
  }


  return props.navList.map((item: any, index: number) => {
    return <li key={item.id} style={{ "borderLeftWidth": item.select ? "7px" : "0" }} onClick={() => clickActive(item.select, index)} title={item.content}>
      <NavLink to={"/" + item.name + "?id=" + item.id}>
        <img src={process.env.PUBLIC_URL + `/icons/${item.icon}.svg`} alt="" width="20" height="20" />
        <span >{item.content}</span>
      </NavLink>
    </li>
  })
}

// 登录框组件
function Login(props: any) {

  // 获取输入的用户名和密码
  let [username, setUsername] = React.useState("");
  let [password, setPassword] = React.useState("");
  let setUserMessage = (event: any, type: string) => {
    event.persist();
    if (type === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }

  }



  // 关闭登录框
  let closeLoginBox = (event: any): void => {
    if (event.target.className === "login") {
      props.toSetState("login", { loginShow: false })
    }
  }



  return <div className="login" onClick={closeLoginBox}>
    <div className="loginBox">
      <div className="login-type">
        <span>手机登录</span>
        <span>短信登录</span>
      </div>
      <div className="user-data">
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={(event: any) => setUserMessage(event, "username")} />
        <input type="password" className="form-control" placeholder="password" aria-label="Username" aria-describedby="addon-wrapping" onChange={(event: any) => setUserMessage(event, "password")} />
      </div>

      <div className="submit-data">
        <button type="button" className="btn btn-primary" onClick={() => props.reqLogin(username, password)}>Login</button>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state: any) => {
  return {
    store: state
  }
}


export default connect(mapStateToProps)(App);