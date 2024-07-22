import Button from "./components/Button";
import { Footer } from "./components/Footer";
import { validateDownload } from "./getAssets";
import "./styles/legal.css";

validateDownload();

function TermsOfService() {
  return (
    <>
      <h1>Privacy Policy.</h1>
      <div className="mobile-buttons">
        <a href="/">
          <Button text="Home" />
        </a>
        <a href="/terms">
          <Button text="Terms of Service" />
        </a>
      </div>
      <p className="centered border-bottom-gray" />
      <br />
      <br />
      <br />
      <h2>Information</h2>
      This document incorporates the privacy policy of the discord bot
      VerifyME#3730 (971697945449738280) that contains the what specific
      information is collected, and whether it is kept confidential, shared with
      partners, or sold to other softwares/users. This document was inspired and
      forked from a publicly visible privacy policy by the user labeled under
      "jagrosh" on the platform <a href="https://github.com/">GitHub</a>{" "}
      (https://github.com/). For the original version,{" "}
      <a href="https://gist.github.com/jagrosh/f1df4441f94ca06274fa78db7cc3c526">
        click here
      </a>
      <br />
      <br />
      <br />
      <h2>Terminology</h2>
      <b>guild</b> - Refers to a <a href="https://discord.com/">Discord</a>{" "}
      (https://discord.com/) guild or discord server.
      <br />
      <b>channel</b> - Refers to a <a href="https://discord.com/">Discord</a>{" "}
      (https://discord.com/) server text/voice channel.
      <br />
      <b>role</b> - Refers to a <a href="https://discord.com/">Discord</a>{" "}
      (https://discord.com/) server role that can be manually assigned to
      members
      <br />
      <b>logs</b> - Refers to the channel that will contains logs of the
      verification attempts.
      <br />
      <b>time</b> - Refers to the time limit for completing the{" "}
      <a href="http://www.captcha.net/">Captcha</a>.
      <br />
      <br />
      <br />
      <h2>Data collection</h2>
      No data will be collected when the bot is invited to a server
      automatically. The data below will be collected when using a command:
      <br />
      <b>guild</b> - as the server ID as value. <br />
      <b>channel</b> - as channel ID as value. <br />
      <b>role</b> - as role ID as value. <br />
      <b>logs</b> - as logs channel ID as value. <br />
      <b>time</b> - as time limit for completing the{" "}
      <a href="http://www.captcha.net/">Captcha</a> as string type value.
      <br />
      <br />
      <br />
      <h2>Data storage</h2>
      All data is stored on <a href="https://mongodb.com/">
        MongoDB database
      </a>{" "}
      (https://mongodb.com/). Please remember that no data can ever be
      completely secure, even with these procedures. Although every effort is
      made to keep your data safe and secure, its total security cannot be
      ensured.
      <br />
      <br />
      <br />
      <h2>Feedback</h2>
      Feedback is secure and kept private all users{" "}
      <i>(excluding feedback-reviewers)</i> unless the author of submitted
      feedback requests their submitted feedback to be public.
      <br />
      <br />
      Regarding feedback that is not related to the subject of the product(s) of
      VerifyME will not be valued. Feedback that does not help in any form is
      not valued as helpful, and fake reviews/feedback if submitted is not
      tolerated.
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default TermsOfService;
