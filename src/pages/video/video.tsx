import React from "react";
import "./video.scss"

export default class video extends React.Component<any,any> {
    constructor(props: any){
        super(props);
    }


    render(){
        return (
            <div className="video">


                <section className="videoList">
                    <img src="https://pic1.zhimg.com/80/v2-cc4f66fc089be551f5509d063c96deec_720w.jpg" alt=""/>
                    <div className="video-describe">
                        <p>樱桃小丸子</p>    
                        <p>by 咕咕咕咕</p>
                    </div>
                </section>

            </div>
        )
    }
}



// function videoList(props: any){
//     return 
// }