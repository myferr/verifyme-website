import { Footer } from "./components/Footer";
import Header from "./components/Header";

function Support() {
  return (
    <>
      <div>
        <Header selected="none" />
        <h1>Commands</h1>
        <p>A dictionary of commands for VerifyME.</p>
        <p className="border-bottom-gray"></p>
        <div id="commands-section">
          <h2>Help.</h2>
          <span className="command">/help</span> - Explain about the bot and how
          to use it
          <br />
          <span className="command">/tutorial</span> - Receive step-by-step
          instruction on how to set up the bot
        </div>
        <div id="commands-section">
          <h2>Configuration.</h2>
          <span className="command">/config</span> - Add a configuration
          <br />
          <span className="command">/config_remove</span> - Remove a
          configuration
          <br />
          <span className="command">/setup_verification</span> - Set up the
          verification system
          <br />
          <span className="command">/reset</span> - Reset the verification
          system
          <br />
          <span className="command">/edit</span> - Edit the verification system
          message
        </div>
        <div id="commands-section">
          <h2>Verification.</h2>
          <span className="command">/verify</span> - Verify somebody in the
          server
          <br />
          <span className="command">/unverify</span> - Unverify somebody in the
          server
          <br />
          <span className="command">/verify-all</span> - Verify everyone in the
          server
          <br />
          <span className="command">/unverify-all</span> - Unverify everyone in
          the server
        </div>
        <div id="commands-section">
          <h2>premium.</h2>
          <span className="command">/redeem</span> - Input the key that has been
          given to you after you have purchased premium
          <br />
          <span className="command">/premium</span> - Purchase premium for the
          VerifyME bot
        </div>
        <div id="commands-section">
          <h2>Moderation.</h2>
          <span className="command">/lockdown</span> - Lock or unlock all
          channels.
          <br />
          <span className="command">/antibot</span> - Ask for approval to accept
          or deny a bot from joining a server.
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Support;
