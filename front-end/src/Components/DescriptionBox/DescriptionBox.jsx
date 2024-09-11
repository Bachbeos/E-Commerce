import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed commodi a saepe atque quod nostrum laudantium, asperiores facilis corrupti totam dolorum blanditiis ipsam cumque temporibus iste, sint officia modi.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui odit similique dolore. Vitae minima facilis et, veritatis delectus eius? Accusantium illum libero corrupti reiciendis natus.</p>
        </div>
    </div>
  )
}

export default DescriptionBox