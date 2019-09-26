const createResponsiveEmbed = url => {
  const div = document.createElement("div");
  const iframe = document.createElement("iframe");
  div.classList.add("embed-responsive", "embed-responsive-16by9");

  iframe.src = url;
  iframe.classList.add("embed-responsive-item");
  div.appendChild(iframe);
  return div;
};

window.addEventListener("load", async () => {
  const sampleDiv = document.querySelector("#sample-graph");
  const responsiveDiv = createResponsiveEmbed("/static/sample.html");
  sampleDiv.appendChild(responsiveDiv);
});
