const backgrounds = ["./images/01.png", "./images/02.png", "./images/03.png"];
let backgroundNumber = 0;

export function changeBackgroundLoop() {
  setInterval(() => {
    document.body.style.backgroundImage = `url(${backgrounds[backgroundNumber]})`;
    backgroundNumber++;
    if (backgroundNumber === 3) {
      backgroundNumber = 0;
    }
  }, 6000);
}
