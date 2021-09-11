import { withStyles } from "@material-ui/core";

export const withStyleComponent = (style: any, name: string) => {
  return withStyles(style, { name });
};
type toPT =
  | ((value: number) => string)
  | ((top: number, right?: number) => string)
  | ((top: number, right?: number, bottom?: number) => string)
  | ((top: number, right?: number, bottom?: number, left?: number) => string);
const convert = (number = 0) => {
  return `${number * 0.75}pt`;
};
export const toPt: toPT = (
  top = 0,
  right?: number,
  bottom?: number,
  left?: number
) => {
  const numbers: Array<string> = [convert(top)];
  if (right !== undefined) {
    numbers.push(convert(right));
  }
  if (bottom !== undefined) {
    numbers.push(convert(bottom));
  }
  if (left !== undefined) {
    numbers.push(convert(left));
  }
  return numbers.join(" ");
};
