import React, { useState } from "react";
import ThreeStepBar from "../../component/ThreeStepBar";
import SelectBar from "../../component/SelectBar";
import SelectedBox from "../../component/SelectedBox";

const Adddetails = () => {
  return (
    <div id="uploadfloor" className="uploadfloor">
      <div id="uploadcontent" className="uploadcontent">
        <ThreeStepBar
          step1={"Upload files"}
          step2={"Add details"}
          step3={"Add tags"}
        />
        <div id="card-box" className="card-box">
          {/* 큰박스 */}
          <div id="card-header" className="card-header">
            {/* header */}
            <div className="d-1">File analysis</div>
          </div>
          <div id="card-body" className="card-body">
            {/* body */}
            <div id="alt-box" className="alt-box">
              {/* 내용박스 */}
              <div className="d-2">1 is too few items in a pack</div>
              <div className="d4">
                It looks like there might be too few items in the pack you are
                submitting. Your pack might be rejected for this reason, as we
                usually recommend at least 10 items in a pack, so make sure you
                check out the Criteria for getting submission approved before
                proceeding.
              </div>
            </div>
          </div>
        </div>
        <div id="card-box" className="card-box">
          {/* 큰박스 */}
          <div id="card-header" className="card-header">
            {/* header */}
            <div className="d-1">Premium or free?</div>
          </div>
          <div id="card-body" className="card-body">
            {/* body */}
            <SelectedBox />
          </div>
        </div>
        <div id="card-box" className="card-box">
          {/* 큰박스 */}
          <div id="card-header" className="card-header">
            {/* header */}
            <div className="d-1">Pack details</div>
          </div>
          <div id="card-body" className="card-body">
            {/* body */}
            <div id="g50box" className="g50box">
              {/* 1번 박스 */}
              <div className="d6">Name</div>
              <input className="input1" />
              <div className="d7">
                Pick a name that describes the topic of your pack e.g Avatars,
                School & education, UI controls.
              </div>
            </div>
            <div id="g50box" className="g50box">
              {/* 2번 박스 */}
              <div className="d6">Link to pack</div>
              <input className="input1" />
              <div className="d7">
                If the pack has been released on another site, please add a link
                to it. This is optional.
              </div>
            </div>
            <div id="g50box" className="g50box">
              {/* 3번 박스 */}
              <div className="d6">Pack description</div>
              <textarea className="input2" />
            </div>
            <div>
              {/* 4번 박스 */}
              <div className="d6">License</div>
              <SelectBar />
            </div>
          </div>
        </div>
        <div id="card-box" className="card-box">
          {/* 큰박스 */}
          <div id="card-header" className="card-header">
            {/* header */}
            <div className="d-1">Pack details</div>
          </div>
          <div id="card-body" className="card-body">
            {/* body */}
            <div className="g100box">
              {/* 1번 박스 */}
              <div className="d6">Designer's name</div>
              <input className="input1" />
            </div>
            <div className="g100box">
              {/* 2번 박스 */}
              <div className="d6">Designer's website</div>
              <input className="input1" />
            </div>
          </div>
        </div>
        <div id="card-box" className="card-box">
          {/* 큰박스 */}
          <div id="card-header" className="card-header">
            {/* header */}
            <div className="d-1">Pricing</div>
          </div>
          <div id="card-body" className="card-body">
            {/* body */}
            <div className="growbox">
              <div className="d6">Price per pack</div>
              <div className="cashblock">
                <div style={{ margin: "5px" }}>$</div>
                <input></input>
              </div>
            </div>
          </div>
        </div>
        <div id="card-box" className="card-box">
          {/* 큰박스 */}
          <div id="card-body" className="card-body">
            {/* body */}
            <div className="nextbox">Next Step →</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adddetails;
