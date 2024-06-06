import React from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src = {assets.user_icon}/>
        </div>


        <div className="main-container">
          <div className="greet">
            <p><span> Hello,</span></p>
            <p>How can i help you today?</p>
          </div>

          <div className="cards">
            <div className="card">
              <p>Suggest beautiful places for the upcoming road trip</p>
              <img src={assets.code_icon}/>
            </div>

            <div className="card">
              <p>What is joe mama like in real life?</p>
              <img src={assets.message_icon}/>
            </div>

            <div className="card">
              <p>Skibidi ohio gyatmaxxing</p>
              <img src={assets.code_icon}/>
            </div>

            <div className="card">
              <p>How to start looksmaxxing</p>
              <img src={assets.message_icon}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main