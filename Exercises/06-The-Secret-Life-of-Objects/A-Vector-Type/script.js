class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    return new Vec(this.x + vector.x, this.y + vector.y);
  }

  minus(vector) {
    return new Vec(this.x - vector.x, this.y - vector.y);
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

vector1 = new Vec(1, 1);
vector2 = new Vec(2, 2);
vector3 = new Vec(3, 4);

console.log(vector3.plus(vector1));
console.log(vector3.minus(vector2));
console.log(vector3.length);
