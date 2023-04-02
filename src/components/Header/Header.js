import React from 'react'
import './Header.css'
import img from '../../images/img.svg'

function Header() {
  return (
    <>
        <div class="content">
            <div class="left-content">
                <h1>An inspiring design delivered to your inbox every morning</h1>
                <p>Our team scouts the internet for the best designs, illustrations and art and delivers a truly
                    inspiring one every day to your inbox </p>
                <b>Show me how it looks </b>
                <div class="submit">
                    <input class="email" type="email" placeholder="Your e-mail address "/>
                    <button>Register Now</button>
                </div>
                <p class="free">Free - No Spam - No Data Sharing</p>
            </div>
            <div class="right-content">
                <img src={img} alt=""/>
            </div>
        </div>
    </>
  )
}

export default Header