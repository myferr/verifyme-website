import Button from "./components/Button";

import premiumLogo from "./assets/premium-icon.svg";
import VerifyMeLogo from "./assets/verifyme-bot.png";
import example_1 from "./assets/example_1.gif";
import example_2 from "./assets/example_2.gif";

import Seperator from "./components/Seperator";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

function Index() {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <Header selected="home" />
          <div id="display">
            <img src={VerifyMeLogo} alt="VerifyME" width={30} />
            <span className="verifyme">
              <span className="verifyme-selected">Verify</span>ME
            </span>
            <h1>Security at priority.</h1>
            <p className="description">
              Wave and say "hello" to VerifyME, a verification bot aimed solely
              to defend your server against raids.
              <br />
              An <span className="hint">(actually)</span> secure verification
              Discord bot.
            </p>
            <br />
            <br />
            <br />
            <a href="/add-bot" target="_blank">
              <Button text="Add bot to your server" className="btn" />
            </a>
            <a href="/premium">
              <button className="premium-button btn">
                <img id="icon" src={premiumLogo} alt="premium" />
                premium
              </button>
            </a>
          </div>
        </div>
      </div>
      <Seperator />
      <div>
        <br />
        <br />
        <div className="row">
          <img src={example_1} className="gif" />
          <h1>
            Easy to setup
            <br />— it's amazing.
          </h1>
        </div>
        <p className="desc-forgif">
          With VerifyME you can setup the most
          <br />
          advanced verification system in seconds.
        </p>
        <br />
        <br />
        <br />
        <div className="row">
          <img src={example_2} className="gif" />
          <h1>
            Your server
            <br />— your choice
          </h1>
        </div>
        <p className="desc-forgif">
          VerifyME is easily fully customizable with
          <span className="command">/setup</span>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Index;
