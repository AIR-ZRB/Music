import React from "react";
import { HashRouter, Route, NavLink, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

import recommendMusic from "./pages/recommendMusic/recommendMusic";
import personalFM from "./pages/personalFM/personalFM";
import video from "./pages/video/video";
import liveStreaming from "./pages/liveStreaming/liveStreaming";
import friends from "./pages/friends/friends";
import songList from "./pages/songList/songList";


import { requestData } from "./components/MusicComponent";

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
          content: "视频",
          select: false,
        },
        {
          id: 3,
          name: "liveStreaming",
          icon: "Tv",
          content: "直播",
          select: false,
        },
        {
          id: 4,
          name: "friends",
          icon: "people",
          content: "朋友",
          select: false,
        },
        // {
        //   id: "12312312",
        //   name: "songList",
        //   icon: "Heart",
        //   content: "喜欢的音乐",
        //   select: false,

        // },
        // {
        //   id: "11111111",
        //   name: "songList",
        //   icon: "Music-note-list",
        //   content: "我的歌单",
        //   select: false,

        // },
      ],
      login: {
        loginShow: false,     // 登录框是否显示
        nickname: "未登录",   // 用户名
        avatarUrl: "",        // 头像
        loginState: false     // 是否登录
      },
      todaySongList: {},
      length: 0
    }
  };

  // 信息更新，登录框显示与隐藏,
  toSetState(attr: string, newData: any): void {
    let getLogin = JSON.parse(JSON.stringify(this.state[attr]));

    for (let key in newData) {
      getLogin[key] = newData[key];
    }

    this.setState({
      [attr]: getLogin
    })
  };



  setData(editName: any, step: any = 11) {
    this.setState({
      editName: step
    })
  }




  // 发送登录请求
  reqLogin(username: string, password: any): void {
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
  reqSongList(userId: string): void {
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
        console.log(songListData);
      })

  }






  render() {
    return (

      <div className="App">
        <HashRouter>
          <nav className={`navbar navbar-dark bg-${this.state.themeColor}`}>
            {/* <a className="navbar-brand" href="http://localhost:3000/#/">基佬云音乐</a> */}

            <div className="user">
              <img src={this.state.login.avatarUrl} alt="" />
              <span onClick={() => this.toSetState("login", { loginShow: true })}>{this.state.login.nickname}</span>
            </div>

          </nav>

          <div className="navList">
            <ul>
              <ListLink navList={this.state.navList} edit={this.setData.bind(this)} />
            </ul>
          </div>

          <div className="column">
            <Redirect path="/" to="/recommendMusic" />
            <Route path="/recommendMusic" component={recommendMusic} />
            <Route path="/personalFM" component={personalFM} />
            <Route path="/video" component={video} />
            <Route path="/liveStreaming" component={liveStreaming} />
            <Route path="/friends" component={friends} />
            <Route path="/songList" component={songList} />
            {/* <ListColumn list={this.state.list} /> */}
          </div>

        </HashRouter>
        {this.state.login.loginShow ? <Login toSetState={this.toSetState.bind(this)} reqLogin={this.reqLogin.bind(this)} /> : null}
        <AudioComponent />
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

// 对应的列表
// function ListColumn(props: any) {
//   return props.list.map((item: any) => {
//     return <Route key={item.name} path={"/" + item.name} component={personalFM} />
//   })
// }

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


function AudioComponent(props: any): any {
  return <div className="audio">
    <div className="audioCtrl">
      <span><img src={process.env.PUBLIC_URL + `/icons/Skip-start.svg`} alt="" /></span>
      <span><img src={process.env.PUBLIC_URL + `/icons/play.svg`} alt="" /></span>
      <span><img src={process.env.PUBLIC_URL + `/icons/Skip-end.svg`} alt="" /></span>
    </div>


    <div className="currentSong">
      <img src="https://p1.music.126.net/VpxLTSBr1mAcIqIneMFKxA==/1374389547119710.jpg" alt="" className="avatarImg" />
      <section className="avatar">
        <p title="昨日青空">昨日青空</p>
        <p>尤长靖</p>
      </section>


      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>65%</div>
      </div>

      <div className="voice">
        <span><img src={process.env.PUBLIC_URL + `/icons/Volume-up.svg`} alt="" /></span>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: "15%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>15%</div>
        </div>
      </div>


    </div>

  </div>
}



export default App;
