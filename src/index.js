import {
  accelerationTowardsTheMouseArrayOfMovers,
  accelerationTowardsTheMouse,
  drawVectorMagnitude,
  drawMover
} from "./examples";

(function () {
  function main() {
    window.requestAnimationFrame(main);
    drawVectorMagnitude();
    drawMover();
    accelerationTowardsTheMouse();
    accelerationTowardsTheMouseArrayOfMovers();
  }
  main(); // Start the cycle
})();
