import React from 'react'
import { useState,useContext } from 'react'
import "./Sidebar.css"
import {assets} from "../../assets/assets.js"
import settings from "../../assets/cog-regular-24.png"
import { Context } from '../../context/Context.jsx'


const Sidebar = () => {

    const [extended,setExtended] = useState(true);

    const {onSent,prevPrompts,setCurrentPrompt,setLoading,setShowResult} = useContext(Context);

    const startNewChat = ()=>{
        setShowResult(false);
        setLoading(false)
    }

    const loadPrompt= async (prompt)=>{
        setCurrentPrompt(prompt);
        await onSent(prompt);
    }

  return (
    <div className= "sidebar"> 
        <div className="top">
            <div className="menu">
                <img onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon}/>
            </div>
            <div   className="newChat">
                <div onClick={()=>startNewChat()} className="wao">
                    <img src = {assets.plus_icon}/>
                    {extended? <p>New Chat</p> : null}
                </div>
            </div>
            
            {extended? 
            <div className="recent">
                <p className="recentTitle">Recent</p>
                {prevPrompts.map((item,index)=>(
                    <div onClick={()=>{
                        loadPrompt(item);
                    }} key={index} className="recentEntry">
                        <img src={assets.message_icon} alt=""/>
                        <p>{item.slice(0,18)}...</p>
                    </div>
                ))}
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