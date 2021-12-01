import { Vector2D } from "../vector2D";
import { addMouseListener, getCanvasAndContext } from "../helpers";

export const drawVectorMagnitude = (() => {
  const mousePosition = addMouseListener("canvas");
  return () => {
    var canvasAndContext = getCanvasAndContext("canvas");

    var centerVector = new Vector2D(
      canvasAndContext.canvas.width / 2,
      canvasAndContext.canvas.height / 2
    );

    var mouseVector = new Vector2D(mousePosition.x, mousePosition.y);

    //canvasAndContext.context.lineTo(mouseVector.x, mouseVector.y);

    mouseVector.sub(centerVector);

    canvasAndContext.context.moveTo(centerVector.x, centerVector.y);

    centerVector.add(mouseVector);
    canvasAndContext.context.lineTo(centerVector.x, centerVector.y);
    canvasAndContext.context.stroke();
    canvasAndContext.context.font = "12px Arial";
    canvasAndContext.context.fillText(mouseVector.magnitude(), 5, 15);
  };
})();
