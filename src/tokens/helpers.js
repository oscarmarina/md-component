import sysColor from './blq-sys-color.js';
import sysState from './blq-sys-state.js';

const THEME = {
  sysColor,
  sysState,
};

export const kebabize = str =>
  Array.from(str)
    .map((letter, idx) =>
      letter.toUpperCase() === letter ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}` : letter,
    )
    .join('');

/**
 * Create a single CSS style rule.
 *
 * @param {selector} String
 * @param {value} String
 * @returns String cssText
 */

export const cssStyleRule = (selector, values) => {
  const cssText = `${selector} {
        ${values.map(value => value).join('')}
      }`;
  return cssText;
};

/**
 * Camelize a string, cutting the string by multiple separators like hyphens, underscores and
 * spaces.
 *
 * @param {text} string Text to camelize
 * @returns String Camelized text
 */
export const camelize = text =>
  // eslint-disable-next-line no-unused-vars
  text.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2, offset) => {
    if (p2) {
      return p2.toUpperCase();
    }
    return p1.toLowerCase();
  });

/**
 * Decamelizes a string with/without a custom separator (hyphen by default).
 *
 * @param {str} String String in camelcase
 * @param {separator} String Separator for the new decamelized string.
 */
export const decamelize = (str, separator) => {
  // eslint-disable-next-line no-param-reassign
  separator = typeof separator === 'undefined' ? '-' : separator;

  return str
    .replace(/([a-z\d])([A-Z])/g, `$1${separator}$2`)
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, `$1${separator}$2`)
    .toLowerCase();
};

const generateThemeVariables = (theme, ns, type = 'default') =>
  Object.entries(theme)
    .map(([itemName, itemValue]) => {
      const [namespaceKey, sysToken] = itemValue.split('.');
      const { namespace, sys, refToken } = THEME[namespaceKey] || {};
      const varMap = {
        default: () => ({
          varName: `--_${itemName}`,
          varValue: `var(--${ns}-${itemName}-ambient, var(--${ns}-${itemName}, var(--${namespace}-${sysToken}, var(--${
            sys[sysToken]
          }, ${refToken[sys[sysToken]]}))));`,
        }),
        isAmbient: () => ({
          varName: `--${ns}-${itemName}-ambient`,
          varValue: `var(--${namespace}-${sysToken}, var(--${sys[sysToken]}, ${
            refToken[sys[sysToken]]
          }));`,
        }),
        isStyle: () => ({
          varName: `--${ns}-${itemName}`,
          varValue: `var(--_${namespaceKey});`,
        }),
      };
      const { varName, varValue } = varMap[type]();

      return `${varName}: ${varValue}`;
    })
    .join('');

export const themes = (theme, ns) => generateThemeVariables(theme, ns, 'default');
export const ambients = (theme, ns) => generateThemeVariables(theme, ns, 'isAmbient');
export const styles = (theme, ns) => generateThemeVariables(theme, ns, 'isStyle');
