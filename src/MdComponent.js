import { html, LitElement } from 'lit';
import { tokens } from './styles/md-component-tokens.css.js';
import { styles } from './styles/md-component-styles.css.js';
import './MdRipple.js';

export class MdComponent extends LitElement {
  static is = 'md-component';

  static styles = [tokens, styles];

  static properties = {
    /**
     * The heading to say "Hello" to.
     * @type {string}
     */
    heading: { type: String },

    /**
     * The number of times the button has been clicked.
     * @type {number}
     */
    counter: { type: Number },
  };

  constructor() {
    super();
    this.heading = 'Hey there';
    this.counter = 5;
  }

  render() {
    return html`
      <h1>${this.sayHello(this.heading)}!</h1>
      <md-ripple class="ripple" @click=${this.#onClick}>Counter: ${this.counter}</md-ripple>
      <hr />
      <slot></slot>
    `;
  }

  #onClick() {
    this.counter += 1;
    this.dispatchEvent(new CustomEvent('counterchange', { detail: this.counter }));
  }

  /**
   * Formats a greeting
   * @param heading {string} The heading to say "Hello" to
   * @returns {string} A greeting directed at `heading`
   */
  sayHello(heading) {
    return `Hello, ${heading}`;
  }
}
