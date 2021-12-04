export function Vector2D(x, y) {
  this.x = x;
  this.y = y;
}

Vector2D.prototype.limit = function (value) {
  var magnitude = this.magnitude();
  if (magnitude > value) {
    this.normalize().mult(Math.sqrt(value));
  }
  return this;
};

Vector2D.limit = function (vector, limit) {
  const newVector = new Vector2D(vector.x, vector.y);
  return newVector.limit(limit);
};

Vector2D.prototype.add = function (secondVector) {
  this.x += secondVector.x;
  this.y += secondVector.y;
  return this;
};

Vector2D.add = function (firstVector, secondVector) {
  return new Vector2D(
    firstVector.x + secondVector.x,
    firstVector.y + secondVector.y
  );
};

Vector2D.prototype.sub = function (secondVector) {
  this.x -= secondVector.x;
  this.y -= secondVector.y;
  return this;
};

Vector2D.sub = function (firstVector, secondVector) {
  return new Vector2D(
    firstVector.x - secondVector.x,
    firstVector.y - secondVector.y
  );
};

Vector2D.prototype.mult = function (scalar) {
  this.x *= scalar;
  this.x *= scalar;
  return this;
};

Vector2D.mult = function (vector, scalar) {
  return new Vector2D(vector.x * scalar, vector.y * scalar);
};

Vector2D.prototype.magnitude = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector2D.magnitude = function (vector) {
  return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
};

Vector2D.prototype.normalize = function () {
  var magnitude = this.magnitude();
  this.x /= magnitude;
  this.y /= magnitude;
  return this;
};

Vector2D.prototype.dot = function (vector) {
  return this.x * vector.x + this.y * vector.y;
};
