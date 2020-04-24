import React from "react";
import "./personalFM.scss"

export default class personalFM extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            music: [
                {
                    musicName: "煩悩遊戯",
                    picture: "https://pic1.zhimg.com/80/v2-fec099fa171506128af30eb668da06b0_720w.jpg",
                    album: "Reol专辑",
                    singer: "Reol",
                    lyric: ``,

                }
            ],
            btnCtrl: ["Heart","Trash","Skip-end","Three-dots"]
        }
    }


    render() {
        return (
            <div className="personalFM">
                <section className="musicPicture">
                    <img src={this.state.music[0].picture} alt="" className="music-banner"/>

                    <section className="ctrl-btn">
                        <BtnCtrl btnCtrl={this.state.btnCtrl} />
                    </section>
                </section>

                <section className="musicMessage">
                    <h3>{this.state.music[0].musicName}</h3>
                    <p className="singerMessage">
                        <span>歌手：</span>
                        <span>{this.state.music[0].singer}</span>
                        <span>专辑：</span>
                        <span>{this.state.music[0].album}</span>
                    </p>


                    <section className="lyric">
                        <pre>{this.state.music[0].lyric}</pre>
                    </section>
                </section>

            </div>
        )
    }
}


function BtnCtrl(props: any){
    console.log(props)
    return props.btnCtrl.map((item: any)=>{
        return <span key={item}>
            <img src={process.env.PUBLIC_URL + `/icons/${item}.svg`} alt="" />
        </span>
    })
}