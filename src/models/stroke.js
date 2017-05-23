import Vector from './vector';

export default class Stroke {
  constructor({ center, rotation, size }) {
    const radius = size / 2;
    const x = radius * Math.cos(rotation);
    const y = radius * Math.sin(rotation);

    this._left = new Vector(center.x + x, center.y + y);
    this._right = new Vector(center.x - x, center.y - y);
  }
}
