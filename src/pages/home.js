import React from "react";
import "../style/homestyle.css";
import SelectBar from "../component/SelectBar";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div>
      <div id="home" className="home">
        {/* 배너 */}
        <div id="banner-frame" className="banner-frame banner-font font-white">
          <div>프리미엄 요금제로 더 다양하고 전문적인 디자인을 얻어보세요</div>
          <div>X</div>
        </div>

        {/* Hero */}
        <div id="contents" className="contents">
          {/* Toolbar */}
          <div className="mobile-frame">
            <img className="img" src={require("../image/deez_logo.png")}></img>
            <div className="b-bar">
              <div className="signin-button">Sign In</div>
              <div className="signup-button">Sign UP</div>
            </div>
          </div>

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

          <div id="frame3" className="frame3">
            {/* Beyond Sensation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
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
            </motion.div>
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
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeInOut",
                    duration: 1,
                    y: { duration: 2 },
                  }}
                >
                  <div className="box-1">
                    <h4 className="font-gray">
                      From studio portraits to epic Alpine landscapes, discover
                      the best in photography, retouching and photojournalism.
                    </h4>
                    <div className="title-font font-white">Images</div>
                    <h2 className="font-white">
                      Capture the perfect moment in every instant.
                    </h2>
                    <h4 className="font-gray">
                      Explore professional photo categories to express your
                      ideas and discover beautiful designs.
                    </h4>
                    <div className="link-to-page font-white">바로가기 〉</div>
                  </div>
                </motion.div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                    }}
                  >
                    <img src={require("../image/image1.png")} />
                  </motion.div>
                </div>
              </div>
              <div className="button-select font-white">O O O O O</div>
            </div>
          </div>

          {/* Icons */}
          <div className="t-box">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                y: { duration: 2 },
              }}
            >
              <div className="svg-text-box">
                <div className="title-font font-white">FREE SVG UI ICON</div>
                <h4 className="font-white">
                  프로젝트에서 사용할 수 있는 +3,000개의 무료 벡터 아이콘을
                  제공합니다
                </h4>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.8,
                y: { duration: 2 },
              }}
            >
              <div className="icon-container">
                <div className="icon-boxs">
                  <div className="icon-box">
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                  </div>
                  <div className="a-1 font-white">
                    <h3 className="font-white">brands</h3>
                    <h4 className="font-white">+100 icons</h4>
                  </div>
                </div>
                <div className="icon-boxs">
                  <div className="icon-box">
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                  </div>
                  <div className="a-1 font-white">
                    <h3 className="font-white">brands</h3>
                    <h4 className="font-white">+100 icons</h4>
                  </div>
                </div>
                <div className="icon-boxs">
                  <div className="icon-box">
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                    <img
                      className="use-icon"
                      src={require("../image/icon1.png")}
                    />
                  </div>
                  <div className="a-1 font-white">
                    <h3 className="font-white">brands</h3>
                    <h4 className="font-white">+100 icons</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Generator */}
        <div className="frame5">
          <div className="ai-box">
            <div className="title-font font-white">AI Image Generator</div>
            <h4 className="font-white">
              DEEZ AI image generator allows you to quickly transform your words
              into visually stunning images.Leverage this powerful tool to
              enhance your business visuals and bring your ideas to life!
            </h4>
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
          </div>
        </div>
        {/* Contribute */}
        <div className="frame6">
          <div className="ai-box">
            <div className="title-font font-white">Sell Your Contents</div>
            <h4 className="font-white">
              그래픽 라이브러리 플랫폼 DEEZ의 CONTRIBUTOR가 되어주세요!
              <br />
              제작자 커뮤니티에 가입하고 콘텐츠 판매를 시작하세요!
            </h4>
          </div>
          <div className="grid-box">
            <div className="contribute-box">
              <div className="name-box">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={require("../image/icon1.png")}
                />
                <div>
                  <div className="font32bord-w">Daniel</div>
                  <div className="font24rgu-g">@designDan</div>
                </div>
              </div>
              <div className="font22light-w">
                I've built pretty handy sites powered by Craft or WordPress in
                the past, but seeing @framer tackle CMS stuff so effortlessly is
                mind-boggling
              </div>
              <div className="tag-box">
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
              </div>
            </div>

            <div className="contribute-box">
              <div className="name-box">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={require("../image/icon1.png")}
                />
                <div>
                  <div className="font32bord-w">Daniel</div>
                  <div className="font24rgu-g">@designDan</div>
                </div>
              </div>
              <div className="font22light-w">
                I've built pretty handy sites powered by Craft or WordPress in
                the past, but seeing @framer tackle CMS stuff so effortlessly is
                mind-boggling
              </div>
              <div className="tag-box">
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
              </div>
            </div>

            <div className="contribute-box">
              <div className="name-box">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={require("../image/icon1.png")}
                />
                <div>
                  <div className="font32bord-w">Daniel</div>
                  <div className="font24rgu-g">@designDan</div>
                </div>
              </div>
              <div className="font22light-w">
                I've built pretty handy sites powered by Craft or WordPress in
                the past, but seeing @framer tackle CMS stuff so effortlessly is
                mind-boggling
              </div>
              <div className="tag-box">
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
              </div>
            </div>

            <div className="contribute-box">
              <div className="name-box">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={require("../image/icon1.png")}
                />
                <div>
                  <div className="font32bord-w">Daniel</div>
                  <div className="font24rgu-g">@designDan</div>
                </div>
              </div>
              <div className="font22light-w">
                I've built pretty handy sites powered by Craft or WordPress in
                the past, but seeing @framer tackle CMS stuff so effortlessly is
                mind-boggling
              </div>
              <div className="tag-box">
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
              </div>
            </div>

            <div className="contribute-box">
              <div className="name-box">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={require("../image/icon1.png")}
                />
                <div>
                  <div className="font32bord-w">Daniel</div>
                  <div className="font24rgu-g">@designDan</div>
                </div>
              </div>
              <div className="font22light-w">
                I've built pretty handy sites powered by Craft or WordPress in
                the past, but seeing @framer tackle CMS stuff so effortlessly is
                mind-boggling
              </div>
              <div className="tag-box">
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
              </div>
            </div>

            <div className="contribute-box">
              <div className="name-box">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={require("../image/icon1.png")}
                />
                <div>
                  <div className="font32bord-w">Daniel</div>
                  <div className="font24rgu-g">@designDan</div>
                </div>
              </div>
              <div className="font22light-w">
                I've built pretty handy sites powered by Craft or WordPress in
                the past, but seeing @framer tackle CMS stuff so effortlessly is
                mind-boggling
              </div>
              <div className="tag-box">
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
              </div>
            </div>

            <div className="contribute-box">
              <div className="name-box">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={require("../image/icon1.png")}
                />
                <div>
                  <div className="font32bord-w">Daniel</div>
                  <div className="font24rgu-g">@designDan</div>
                </div>
              </div>
              <div className="font22light-w">
                I've built pretty handy sites powered by Craft or WordPress in
                the past, but seeing @framer tackle CMS stuff so effortlessly is
                mind-boggling
              </div>
              <div className="tag-box">
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
              </div>
            </div>

            <div className="contribute-box">
              <div className="name-box">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={require("../image/icon1.png")}
                />
                <div>
                  <div className="font32bord-w">Daniel</div>
                  <div className="font24rgu-g">@designDan</div>
                </div>
              </div>
              <div className="font22light-w">
                I've built pretty handy sites powered by Craft or WordPress in
                the past, but seeing @framer tackle CMS stuff so effortlessly is
                mind-boggling
              </div>
              <div className="tag-box">
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
              </div>
            </div>

            <div className="contribute-box">
              <div className="name-box">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={require("../image/icon1.png")}
                />
                <div>
                  <div className="font32bord-w">Daniel</div>
                  <div className="font24rgu-g">@designDan</div>
                </div>
              </div>
              <div className="font22light-w">
                I've built pretty handy sites powered by Craft or WordPress in
                the past, but seeing @framer tackle CMS stuff so effortlessly is
                mind-boggling
              </div>
              <div className="tag-box">
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
                <div className="tag-1">TAG</div>
              </div>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{ duration: 0.3 }}
          >
            <div className="button-1">내 컨텐츠로 수익얻기 〉</div>
          </motion.div>
          <div className="box-row">
            <div className="font22light-w">
              이미 DEEZ Contribute 회원이신가요?
            </div>
            <div className="font22light-p">로그인하기</div>
          </div>
        </div>
        {/* New Launch */}
        <div className="frame5">
          <div className="newlaunch">NEW LAUNCH</div>
          <div className="ai-box">
            <div className="title-font font-white">
              We can quickly build
              <br />
              your website for you.
            </div>
            <h4 className="font-white">Make a beautiful page in minutes</h4>
          </div>
          <div className="box-row2">
            <div className="template-box font-white">
              <h1>100+ Free Templates</h1>
              <h4>
                You can get started right away by providing a template that has
                already been planned and designed.
              </h4>
              <div className="create-button">
                Create the best web/app design templates
              </div>
              <div className="guide-box">
                <div className="guide-text">
                  <img
                    style={{ width: "24px", height: "24px" }}
                    src={require("../image/check1.png")}
                  />
                  <div className="font12rgu">
                    Create a web page easily with DEEZ's resources. You don't
                    need a designer or developer to create a web page with DEEZ!
                  </div>
                </div>
                <div className="guide-text">
                  <img
                    style={{ width: "24px", height: "24px" }}
                    src={require("../image/check1.png")}
                  />
                  <div className="font12rgu">
                    DEEZ's AI image generator allows you to insert sensational
                    logos and illustrations!
                  </div>
                </div>
                <div className="guide-text">
                  <img
                    style={{ width: "24px", height: "24px" }}
                    src={require("../image/check1.png")}
                  />
                  <div className="font12rgu">
                    You can use high-quality content produced by thousands of
                    DEEZ CONTRIBUTORs without worrying about copyright ☺︎
                  </div>
                </div>
              </div>
            </div>
            <img
              className="landingpage"
              src={require("../image/pageimage.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
