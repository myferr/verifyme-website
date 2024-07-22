import { enforceBillingParam } from "./checkout.ts";
import { Footer } from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
enforceBillingParam();

function Getpremium() {
  return (
    <>
      <Header selected="premium" />
      <div className="centered-text">
        <h2>Under developer construction</h2>
        <p>
          Purchasing premium is not currently available.
          <br />
          Please check again later! 👋
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Getpremium;
