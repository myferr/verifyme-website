import "./styles/Header.scss";

import MobileHeader from "./MobileHeader";

export default function Header(props: any) {
  const selected: String = props.selected;
  if (selected === "home") {
    return (
      <>
        <MobileHeader />
        <nav>
          <div id="desktopheader">
            <a href="/" className="selected">
              Home
            </a>
            <a href="/add-bot" className="notselected">
              Add bot
            </a>
            <a href="/premium" className="notselected">
              premium
            </a>
            <a href="/support" className="notselected">
              Support
            </a>
            <a href="/docs" className="notselected">
              Docs
            </a>
            <a href="/team" className="notselected">
              Team
            </a>
          </div>
        </nav>
      </>
    );
  }
  if (selected === "add-bot") {
    return (
      <>
        <MobileHeader />
        <nav>
          <div id="desktopheader">
            <a href="/" className="notselected">
              Home
            </a>
            <a href="/add-bot" className="selected">
              Add bot
            </a>
            <a href="/premium" className="notselected">
              premium
            </a>
            <a href="/support" className="notselected">
              Support
            </a>
            <a href="/docs" className="notselected">
              Docs
            </a>
            <a href="/team" className="notselected">
              Team
            </a>
          </div>
        </nav>
      </>
    );
  }
  if (selected === "premium") {
    return (
      <>
        <MobileHeader />
        <nav>
          <div id="desktopheader">
            <a href="/" className="notselected">
              Home
            </a>
            <a href="/add-bot" className="notselected">
              Add bot
            </a>
            <a href="/premium" className="selected">
              premium
            </a>
            <a href="/support" className="notselected">
              Support
            </a>
            <a href="/docs" className="notselected">
              Docs
            </a>
            <a href="/team" className="notselected">
              Team
            </a>
          </div>
        </nav>
      </>
    );
  }
  if (selected === "support") {
    return (
      <>
        <MobileHeader />
        <nav>
          <div id="desktopheader">
            <a href="/" className="notselected">
              Home
            </a>
            <a href="/add-bot" className="notselected">
              Add bot
            </a>
            <a href="/premium" className="notselected">
              premium
            </a>
            <a href="/support" className="selected">
              Support
            </a>
            <a href="/docs" className="notselected">
              Docs
            </a>
            <a href="/team" className="notselected">
              Team
            </a>
          </div>
        </nav>
      </>
    );
  }
  if (selected === "team") {
    return (
      <>
        <MobileHeader />
        <nav>
          <div id="desktopheader">
            <a href="/" className="notselected">
              Home
            </a>
            <a href="/add-bot" className="notselected">
              Add bot
            </a>
            <a href="/premium" className="notselected">
              premium
            </a>
            <a href="/support" className="notselected">
              Support
            </a>
            <a href="/docs" className="notselected">
              Docs
            </a>
            <a href="/team" className="selected">
              Team
            </a>
          </div>
        </nav>
      </>
    );
  }
  if (selected === "docs") {
    return (
      <>
        <MobileHeader />
        <nav>
          <div id="desktopheader">
            <a href="/" className="notselected">
              Home
            </a>
            <a href="/add-bot" className="notselected">
              Add bot
            </a>
            <a href="/premium" className="notselected">
              premium
            </a>
            <a href="/support" className="notselected">
              Support
            </a>
            <a href="/docs" className="selected">
              Docs
            </a>
            <a href="/team" className="notselected">
              Team
            </a>
          </div>
        </nav>
      </>
    );
  }
  if (selected === "none") {
    return (
      <>
        <MobileHeader />
        <nav>
          <div id="desktopheader">
            <a href="/" className="notselected">
              Home
            </a>
            <a href="/add-bot" className="notselected">
              Add bot
            </a>
            <a href="/premium" className="notselected">
              premium
            </a>
            <a href="/support" className="notselected">
              Support
            </a>
            <a href="/docs" className="notselected">
              Docs
            </a>
            <a href="/team" className="notselected">
              Team
            </a>
          </div>
        </nav>
      </>
    );
  }
}
