import { Vector2D } from "./vector2D";
import { Mover } from "./mover";

var mousePosition = {
  x: 0,
  y: 0
};

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

const canvas = document.querySelector("#canvas");

canvas.addEventListener("mousemove", function (e) {
  var mouseNewPosition = getMousePos(canvas, e);
  mousePosition.x = mouseNewPosition.x;
  mousePosition.y = mouseNewPosition.y;
});

function getCanvasAndContext(canvasId) {
  var canvas = document.getElementById(canvasId);
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  return {
    context: context,
    canvas: canvas
  };
}

(function () {
  function main() {
    window.requestAnimationFrame(main);
    var canvasAndContext = getCanvasAndContext("canvas");

    var centerVector = new Vector2D(
      canvasAndContext.canvas.width / 2,
      canvasAndContext.canvas.height / 2
    );

    var mouseVector = new Vector2D(mousePosition.x, mousePosition.y);

    //     canvasAndContext.context.lineTo(mouseVector.x, mouseVector.y);

    mouseVector.sub(centerVector);

    canvasAndContext.context.moveTo(centerVector.x, centerVector.y);

    centerVector.add(mouseVector);
    canvasAndContext.context.lineTo(centerVector.x, centerVector.y);
    canvasAndContext.context.stroke();
    canvasAndContext.context.font = "12px Arial";
    canvasAndContext.context.fillText(mouseVector.magnitude(), 5, 15);
  }

  main(); // Start the cycle
})();

(function () {
  var mover = new Mover(
    { x: 150, y: 150 },
    {
      x: 0,
      y: 0
    },
    {
      x: 0.1,
      y: 0.1
    }
  );

  function main() {
    window.requestAnimationFrame(main);
    var canvasAndContext = getCanvasAndContext("canvas2");

    mover.update(60).checkEdges(500, 300).display(canvasAndContext.context, 16);
  }

  main();
})();
