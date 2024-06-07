import React from 'react'
import "./Main.css"
import { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Main = () => {

  const {onSent,currentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);



  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src = {assets.user_icon}/>
        </div>

      
        <div className="main-container">

          {!showResult 
          ? <>
          <div className="greet">
            <p><span> Hello, Armaan</span></p>
            <p>How can i help you today?</p>
          </div>

          <div className="cards">
            <div className="card">
              <p>Suggest beautiful places for the upcoming road trip</p>
              <img src={assets.code_icon}/>
            </div>

            <div className="card">
              <p>What is the weather like in Delhi</p>
              <img src={assets.message_icon}/>
            </div>

            <div className="card">
              <p>Your are my sunshine</p>
              <img src={assets.code_icon}/>
            </div>

            <div className="card">
              <p>How to start looksmaxxing</p>
              <img src={assets.message_icon}/>
            </div>
          </div>
          </> 
          :<>
            <div className = "result">
              <div className = "resultTitle">
                <img src={assets.user_icon}/>
                <p>{currentPrompt}</p>
              </div>
              <div className = "resultData">
                <img src={assets.gemini_icon}/>
                {loading
                ? <div className="loader">
                    <hr/>
                    <hr/>
                    <hr/>
                </div>  
                : <div>
                  <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                </div>
                }
              </div>
            </div>
          </>
          }

          
          <div className="mainBottom">
            <div className="searchBox">
              <input onChange={(e)=>setInput(e.target.value)} value ={input} type="text" placeholder="Enter a prompt here"  
                onKeyDown={(e)=>{
                  if(e.key=="Enter" && input!=""){
                      onSent();
                  }
                }}
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input!=""?  <img onClick={()=>onSent()} src={assets.send_icon} alt="" /> : null} 
               
              </div>
            </div>
            <div>
              <p className="bottomInfo">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</p>
            </div>
          </div>
        </div>

      

    </div>
  )
}

export default Main