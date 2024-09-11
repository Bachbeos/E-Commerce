import React from 'react'
import './BannerFirst.css'
import hand_icon from './../Assets/Frontend_Assets/hand_icon.png'
import arrow_icon from './../Assets/Frontend_Assets/arrow.png'
import hero_image from './../Assets/Frontend_Assets/hero_image.png'

const BannerFirst = () => {
  return (
    <div className='banner-first'>
        <div className="banner-first-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="banner-first-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="hand icon"/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="banner-first-lastest-btn">
                <div>Lastest Collection</div>
                <img src={arrow_icon} alt="arrow icon" />
            </div>
        </div>

        <div className="banner-first-right">
            <img src={hero_image} alt="hero image"/>
        </div>
    </div>
  )
}

export default BannerFirst