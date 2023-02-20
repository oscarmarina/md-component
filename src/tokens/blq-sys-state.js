import refOpacity from './blq-ref-opacity.js';

const palette = refOpacity;
const namespace = 'sys-state';

const light = {
  'dragged-state-layer-opacity': 'opacity0',
  'focus-state-layer-opacity': 'opacity10',
  'hover-state-layer-opacity': 'opacity20',
  'pressed-state-layer-opacity': 'opacity10',
};

const dark = {
  'dragged-state-layer-opacity': 'opacity0',
  'focus-state-layer-opacity': 'opacity10',
  'hover-state-layer-opacity': 'opacity20',
  'pressed-state-layer-opacity': 'opacity10',
};

const sysState = {
  refToken: palette,
  namespace,
  sys: light,
};

export default sysState;
export { dark };
