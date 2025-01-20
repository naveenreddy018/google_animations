import React, { useEffect, useRef, useState } from "react";
import ImageComponent from "../../Image/image";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
import "./home.scss"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Homepart1 from "./homepart1";
import Homepart2 from "./homepart2";
import Sliders from "../../Carousel";

function Home() {
  const [chrome, setphone] = useState(true)
  const [cross1, setcross1] = useState(false)
  const [cross2, setcross2] = useState(false)
  const [cross3, setcross3] = useState(false)
  const [cross4, setcross4] = useState(false)
  const [cross5, setcross5] = useState(false)
  const [cross6, setcross6] = useState(false)
  const setdown = () => {
    setphone(prev => !prev)
  }
  const rotateCross1 = () => {
    setcross1(prev => !prev)
  }

  const rotateCross2 = () => {
    setcross2(prev => !prev)
  }

  const rotateCross3 = () => {
    setcross3(prev => !prev)
  }
  const rotateCross4 = () => {
    setcross4(prev => !prev)
  }
  const rotateCross5 = () => {
    setcross5(prev => !prev)
  }

  const rotateCross6 = () => {
    setcross6(prev => !prev)
  }

  gsap.registerPlugin(ScrollTrigger)

  const imageContainerRef = useRef(null);

  useEffect(() => {
    const images = imageContainerRef.current.querySelectorAll("div");

    gsap.fromTo(
      images,
      { width: "200px" },
      {
        width: "300px", height : "300px",
        duration: 1,
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top center", 
          end: "bottom center",
          scrub: true, 
          onEnter: () => {
            gsap.to(images, { width: "300px", height : "500px" }); 
          },
          onLeaveBack: () => {
            gsap.to(images, { width: "150px" });
          },
        },
      }
    );
  }, []);
  return (
    <div><section className="home">
      {
        chrome ? (
          <div className="display_img">

            <div className="display_img_text">
              <a href="https://chromewebstore.google.com/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj"><img src={assets.qrcode} alt="qrcode" width="100px" /></a>
              <p>Get Chrome for your <br /> <span className="dispay_text">phone</span></p>
            </div>
            <div><button style={{ padding: "10px", position: 'relative', left: "10px", backgroundColor: "greenyellow", fontSize: "24px", borderRadius: "10px" ,color : "black"}} onClick={setdown}>&gt;</button></div>
          </div>
        ) : (<div className="display_img" style={{ display: "flex", gap: "50px" }}>
          <h1><img src={assets.smartphone} width="50px" alt="mobile_screen" /></h1>
          <div><button style={{ padding: "10px", position: 'relative', right: "30px", backgroundColor: "blue", fontSize: "24px", borderRadius: "10px" ,color : "black" }} onClick={setdown}>&gt;</button></div>
        </div>

        )
      }
      <div className="home-container">
        <div className="home-header-image">
          <ImageComponent src={assets.favicon} alt="favicon" width="50px" />
        </div>
        <div className="home-title">
          <h1>The browser <br /> built to be yours</h1>
        </div>
        <div className="home-download">
          <button>           <ImageComponent src={assets.downloadchrome} width="20px" alt="downloadChrome"/> Download Chrome</button>
          <div className="update-link">
            <Link >I want to update my chrome</Link>
          </div>
          <p>For Windows 11/10 64-bit</p>
        </div>
        <div className="chrome-help">
          <input type="checkbox" name="check" id="check" />
          <label htmlFor="check">
            Help make Google Chrome better by automatically <br />
            sending usage statistics and crash reports to Google. <br />{" "}
            <Link >Learn more</Link>
          </label>
        </div>
        <div className="home_footer">
          <p>
            By downloading Chrome, you agree to the Google Terms of <br />
            Service and Chrome and ChromeOS Additional terms of Service
          </p>
        </div>
      </div>
    </section>

      <section>
        <div ref={imageContainerRef}  className="home_image_conatiner">
          <div><ImageComponent src={assets.mobile}  alt="mobile"/></div>
          <div><ImageComponent src={assets.google_ai} alt="google_ai"/></div>
          <div><ImageComponent src={assets.home_poster} alt="home_poster"/></div>
          <div><ImageComponent src={assets.fast_mobile} width="400px" alt="fast_mobile" /></div>
        </div>
      </section>
      <section className="updates-section">
        <div className="updates-header">
          <h1>
            Discover the latest <br /> <span className="update_word"> <ImageComponent src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-return-icon-image_1287495.jpg" width="50px" alt="updates"/>updates</span> from Chrome
          </h1>
        </div>
        <div className="updates-content">
          <div className="update-card">
            <div className="child_update_card">
              <h2>UPDATES</h2>
              <p>

                <span className="automatic_word">   <h1>Automatic <br /> updates</h1></span><br />
                There's a new Chrome release every four weeks, making it easy to have<br />
                the newest features and a faster, safer web browser.
              </p>
              <a href="#">Learn about automatic updates</a>
            </div>
            <ImageComponent className="update_cardimage" src={assets.updates_image} alt="updates_image" width="400px" />
          </div>
          <div id="update_card" className="update-card">
            <div className="child_update_card">
              <h2>LATEST</h2>
              <p>
                <span className="automatic_word">   <h1>New from <br /> Chrome</h1></span>  <br />
                Chrome regularly updates with tools and features that make it faster, more secure, and easier to use, enhancing your browsing experience.
              </p>
              <a href="#">Learn what’s new on Chrome</a>
            </div>
            <ImageComponent className="update_cardimage" alt="chrome_img" src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/chrome.png" width="200px" />
          </div>
        </div>
      </section>

      <section >
        <Homepart1 />
      </section>
      <section className="feature_container_display">
        <Homepart2 />
      </section>

      <section className="extend" >
        <div className="extend_container">
          <div className="extend_text">
            <div className="main_text_holder">
              <h1>Extend your <br />
                experience</h1>
            </div>
            <div className="article_text">
              <p>From shopping and entertainment to productivity, find extensions <br /> to improve your experience in the Chrome Web Store.</p>
            </div>
            <button>Explore Extensions</button>
          </div>
          <div className="extend_image"><ImageComponent src={assets.extensions} alt="extensions" width="700px" /></div>
        </div>

        <div className="extend_icons">
          <img src={assets.download1}  alt="download1_icon" width="100px" />
          <img src={assets.download2}  alt="download2_icon" width="100px" />
          <img src={assets.download3}  alt="download3_icon" width="100px" />
          <img src={assets.download4}  alt="download4_icon" width="100px" />
        </div>
      </section>

      <section className="security_section">
        <div className="security_container">
          <div className="security_text">
            <h1>Stay<span className="security_sub_text"> <img src="https://img.freepik.com/premium-psd/white-shield-with-tick-mark-it-transparent-background_1085577-83837.jpg" alt="safe" width="50px" />safe</span><br />
              while you browser</h1>
          </div>
          <div className="security_cards">
            <div className="security_card" >
              {
                cross1 ? (
                  <div
                    className="cross_true"
                    style={{
                      transform: "translateY(0px)",
                      transition: "transform 2s ease",
                      opacity: cross1 ? "1" : "0.1",
                    }}
                  >
                    <h3>PASSWORD MANAGER</h3>
                    <h1>Use strong passwords on every site.</h1>
                    <div>
                      <img src={assets.passwords} width="400px" alt="passwords" />
                    </div>
                  </div>
                ) : (
                  <div
                    className="cross_false"
                    style={{
                      transform: "translateY(50px)",
                      transition: "transform 2s ease",
                      opacity: 1,
                    }}
                  >
                    <img
                      src={assets.save_password}
                      alt="savepassword"
                      width="450px"
                    />
                    <h3>
                      Chrome has Google Password Manager built in, which makes it
                      simple to save, manage, and protect your passwords online. It
                      also helps you create stronger passwords for every account you
                      use.
                    </h3>
                  </div>
                )
              }


              <div className="cross_btn"><img onClick={rotateCross1} style={{ transform: cross1 ? "rotate(75deg)" : "", transition: "transform 1s ease" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1707px-Plus_symbol.svg.png" alt="cross" width="60px" /></div>

            </div>
            <div id="safety_card2" className="security_card">
              {
                cross2 ? (
                  <div className="cross_true2"
                    style={{
                      transform: "translateY(50px)",
                      transition: "transform 2s ease",
                    }}
                  >
                    <h3>SAFETY CHECK</h3>
                    <h1>Check your safety level in real time with just one click.</h1>
                  </div>
                )

                  : (
                    <div className="cross_false2"
                      style={{
                        transform: "translateY(00px)",
                        transition: "transform 2s ease",
                      }}
                    >
                      <img src={assets.safety} width="500px" alt="safety" height="250px" />
                      <div className="cross_false2_text">
                        <h3>
                          Chrome has Google Password Manager built in, which makes it simple to save, manage and protect your passwords online. It also helps you create stronger passwords for every account you use.
                        </h3>
                      </div>

                    </div>
                  )
              }
              <div className="cross_btn2"><img onClick={rotateCross2} style={{ transform: cross2 ? "rotate(75deg)" : "", transition: "transform 1s ease" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1707px-Plus_symbol.svg.png" alt="cross" width="60px" /></div>
            </div>
          </div>
        </div>

      </section>
      <section className="security_section">
        <div className="security_container">

          <div className="security_cards">
            <div className="security_card" >
              {
                cross3 ? (
                  <div
                    className="cross_true"
                    style={{
                      transform: "translateY(0px)",
                      transition: "transform 2s ease",
                      opacity: cross3 ? "1" : "0.1",
                    }}
                  >
                    <h3>ENHANCED SAFE BROWSING</h3>
                    <h1>Browse with the confidence that you're staying safer online.</h1>
                  </div>
                ) : (
                  <div
                    className="cross_false"
                    style={{
                      transform: "translateY(50px)",
                      transition: "transform 2s ease",
                      opacity: 1,
                    }}
                  >
                    <img
                      src={assets.safe_browser}
                      alt="savepassword"
                      width="550px"
                    />
                    <h3>
                      Chrome's Safe Browsing warns you about malware or phishing attacks. Turn on Enhanced Safe Browsing for even more safety protections
                    </h3>
                  </div>
                )
              }


              <div className="cross_btn3"><img onClick={rotateCross3} style={{ transform: cross3 ? "rotate(75deg)" : "", transition: "transform 1s ease" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1707px-Plus_symbol.svg.png" alt="cross" width="60px" /></div>

            </div>
            <div id="safety_card3" className="security_card">
              {
                cross4 ? (
                  <div className="cross_true2"
                    style={{
                      transform: "translateY(50px)",
                      transition: "transform 2s ease",
                    }}
                  >
                    <h3>PRIVACY GUIDE</h3>
                    <h1>Keep your privacy under your control with easy-to-use settings.</h1>
                    <div>
                      <img src={assets.privacy} alt="privacy_image" width="300px" />
                    </div>
                  </div>
                )

                  : (
                    <div className="cross_false2"
                      style={{
                        transform: "translateY(00px)",
                        transition: "transform 2s ease",
                      }}
                    >
                      <img src={assets.privacy2} width="500px" height="250px" />
                      <div className="cross_false2_text">
                        <h3>
                          Chrome has Google Password Manager built in, which makes it simple to save, manage and protect your passwords online. It also helps you create stronger passwords for every account you use.
                        </h3>
                      </div>

                    </div>
                  )
              }
              <div className="cross_btn3"><img onClick={rotateCross4} style={{ transform: cross4 ? "rotate(75deg)" : "", transition: "transform 1s ease" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1707px-Plus_symbol.svg.png" alt="cross" width="60px" /></div>
            </div>
          </div>
        </div>

      </section>

      <section className="fast_way_section">
        <div className="fast_container">
          <h1>The  <span className="fastway_text"> <img src="https://cdn1.iconfinder.com/data/icons/perfomance-1/100/3-512.png" alt="fast_image" width="70px" />fast</span> way to do <br />
            things online</h1>
        </div>
      </section>

      <section className="carousels">
        <Sliders />

      </section>
      <sectioin className="built_section">
        <div className="buit_container">
          <h1>The browser <span className="built_text"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjN-GrTP_PWGb7ruOwhCHdqKLTVF68SxGdMA&s" alt="built_image" width="50px" /> built</span> <br />
            from Chrome</h1>

        </div>
      </sectioin>


      <section className="google_scroll_section">
        <div className="google_scroll">
          <div className="goggle_text">
            <div>
              <p>GOOGLE AI</p>
            </div>
          </div>
          <div className="google_headings">
            <h3>Access AI superpowers while you browse.</h3>
            <p>Google is integrating artificial intelligence to make our products more useful. We use AI for features like Search, Google Translate, and more, and we're innovating new technologies responsibly.</p>

          </div>
          <div>
            <img src={assets.google_scroll} alt="scoll" width="1500px" />
          </div>
        </div>

      </section>

      <section className="security_section">
        <div className="security_container">
          <div className="security_cards">
            <div className="security_card" >
              {
                cross6 ? (
                  <div
                    className="cross_true"
                    style={{
                      transform: "translateY(0px)",
                      transition: "transform 2s ease",
                      opacity: cross1 ? "1" : "1",
                    }}
                  >
                    <h3>GOOGLE SEARCH</h3>
                    <h1>The search bar you love, built right in.</h1>
                    <div>
                      <img src={assets.search2} width="400px" alt="passwords" />
                    </div>
                  </div>
                ) : (
                  <div
                    className="cross_false"
                    style={{
                      transform: "translateY(50px)",
                      transition: "transform 2s ease",
                      opacity: 1,
                    }}
                  >
                    <img
                      src={assets.search1}
                      alt="savepassword"
                      width="450px"
                    />
                    <h3>
                      Chrome has Google Password Manager built in, which makes it
                      simple to save, manage, and protect your passwords online. It
                      also helps you create stronger passwords for every account you
                      use.
                    </h3>

                  </div>
                )
              }


              <div className="cross_btn5"><img onClick={rotateCross6} style={{ transform: cross6 ? "rotate(75deg)" : "", transition: "transform 1s ease" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1707px-Plus_symbol.svg.png" alt="cross" width="60px" /></div>

            </div>
            <div id="safety_card2" className="security_card">
              {
                cross5 ? (
                  <div className="cross_true2"
                    style={{
                      transform: "translateY(50px)",
                      transition: "transform 2s ease",
                    }}
                  >
                    <h3>GOOGLE WORKSPACE</h3>
                    <h1>Get things done, with or without Wi-Fi.</h1>
                    <img src={assets.dowload} alt="" width="400px" />
                  </div>
                )

                  : (
                    <div className="cross_false2"
                      style={{
                        transform: "translateY(00px)",
                        transition: "transform 2s ease",
                      }}
                    >
                      <img src={assets.offline} width="500px" height="250px" />
                      <div className="cross_false2_text">
                        <h3>
                          Chrome has Google Password Manager built in, which makes it simple to save, manage and protect your passwords online. It also helps you create stronger passwords for every account you use.
                        </h3>
                      </div>

                    </div>
                  )
              }
              <div className="cross_btn2"><img onClick={rotateCross5} style={{ transform: cross5 ? "rotate(75deg)" : "", transition: "transform 1s ease" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1707px-Plus_symbol.svg.png" alt="cross" width="60px" /></div>
            </div>
          </div>
        </div>

      </section>

      <footer className="footer">
        <div className="footer_container">
          <div className="heading">
            <h2>Take your browser <br /><span className="with_you"> with you</span></h2>
          </div>
          <div className="subheading">
            <p>Download Chrome on your mobile device or tablet <br /><span className="middle_part"> and sign into your account for the same browser</span> <span className="bottom_part">experience, everywhere.</span></p>
          </div>
          <div className="footer_btn">
            <button><img src={assets.downloadchrome} alt="download_chrome" width="40px" />Download Chrome</button>
          </div>
        </div>
        <div className="footer_img">
          <div className="footer_img_text">
            <img src={assets.qrcode} alt="chrome_qrcode" width="120px" />
            <p>Get Chrome for your <br /> <span className="footer_text">phone</span></p>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default Home;
