const updatePricing = (savedBillingType: any) => {
  const pricingLabel = document.getElementById("pricing");
  if (savedBillingType === "annually") {
    pricingLabel!.innerText = "36$ USD / 3007.13 ₹ INR (annually)";
  }
  if (savedBillingType === "monthly") {
    pricingLabel!.innerText = "4.79$ USD / 400.12 ₹ INR (monthly)";
  }
};

export const checkout = () => {
  window.location.href = `/get-premium?billing=${localStorage.getItem(
    "billingType"
  )}`;
};

export const updateBillingType = () => {
  let billingType: string;
  let readyToCheckout: boolean;

  const billingSwitch = document.getElementById("billing-switch");

  // @ts-expect-error
  if (billingSwitch?.checked) {
    billingType = "annually";
  } else {
    billingType = "monthly";
  }

  localStorage.setItem("billingType", billingType);

  if (
    localStorage.getItem("billingType") != "annually" &&
    localStorage.getItem("billingType") != "monthly"
  ) {
    document.write("Something went wrong. Please refresh and try again!");
    readyToCheckout = false;
  } else {
    const yourBillingType = localStorage.getItem("billingType");
    updatePricing(yourBillingType);
  }

  if (readyToCheckout! == true) {
    checkout();
  }
};

export const enforceBillingParam = () => {
  if (window.location.pathname == "/get-premium") {
    let params = new URLSearchParams(document.location.search);
    if (params.get("billing") != "annually") {
      if (params.get("billing") != "monthly") {
        window.location.href = "/premium";
      }
    }
    if (params.has("billing")) {
      return;
    } else {
      window.location.href = "/premium";
    }
  }
};
