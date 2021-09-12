import { withStyles } from "@material-ui/core";

export const withStyleComponent = (style: any, name: string) => {
  return withStyles(style, { name });
};
export type ToPT =
  | ((value: number) => string)
  | ((top: number, right?: number) => string)
  | ((top: number, right?: number, bottom?: number) => string)
  | ((top: number, right?: number, bottom?: number, left?: number) => string);

const convert = (number = 0) => {
  return `${number * 8}pt`;
};

const convertIn = (number = 0) => {
  return `${number}pt`;
};

export const toPt: ToPT = (
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

export const toIn: ToPT = (
  top = 0,
  right?: number,
  bottom?: number,
  left?: number
) => {
  const numbers: Array<string> = [convertIn(top)];
  if (right !== undefined) {
    numbers.push(convertIn(right));
  }
  if (bottom !== undefined) {
    numbers.push(convertIn(bottom));
  }
  if (left !== undefined) {
    numbers.push(convertIn(left));
  }
  return numbers.join(" ");
};
