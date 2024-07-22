import premiumLogo from "./assets/premium-icon.svg";
import Header from "./components/Header";
import Check from "./assets/check.png";
import "./components/styles/Card.scss";

import { updateBillingType, checkout } from "./checkout";
import { Footer } from "./components/Footer";

localStorage.setItem("billingType", "monthly");

function premium() {
  return (
    <>
      <Header selected="premium" />
      <div id="display">
        <div className="centered-text" id="get-premium">
          <h1>premium Plans</h1>
          <p className="LowOpacityText">
            Upgrading to VerifyME premium helps suppor
            <br />
            the development and operation of VerifyME, as well as providing you
            with a<br />
            higher level of service and features.
            <div>
              <br />
              <br />
              <span className="billing-type">Bill Monthly</span>
              <label className="switch">
                <input
                  type="checkbox"
                  id="billing-switch"
                  onClick={() => updateBillingType()}
                />
                <span className="slider round"></span>
              </label>
              <span className="billing-type">Bill Annually</span>
              <br />
              <br />
            </div>
          </p>
          <Card />
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default premium;

function BuyButton() {
  return (
    <>
      <button className="premium-button" onClick={() => checkout()}>
        <img id="icon" src={premiumLogo} alt="premium" />
        Buy premium
      </button>
    </>
  );
}

function Card() {
  return (
    <div id="card-container">
      <div id="card">
        <h2 className="premium-header">premium</h2>
        <div id="features">
          <img src={Check} width={20} />
          <span className="feature f1">
            1) Add images/gif to the verification message
          </span>
          <br />
          <br />
          <img src={Check} width={20} />
          <span className="feature f2">
            2) Custom the verification message.
          </span>
          <br />
          <br />
          <img src={Check} width={20} />
          <span className="feature f3">3) DM on kick feature </span>
          <br />
          <br />
          <br />
          <p id="pricing">4.79$ USD / 400.12 ₹ INR (monthly)</p>
        </div>
        <BuyButton />
      </div>
    </div>
  );
}
