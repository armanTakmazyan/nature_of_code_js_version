import { Vector2D } from "../vector2D";
import { addMouseListener, getCanvasAndContext } from "../helpers";

export const playerLookDirection = (() => {
  const mousePosition = addMouseListener("canvas5");
  return () => {
    const canvasAndContext = getCanvasAndContext("canvas5");

    const centerVector = new Vector2D(
      canvasAndContext.canvas.width / 2,
      canvasAndContext.canvas.height / 2
    );

    const mouseVector = new Vector2D(mousePosition.x, mousePosition.y);
    canvasAndContext.context.moveTo(0, 0);
    canvasAndContext.context.lineTo(mousePosition.x, mousePosition.y);
    canvasAndContext.context.stroke();
    canvasAndContext.context.beginPath();
    canvasAndContext.context.arc(
      centerVector.x,
      centerVector.y,
      16,
      0,
      2 * Math.PI
    );
    canvasAndContext.context.stroke();
    canvasAndContext.context.font = "12px Arial";
    canvasAndContext.context.fillText(mouseVector.magnitude(), 5, 15);
    canvasAndContext.context.lineTo(mousePosition.x, mousePosition.y);
    if (mouseVector.normalize().dot(centerVector.normalize()) >= 0.9) {
      canvasAndContext.context.fillStyle = "red";
      canvasAndContext.context.fill();
    }
  };
})();
