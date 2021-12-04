import {
  accelerationTowardsTheMouseArrayOfMovers,
  accelerationTowardsTheMouse,
  playerLookDirection,
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
    playerLookDirection();
  }
  main(); // Start the cycle
})();
