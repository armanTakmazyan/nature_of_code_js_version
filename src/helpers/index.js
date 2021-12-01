export const getMousePos = (canvas, evt) => {
  const rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

export const addMouseListener = (canvasId) => {
  var mousePosition = {
    x: 0,
    y: 0
  };
  const canvas = document.querySelector(`#${canvasId}`);
  canvas.addEventListener("mousemove", function (e) {
    var mouseNewPosition = getMousePos(canvas, e);
    mousePosition.x = mouseNewPosition.x;
    mousePosition.y = mouseNewPosition.y;
  });
  return mousePosition;
};

export const getCanvasAndContext = (canvasId) => {
  var canvas = document.getElementById(canvasId);
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  return {
    context: context,
    canvas: canvas
  };
};
