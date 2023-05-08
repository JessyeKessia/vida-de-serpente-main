import { changeBackgroundLoop } from "./background-transition";
import { getSnakes } from "./get-snakes";

const pathsScripts = {
  "/": changeBackgroundLoop,
  "/index.html": changeBackgroundLoop,
  "/bio-diversidade.html": async () => {
    const snakes = await getSnakes();
    console.log(snakes);
  },
};

async function main() {
  const pathname = window.location.pathname;

  pathsScripts[pathname]();
}

main();
