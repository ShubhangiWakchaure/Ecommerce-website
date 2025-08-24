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
            <p>An e-commerce website enables users to browse and purchase products seamlessly online. It includes features like product catalogs, shopping carts, secure payment gateways, and order tracking. The platform is designed for user-friendly navigation, efficient performance, and mobile responsiveness.
            </p>
            <p>

It also integrates admin dashboards for inventory management and sales analytics, ensuring smooth operations. Advanced features like personalized recommendations and customer reviews enhance the shopping experience
            </p>
        </div>

      
    </div>
  )
}

export default DescriptionBox
