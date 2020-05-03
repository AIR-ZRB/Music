import React from "react";

import "./liveStreaming.scss";
import { requestData } from "../../components/MusicComponent";
export default class liveStreaming extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            ranking: [],
            length: []
        }
    }

    requestRanking = (): void => {
        let url = "http://localhost:4000/top/list?idx=2";
        requestData(url)
            .then((data: any) => {
                this.setState({
                    ranking: data.playlist.tracks,
                })


                console.log(this.state.ranking.length)
               this.spliceArray(JSON.parse(JSON.stringify(this.state.ranking)),20) 
               
            })
    }

    spliceArray = (arr: any,quantity: number): void =>{
        if(arr.length >= quantity){
            arr.splice(quantity,this.state.ranking.length - quantity);
            this.setState({
                ranking: arr
            })
        }
    }


    componentDidMount() {
        this.requestRanking()
    }


    render() {
        return (
            <div className="liveStreaming">
                <h3>排行榜</h3>

                <div className="ranking">
                    <Ranking ranking={this.state.ranking}/>
                </div>
            </div>
        )
    }
}
function Ranking(props: any) {
    return <ul>
        {props.ranking.map((item: any) => {
            return <li className="rankingItem" key={item.name}>
                <img src={item.al.picUrl} alt="" />
                <section>
                    <p>{item.name}</p>
                    <p>{item.ar[0].name}</p>
                </section>
            </li>
        })}
    </ul>
}


