import { LitElement, html } from 'lit';
import { tokens } from './styles/md-ripple-tokens.css.js';

class MdRipple extends LitElement {
  static properties = {
    disabled: { type: Boolean },
  };

  static styles = [tokens];

  constructor() {
    super();
    this.disabled = false;
  }

  render() {
    return html`
      <button ?disabled="${this.disabled}">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('md-ripple', MdRipple);
