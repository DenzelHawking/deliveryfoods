import React from 'react';
import SocialList from './footer_components/SocialList';
import '../css/footer.css'

function Footer() {
  return (
    <div id="footer">
      <div className="social">
        <div className="social-text">Присоединяйтесь к нам</div>
        <SocialList />
      </div>
    </div>
  );
};


export default Footer;
