import React from 'react';
import LeftBox from './LeftBox';
import RightBlock from './RightBlock';
import { Row, Col } from 'antd';
import './_style.scss';
function Footer() {
  return(
    <div className='footer'>
      <div className='container'>
        <Row gutter={[16, 16]}>
          <Col span={14} push={10}>
            <RightBlock/>
          </Col>
          <Col span={10} pull={14}>
            <LeftBox/>
          </Col>
        </Row>
      {/* <div className='main_footer_wrapper'>
      </div> */}
      <div className='social_links_box'>
        <div className='social_btn'>
          <a href='#'><img className='footer_social_link_icon' src='/assets/icons/telegram.svg' alt='telegram'/></a>
        </div>
        <div className='social_btn'>
          <a href='#'><img className='footer_social_link_icon' src='/assets/icons/insta.svg' alt='telegram'/></a>
        </div>
        <div className='social_btn'>
          <a href='#'><img className='footer_social_link_icon' src='/assets/icons/fb.svg' alt='telegram'/></a>
        </div>
        <div className='social_btn'>
            <a href='#'><img className='footer_social_link_icon' src='/assets/icons/youtube.svg' alt='telegram'/></a>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Footer;