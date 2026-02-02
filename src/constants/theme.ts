import { colors } from "./colors";
import { fonts } from "./fonts";

import { TextStyle } from "react-native";

const headings = {
  default: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 16,
    color: colors.text,
  } satisfies TextStyle,
  defaultMuted: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 16,
    color: colors.textSecondary,
  } satisfies TextStyle,
  h1: {
    fontFamily: fonts.regular,
    fontSize: 24,
    lineHeight: 32,
    color: colors.text,
  } satisfies TextStyle,
  h2: {
    fontFamily: fonts.regular,
    fontSize: 20,
    lineHeight: 28,
    color: colors.text,
  } satisfies TextStyle,
  h3: {
    fontFamily: fonts.regular,
    fontSize: 18,
    lineHeight: 24,
    color: colors.text,
  } satisfies TextStyle,
};

export const theme = {
  headings,
  colors,
  fonts,
} as const;