import { Vector2D } from "../vector2D";

export function Mover(location, velocity, acceleration) {
  this.location = new Vector2D(location.x, location.y);
  this.velocity = new Vector2D(velocity.x, velocity.y);
  this.acceleration = new Vector2D(acceleration.x, acceleration.y);
}

Mover.prototype.update = function (topSpeed) {
  this.velocity.add(this.acceleration);
  this.velocity.limit(topSpeed);
  this.location.add(this.velocity);
  return this;
};

Mover.prototype.checkEdges = function (width, height) {
  if (this.location.x > width) {
    this.location.x = 0;
  } else if (this.location.x < 0) {
    this.location.x = width;
  }

  if (this.location.y > height) {
    this.location.y = 0;
  } else if (this.location.y < 0) {
    this.location.y = height;
  }

  return this;
};

Mover.prototype.display = function (ctx, radius) {
  ctx.beginPath();
  ctx.arc(this.location.x, this.location.y, radius || 16, 0, 2 * Math.PI);
  ctx.stroke();
  return this;
};
