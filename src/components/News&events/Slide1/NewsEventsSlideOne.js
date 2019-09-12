import React, { useState } from "react";
import "./NewsEventsSlideOneStyle.css";
import facebook from "./../../../assets/images/Home/Icons/facebook.png";
import twitter from "./../../../assets/images/Home/Icons/twitter.png";
import instagram from "./../../../assets/images/Home/Icons/instagram.png";
import wifi from "./../../../assets/images/Home/Icons/wifi.png";
import youtube from "./../../../assets/images/Home/Icons/youtube.png";
import bachi from "./../../../assets/images/NewsandEvents/1.png";
const NewsEventsSlideOne = () => {
  return (
    <>
      <div className="topBanner">
        <div className="bannerRow">
          <div className="latestPostTxt">Latest Post</div>
          <div className="socialMediaIco">
          <ul>
            <li><div className="followUsTxt">FOLLOW US</div></li>
            <li><img className="socialIcons" src={facebook}></img></li>
            <li><img className="socialIcons" src={youtube} class="img-fluid"></img></li>
            <li><img className="socialIcons" src={instagram} class="img-fluid"></img></li>
            <li><img className="socialIcons" src={wifi} class="img-fluid"></img></li>
            <li><img className="socialIcons" src={twitter} class="img-fluid"></img></li>
          </ul>
          </div>
        </div>
        <div className="bannerPost">
          <div className="flexBox2">
            <div className="text flex2Item">
              <div className="textSetting">
              <h2>GROUND BREAKING CERMONY OF SECONDARY BLOCK OF BVPS</h2>
              <span>
              The grounding breaking cermony for the construction of the
                      new building of Banjosa Valley Public School took place at
                      Kashmir.Mr. Yaqoob Sattar, DMD /CFO & Chairman, PSO CSR
                      Trust
              </span>
              <p><a href="#">Continue reading this post</a></p>
              </div>
            </div>
            <div className="postImage flex2Item">
              <img className="tharkisNEsl1" src={bachi}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsEventsSlideOne;
