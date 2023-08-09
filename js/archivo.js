const sections = 10,
  maxDuration = 1.5, // seconds
  minDuration = 0.5,
  img_url =
    "https://images.unsplash.com/photo-1679259429316-a05794b72035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=40",
  credits_link = "https://unsplash.com/it/@mazz";

const img = new Image();
img.onload = () => {
  document.getElementById("root").innerHTML = `<div class="outer-wrapper"
    style="--items: ${sections}; --max-duration: ${maxDuration}s;
      --img: url(${img_url})">
    <div class='img-split-wrapper'>
        ${[...Array(sections)]
          .map((_, idx) => {
            return `<div class="img-split-item" style="--idx: ${idx};
              --duration: ${(
                Math.random() * (maxDuration - minDuration) +
                minDuration
              ).toFixed(2)}s">
              <div></div></div>`; // additional div needed for proper image placement
          })
          .join("")}
      </div>
      <div class="credits">
        <span>Photo <a href="${credits_link}?utm_source=github-demo&utm_medium=referral">@mazz / Unsplash</a></span>
        <span>Villa Borghese, Rome, Italy</span>
      </div>
      <div class="credits info">
        React version (and more) at 
        <a href="https://github.com/massimo-cassandro/area-test/tree/main/2023-07-split-image" target="_blank" rel="noopener noreferrer">
          my GitHub repository
        </a>
      </div>
    </div>`;
};

img.src = img_url;
