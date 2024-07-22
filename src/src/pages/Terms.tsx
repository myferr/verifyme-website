import Button from "./components/Button";
import { Footer } from "./components/Footer";
import "./styles/legal.css";

function TermsOfService() {
  return (
    <>
      <h1>Terms of Service.</h1>
      <div className="mobile-buttons">
        <a href="/">
          <Button text="Home" />
        </a>
        <a href="/privacy">
          <Button text="Privacy Policy" />
        </a>
      </div>
      <p className="centered border-bottom-gray" />
      <br />
      <br />
      <br />
      <h2>Information</h2>
      It is assumed that if you use VerifyME, you have read and accepted the
      discord bot's terms of service. Your right to use VerifyME will be taken
      away if you disagree with the terms of service.
      <br />
      <br />
      <br />
      <h2>Uses</h2>
      Advertising inappropriately without authorization and using it for any
      reasons that are outside the Terms of Service are explicitly forbidden by
      VerifyME. Use of VerifyME may be terminated from your server if you
      attempt to obtain the bot's token or take any other action that could harm
      the bot.
      <br />
      <br />
      <br />
      <h2>Copyright</h2>
      You are not permitted to copy the bot code and support server as doing so
      will result in the removal of VerifyME from your server. Additionally, you
      are not permitted to claim that VerifyME is your bot, as doing so will
      result in copyright-related legal penalties.
      <br />
      <br />
      The <a href="https://verifymebot.xyz">VerifyME website</a>{" "}
      (https://verifymebot.xyz/) (https://verifymebot.vercel.app) is licensed
      under the MIT License and can be found open-source on{" "}
      <a href="https://github.com/">GitHub</a> (https://github.com/){" "}
      <a href="https://github.com/myferr/verifyme-website">here</a>{" "}
      (https://github.com/myferr/verifyme-website)
      <br />
      <br />
      <br />
      <h2>Uptime</h2>
      VerifyME is currently being actively developed; it could be switched off
      at any time or continue to function normally. You must recognize that
      whatever happens to the bot depends on a number of different
      circumstances.
      <br />
      <br />
      <br />
      <h2>Note</h2>
      Spreading misleading reviews in an effort to lower the bot's rating will
      not be tolerated. Not to mention, The terms of service are susceptible to
      change at any time, thus it is your responsibility to review them
      frequently if you use VerifyME.
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default TermsOfService;
