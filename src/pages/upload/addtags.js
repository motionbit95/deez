import React from "react";
import ThreeStepBar from "../../component/ThreeStepBar";

const addtags = () => {
  return (
    <div id="uploadfloor" className="uploadfloor">
      <div id="uploadcontent" className="uploadcontent">
        <ThreeStepBar
          step1={"Upload files"}
          step2={"Add details"}
          step3={"Add tags"}
        />
        <div id="card-box" className="card-box">
          <div id="card-header" className="card-header"></div>
          <div className="card-body">
            <div className="cbox-row">
              <div id="cbox2" className="cbox2">
                <div className="d6">Correct tags that are marked orange</div>
                <div className="d7">
                  Don’t include tag such as icon, icons, shape, glyph, symbol,
                  3d, 2d, flat and other generic words that can describe all
                  items.
                </div>
              </div>
              <div className="cbox-row"></div>
              <div id="cbox2" className="cbox2">
                <div className="d6">Check your spelling</div>
                <div className="d7">
                  Don’t include misspellings of words such as “facebok”. Our
                  search algorithm already take care of misspellings. Make sure
                  you spell check tags before submitting them.
                </div>
              </div>
              <div className="cbox-row"></div>
              <div id="cbox2" className="cbox2">
                <div className="d6">Be descriptive</div>
                <div className="d7">
                  Tags should describe what the icon represents. Be creative and
                  include synonyms. Box can also be pack, parcel, case or crate.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="card-box" className="card-box">
          <div id="card-header" className="card-header">
            <div className="jw">
              Good job! All items on this page seem to be following our tagging
              guidelines.
            </div>
            <div className="md1">
              <div className="show">Show untagged only</div>
            </div>
            <div className="md1">
              <div className="md1button">
                <div>x</div>
                <div>delete selected items</div>
              </div>
            </div>
          </div>
          <div id="card-body" className="card-body">
            <div className="tap-row">
              <div className="preview-tap">PREVIEW</div>
              <div className="tag1-tap">TAGS</div>
              <input className="checkbox-tap" type="checkbox"></input>
            </div>
            <hr />
            <div className="tap-row">
              <img
                alt="google"
                className="image-preview"
                src={require("../../image/google.png")}
              />
              <textarea className="input3"></textarea>
              <input className="checkbox-tap" type="checkbox"></input>
            </div>
          </div>
          <div className="card-footer">
            <div className="backbutton">← Back</div>
            <div className="completebutton">Complete Submission →</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addtags;
