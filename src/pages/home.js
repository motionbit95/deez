import React from "react";
import "../style/homestyle.css";
import SelectBar from "../component/SelectBar";

export const Home = () => {
  return (
    <div id="home" className="home">
      {/* 광고 */}
      <div id="frame1" className="frame1 font-white">
        <div>프리미엄 요금제로 더 다양하고 전문적인 디자인을 얻어보세요</div>
        <div>X</div>
      </div>

      {/* Hero */}
      <div id="contents" className="contents">
        {/* Toolbar */}
        <div>
          <div id="frame2" className="frame2 font-white">
            <img className="img" src={require("../image/deez_logo.png")}></img>
            <div className="a-bar">
              <h5>AI</h5>
              <h5>Vectors</h5>
              <h5>Images</h5>
              <h5>3D Art</h5>
              <h5>Icons</h5>
              <h5>UI/UX</h5>
            </div>
            <div className="b-bar">
              <h5>Contect</h5>
              <h5>Pricing</h5>
              <div className="signin-button">Sign In</div>
              <div className="signup-button">Sign UP</div>
            </div>
          </div>
        </div>

        <div id="frame3" className="frame3">
          <div id="gap80" className="gap80">
            {/* Beyond Sensation */}
            <div className="t-box">
              <div className="title-font font-white">Beyond Sensation,</div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "20px" }}
              >
                <div className="title-font font-white">Endless</div>
                <div className="title-font font-purple">Possibilities</div>
              </div>
              <h4 className="font-white">
                Digital Experience and Entertainment Zone
              </h4>
            </div>
            {/* Search Bar */}
            <div id="frame4" className="frame4 font-white">
              <SelectBar />
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search all assets"
                  className="search-input"
                />
                <img
                  className="search-button"
                  style={{ width: "20px", height: "20px" }}
                  src={require("../image/Vector.png")}
                />
              </div>
            </div>
            {/* Images */}
            <div>
              <div className="image-box">
                <div className="box-1">
                  <h4 className="font-gray">
                    From studio portraits to epic Alpine landscapes, discover
                    the best in photography, retouching and photojournalism.
                  </h4>
                  <div className="title-font font-white">Images</div>
                  <div>
                    <h2 className="font-white">
                      Capture the perfect moment in every instant.
                    </h2>
                    <h4 className="font-gray">
                      Explore professional photo categories to express your
                      ideas and discover beautiful designs.
                    </h4>
                  </div>
                  <div className="link-to-page font-white">바로가기 〉</div>
                </div>
                <div className="box-1">
                  <img src={require("../image/image1.png")} />
                </div>
              </div>
              <div className="button-select font-white">O O O O O</div>
            </div>
          </div>
        </div>
        {/* Icons */}
        <div className="t-box">
          <div className="title-font font-white">FREE SVG UI ICON</div>
          <h4 className="font-white">
            프로젝트에서 사용할 수 있는 +3,000개의 무료 벡터 아이콘을 제공합니다
          </h4>
          <div className="icon-container">
            <div className="icon-boxs">
              <div className="icon-box">
                <img className="use-icon" src={require("../image/icon1.png")} />
                <img className="use-icon" src={require("../image/icon1.png")} />
                <img className="use-icon" src={require("../image/icon1.png")} />
                <img className="use-icon" src={require("../image/icon1.png")} />
                <img className="use-icon" src={require("../image/icon1.png")} />
              </div>
              <div className="a-1 font-white">
                <h3 className="font-white">brands</h3>
                <h4 className="font-white">+100 icons</h4>
              </div>
            </div>
            <div className="icon-boxs">
              <div className="icon-box">
                <img className="use-icon" src={require("../image/icon1.png")} />
                <img className="use-icon" src={require("../image/icon1.png")} />
                <img className="use-icon" src={require("../image/icon1.png")} />
                <img className="use-icon" src={require("../image/icon1.png")} />
                <img className="use-icon" src={require("../image/icon1.png")} />
              </div>
              <div className="a-1 font-white">
                <h3 className="font-white">brands</h3>
                <h4 className="font-white">+100 icons</h4>
              </div>
            </div>
            <div className="icon-boxs">
              <div className="icon-box">
                <img className="use-icon" src={require("../image/icon1.png")} />
                <img className="use-icon" src={require("../image/icon1.png")} />
                <img className="use-icon" src={require("../image/icon1.png")} />
                <img className="use-icon" src={require("../image/icon1.png")} />
                <img className="use-icon" src={require("../image/icon1.png")} />
              </div>
              <div className="a-1 font-white">
                <h3 className="font-white">brands</h3>
                <h4 className="font-white">+100 icons</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
