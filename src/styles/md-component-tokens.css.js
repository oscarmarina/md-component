/* eslint-disable no-console */
import { css, unsafeCSS } from 'lit';
import { cssStyleRule, themes, styles, ambients } from '../tokens/helpers.js';

/* $_default: (
  'md-sys-color': md-sys-color.values-light(),
  'md-sys-shape': md-sys-shape.values(),
  'md-sys-state': md-sys-state.values(),
);

'container-color': map.get($deps, 'md-sys-color', 'surface'),
'selected-focus-container-color': map.get($deps, 'md-sys-color', 'primary'),
'selected-pressed-state-layer-opacity': map.get($deps, 'md-sys-state', 'pressed-state-layer-opacity'),
'state-layer-shape': map.get($deps, 'md-sys-shape', 'corner-full'),

@include ripple.theme(
  (
    focus-color: var(--_unselected-focus-state-layer-color),
    focus-opacity: var(--_unselected-focus-state-layer-opacity),
    hover-color: var(--_unselected-hover-state-layer-color),
    hover-opacity: var(--_unselected-hover-state-layer-opacity),
    pressed-color: var(--_unselected-pressed-state-layer-color),
    pressed-opacity: var(--_unselected-pressed-state-layer-opacity),
    shape: var(--_state-layer-shape),
  )
);

*/

const customPropertyPrefix = 'tabs';
const ripplePropertyPrefix = 'ripple';

/* const getSysColor = {
  refToken: palette,
  namespace: sysColorNamespace.namespace,
  sys: sysColor,
};

const getSysState = {
  refToken: palette2,
  namespace: sysStateNamespace.namespace,
  sys: sysState,
};
*/

// Plain object
// eslint-disable-next-line no-unused-vars
const hardcodedCustomProperty = `
--_custom-color : orange
  `;

const tab = {
  'container-color': 'sysColor.primary-container',
  'on-container-color': 'sysColor.primary',
  'on-container-color2': 'sysColor.primary',
  'selected-focus-state-layer-opacity': 'sysState.hover-state-layer-opacity',
};

const ripple = {
  'container-color': 'custom-color',
};

// themes --> genera los tokens de componente con fallback a nivel host
const componentCustomProperty = themes(tab, customPropertyPrefix);
// styles --> utiliza la variable de token de componente a nivel host
const rippleCustomProperty = styles(ripple, ripplePropertyPrefix);

const primaryAmbientVar = {
  'container-color': 'sysColor.primary-container',
};

const secondaryAmbientVar = {
  'container-color': 'sysColor.on-tertiary-container',
};

const primaryAmbienComponent = ambients(primaryAmbientVar, customPropertyPrefix);
const secondaryAmbienComponent = ambients(secondaryAmbientVar, customPropertyPrefix);

const joinAmbients = {
  primary: css`
    ${unsafeCSS(
      cssStyleRule(`[ambient~="primary"], [data-ambient~="primary"]`, [primaryAmbienComponent]),
    )}
  `,

  secondary: css`
    ${unsafeCSS(
      cssStyleRule(`[ambient~="secondary"], [data-ambient~="secondary"]`, [
        secondaryAmbienComponent,
      ]),
    )}
  `,
};

export const tabAmbients = joinAmbients;
// console.log(componentCustomProperty, '\n === \n', rippleCustomProperty);
export const tokens = css`
  ${unsafeCSS(cssStyleRule(`:host`, [componentCustomProperty, rippleCustomProperty, hardcodedCustomProperty]))}
`;
