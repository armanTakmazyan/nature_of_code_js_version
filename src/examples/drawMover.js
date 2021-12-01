import { Mover } from "../mover";
import { getCanvasAndContext } from "../helpers";

export const drawMover = (() => {
  const mover = new Mover(
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
  return () => {
    const canvasAndContext = getCanvasAndContext("canvas2");
    mover.update(30).checkEdges(500, 300).display(canvasAndContext.context, 16);
  };
})();
