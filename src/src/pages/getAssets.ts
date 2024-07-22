const assets = "/src/pages/assets/legal/legal.zip";

export const getAssets = () => {
  var a = document.createElement("a");
  document.body.appendChild(a);
  // @ts-expect-error
  a.style = "display: none";
  a.href = assets;
  a.download = "legal.zip";
  a.click();
  document.body.removeChild(a);
  window.location.href = window.location.pathname;
};

export const validateDownload = () => {
  let params = new URLSearchParams(document.location.search);

  if (params.has("download")) {
    getAssets();
  }
};
