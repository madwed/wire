export default function mountCanvas ({ element }) {
  const canvas = document.createElement('canvas');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style = [
    'position: absolute',
    'top: 0',
    'left: 0',
  ].join(';');

  element.replaceWith(canvas);
  return canvas;
}
