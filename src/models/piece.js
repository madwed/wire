export default class Piece {
  constructor(canvas) {
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    this._canvas = canvas;
    this._context = context;
    this._imageData = context.getImageData(0, 0, width, height);
    this._height = height;
    this._width = width;
  }

  step() {
  }
}
