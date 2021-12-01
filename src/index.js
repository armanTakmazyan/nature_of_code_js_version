import {
  accelrationTowardsTheMouse,
  drawVectorMagnitude,
  drawMover
} from "./examples";

(function () {
  function main() {
    window.requestAnimationFrame(main);
    drawVectorMagnitude();
    drawMover();
    accelrationTowardsTheMouse();
  }
  main(); // Start the cycle
})();
