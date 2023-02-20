/* eslint-disable import/no-extraneous-dependencies */
import { setDocumentStyles } from '@blockquote-web-components/blockquote-base-style-helpers';
import { css, unsafeCSS } from 'lit';
import { cssStyleRule } from './helpers.js';
import palette from './blq-ref-palette.js';
import { dark } from './blq-sys-color.js';

const colorScheme = Object.keys(dark)
  .map(
    item => `
  --sys-color-${item}: var(--ref-palette-${dark[item]}, ${palette[dark[item]]});
  `,
  )
  .join(' ');

const darkColorScheme = unsafeCSS(cssStyleRule(`[data-color-scheme="dark"]`, colorScheme));

setDocumentStyles(css`
  ${darkColorScheme}
`);

export { darkColorScheme, setDocumentStyles };
