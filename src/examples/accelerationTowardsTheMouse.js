import { Vector2D } from "../vector2D";
import { Mover } from "../mover";
import { addMouseListener, getCanvasAndContext } from "../helpers";

export const accelerationTowardsTheMouse = (() => {
  const mousePosition = addMouseListener("canvas3");
  const mover = new Mover({ x: 150, y: 150 }, { x: 0, y: 0 }, { x: 0, y: 0 });
  return () => {
    const canvasAndContext = getCanvasAndContext("canvas3");
    const direction = Vector2D.sub(mousePosition, mover.location);
    direction.normalize().mult(0.5);
    mover.acceleration = direction;
    mover.update(7).display(canvasAndContext.context, 16);
    canvasAndContext.context.font = "12px Arial";
    canvasAndContext.context.fillText(
      `x: ${mousePosition.x}, y: ${mousePosition.y}`,
      5,
      15
    );
  };
})();

export const accelerationTowardsTheMouseArrayOfMovers = (() => {
  const mousePosition = addMouseListener("canvas4");
  const movers = Array.from(
    { length: 20 },
    (_v, i) =>
      new Mover(
        {
          x: Math.random() * 200,
          y: Math.random() * 200
        },
        { x: 0, y: 0 },
        { x: 0, y: 0 }
      )
  );
  return () => {
    const canvasAndContext = getCanvasAndContext("canvas4");
    movers.forEach((mover) => {
      const direction = Vector2D.sub(mousePosition, mover.location);
      direction.normalize().mult(0.5);
      mover.acceleration = direction;
      mover.update(10).display(canvasAndContext.context, 16);
    });
    canvasAndContext.context.font = "12px Arial";
    canvasAndContext.context.fillText(
      `x: ${mousePosition.x}, y: ${mousePosition.y}`,
      5,
      15
    );
  };
})();
