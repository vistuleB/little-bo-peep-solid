type StyleValue = string | number | null | undefined;
type StyleObject = Record<string, StyleValue>;
type StyleInput = string | StyleObject | undefined;

const toKebabCase = (property: string) =>
  property.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const styleObjectToString = (styles: StyleObject) =>
  Object.entries(styles)
    .filter(([, value]) => value !== null && value !== undefined)
    .map(([property, value]) => `${toKebabCase(property)}:${value}`)
    .join(";");

const styleToString = (style: StyleInput) =>
  typeof style === "string"
    ? style.replace(/;+\s*$/, "")
    : style
      ? styleObjectToString(style)
      : "";

const styleJoin = (...styles: StyleInput[]) =>
  styles.map(styleToString).filter(Boolean).join(";");

export default styleJoin;
