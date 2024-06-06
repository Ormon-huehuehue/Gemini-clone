import React from 'react'
import { useState } from 'react'
import "./Sidebar.css"
import {assets} from "../../assets/assets.js"
import settings from "../../assets/cog-regular-24.png"

const Sidebar = () => {

    const [extended,setExtended] = useState(true);

  return (
    <div className= "sidebar"> 
        <div className="top">
            <div className="menu">
                <img onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon}/>
            </div>
            <div className="newChat">
                <div className="wao">
                    <img src = {assets.plus_icon}/>
                    {extended? <p>New Chat</p> : null}
                </div>
            </div>
            
            {extended? 
            <div className="recent">
                <p className="recentTitle">Recent</p>
                <div className="recentEntry">
                    <img src={assets.message_icon} alt=""/>
                    <p> What is react</p>
                </div>
            </div> 
            : null}
            
        </div>



        <div className="bottom">
            <div className="bottomItem recentEntry">
                <img src={assets.question_icon}/>
                {extended ?  <p> Help</p> :  null}
            </div>

            <div className="bottomItem recentEntry">
                <img src={assets.history_icon}/>
                {extended? <p> Activity</p>  : null}
               
            </div>

            <div className="bottomItem recentEntry">
                <img src={settings}/>
                {extended?  <p> Settings</p> : null}
               
            </div>
            

            {extended? 
            <div className="location">
                <p>New Delhi, India</p>
                <p id="location" color='#b0c5dc'>From your IP address</p>
            </div>  : null}
            

        </div>
    </div>
  )
}

export default Sidebar