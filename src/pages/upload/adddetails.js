import React from "react";

const Adddetails = () => {
  return (
    <div id="uploadfloor" className="uploadfloor">
      <div id="uploadcontent" className="uploadcontent">
        <div id="stepbar" className="stepbar">
          <div>upload files</div>
          <div>Add details</div>
          <div>Add tags</div>
        </div>
        <div id="add-detailbox" className="add-detailbox">
          <div className="d3">File analysis</div>
          <div id="add-box" className="add-box">
            <div className="d4">1 is too few items in a pack</div>
            <div className="d6">
              It looks like there might be too few items in the pack you are
              submitting. Your pack might be rejected for this reason, as we
              usually recommend at least 10 items in a pack, so make sure you
              check out the Criteria for getting submission approved before
              proceeding.
            </div>
          </div>
        </div>
        <div id="add-detailbox" className="add-detailbox">
          <div className="d3">Premium or free?</div>
          <div id="add-box" className="add-box">
          <div className="d4">Premium pack</div>
            <div className="d5">
              This is a premium pack I want to sell on the Iconfinder
              marketplace.
              <div />
            </div>
            </div>
            <div id="add-box" className="add-box">
              <div className="d4">Free pack</div>
              <div className="d5">
                This is my pack that I want to offer for free on the Iconfinder
                marketplace
                <div />
              </div>
              </div>
              <div id="add-box" className="add-box">
              <div className="d4">Someone else's free pack</div>
                <div className="d5">
                  This is someone else's pack that's available elsewhere.
                  <div />
              </div>
            </div>
            </div>
          <div id="add-detailbox" className="add-detailbox">
            <div className="d3">Pack details</div>
            <div>
              <div>Name</div>
              <div>input</div>
              <div>
                Pick a name that describes the topic of your pack e.g Avatars,
                School & education, UI controls.
              </div>
            </div>
          </div>
          <div id="add-detailbox" className="add-detailbox">4번 박스
          </div>
      </div>
    </div>
  );
};

export default Adddetails;
