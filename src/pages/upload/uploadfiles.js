import React from "react";
import FileUpload from "../../component/FileUpload";
import ThreeStepBar from "../../component/ThreeStepBar";

const Uploadfiles = () => {
  return (
    <div id="uploadfloor" className="uploadfloor">
      <div id="uploadcontent" className="uploadcontent">
        <ThreeStepBar
          step1={"Upload files"}
          step2={"Add details"}
          step3={"Add tags"}
        />
        <div>
          <div id="d1floor" className="d1floor">
            <div id="d1" className="d1">
              Upload files
            </div>

            <hr />
            <div id="dndbox" className="dndbox">
              <div className="ubutton">Upload is required</div>
              <FileUpload />
              <div className="dnd1">Upload SVG or PNG files</div>
              <div className="dnd2">
                Or drag and drop a ZIP file for larger packs. The expected
                review time is 4 to 7 days.
              </div>
            </div>

            <div id="cboxs" className="cboxs">
              <div className="cbox">
                <div className="cicon">가상이미지</div>
                <div className="ctextbox">
                  <div className="ctext">Contributor's handbook</div>
                  <div className="d2">
                    good place to start before uploading, but also to get tip
                    and tricks.
                  </div>
                </div>
              </div>
              <div className="cbox">
                <div className="cicon">가상이미지</div>
                <div className="ctextbox">
                  <div className="ctext">Improve your approval ratio</div>
                  <div className="d2">see the handbook</div>
                </div>
              </div>
              <div className="cbox">
                <div className="cicon">가상이미지</div>
                <div className="ctextbox">
                  <div className="ctext">Join Discord</div>
                  <div className="d2">
                    Got qusetions for the Deez team or other contributors, then
                    join the brand new Deez team Discord server.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploadfiles;
