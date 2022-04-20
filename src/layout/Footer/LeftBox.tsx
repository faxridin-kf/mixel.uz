import React from 'react';
import { Link } from 'react-router-dom'
import './_style.scss';
function LeftBox() {
  return(
   <div className="footer_left_box">
      <div className="footer_left_wrapper">
        <Link to={"/"}>
              <img className='footer_logo' src="/assets/icons/LogoFooter.svg" alt="logo" />
        </Link>
        <div className="footer_lft_bottom">
          <p>График работы колл-центра</p>
          <span>Понедельник - Суббота: 9:00–18:00</span>
          <div className="contact_number_footer">
            <p>Колл-центр:</p>
            <a href='tel:712059398'>+ 998 (71) 205-93-93</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LeftBox;