/* eslint-disable no-console */
import { css, unsafeCSS } from 'lit';
import { cssStyleRule, themes } from '../tokens/helpers.js';

const customPropertyPrefix = 'ripple';

const ripple = {
  'container-color': 'sysColor.primary-container',
  'on-container-color': 'sysColor.on-tertiary-container',
  'unselected-pressed-state-layer-color': 'sysColor.primary',
};

const componentCustomProperty = themes(ripple, customPropertyPrefix);

export const tokens = css`
  ${unsafeCSS(cssStyleRule(`:host`, [componentCustomProperty]))}

  button {
    background-color: var(--_container-color);
  }
`;
