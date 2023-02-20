/* eslint-disable no-unused-vars */
import { css } from 'lit';

export const styles = css`:host {
  display: block;
  background-color: var(--_container-color);
  color: var(--_on-container-color);
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}`;
