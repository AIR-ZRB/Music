import React from "react";

import "./friends.scss";
import { requestData } from "../../components/MusicComponent"

export default class friends extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            dynamicState: [
       
            ],
        }
    }



     // 当组件被加载时
     componentWillMount() {
        console.log("friends组件被加载")
        this.requestDynamicState();
        return true;
    }

    requestDynamicState=():void => {
        let url = "http://localhost:4000/event?pagesize=10";
        requestData(url)
            .then((data: any) => {
                this.setState({
                    dynamicState: data
                })
            })
    }


    render() {
        return (
            <div className="friends">

                <div className="title">
                    <h3>Friends</h3>
                    <button type="button" className="btn btn-primary">发动态</button>
                </div>
                <DynamicState dynamicState={this.state.dynamicState} />
            </div>
        )
    }
}


function DynamicState(props: any): any {
    return props.dynamicState.map((item: any, index: number) => {
        return <section key={index} className="dynamicState">

            <div className="userMessage">
                <img src={item.user.avatarUrl} alt="" />
                <div className="userName">

                    <p>
                        <span>{item.user.nickname}</span>
                        <span>发布动态</span>
                    </p>
                    <p>
                        {/* 发布时间 */}
                        {item.eventTime}
                    </p>


                </div>
            </div>


            {/* 发布内容 */}
            <div className="content">
                <p>{item.info.commentThread.resourceInfo.name}</p>

            </div>


        </section>
    })

}