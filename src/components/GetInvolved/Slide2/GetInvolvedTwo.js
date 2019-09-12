import PropTypes from "prop-types";
import React, { useState } from "react";
import "./GetInvolvedTwoStyles.css";
const GetInvolvedTwo = () => {
  return (
    <>
      {/* <div className="slideFiveContainer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <div className="headingSlide">
                <p>Learn</p>
              </div>
              <p className="slideFiveDescription">
                Get the facts and how we're helping.
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="headingSlide">
                <p>Volunteer</p>
              </div>
              <p className="slideFiveDescription">
                Find out about upcomming events that need your help.
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="headingSlide">
                <p>Share</p>
              </div>
              <p className="slideFiveDescription">
                Let your social media networks know about this important cause.
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="headingSlide">
                <p>Donate</p>
              </div>
              <p className="slideFiveDescription">
                Help us raise money to make a big difference with this issue.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="cFlexBox">
        <div className="cFlexItem">
          <h3>Learn</h3>
          <p>Get the facts and how we're helping.</p>
        </div>
        <div className="cFlexItem">
          <h3>Volunteer</h3>
          <p>Find out about upcomming events that need your help.</p>
        </div>
        <div className="cFlexItem">
          <h3>Share</h3>
          <p>Let your social media networks know about this important cause.</p>
        </div>
        <div className="cFlexItem">
          <h3>Donate</h3>
          <p>Help us raise money to make a his issue.</p>
        </div>
      </div>


    </>
  );
};

export default GetInvolvedTwo;
