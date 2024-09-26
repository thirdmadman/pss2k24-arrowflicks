import { MantineColorShade, MantineColorsTuple, MantineThemeOverride, createTheme } from '@mantine/core';
const white: MantineColorsTuple = [
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
];

const grey: MantineColorsTuple = [
  '#F5F5F6',
  '#F5F5F6', // Grey 100
  '#EAEBED', // Grey 200
  '#D5D6DC', // Grey 300
  '#ACADB9', // Grey 400
  '#7B7C88', // Grey 500
  '#7B7C88', // Grey 600
  '#7B7C88',
  '#7B7C88',
  '#7B7C88',
];

const black: MantineColorsTuple = [
  '#232134',
  '#232134',
  '#232134',
  '#232134',
  '#232134',
  '#232134',
  '#232134',
  '#232134',
  '#232134',
  '#232134',
];

const purple: MantineColorsTuple = [
  '#F2ECFA',
  '#F2ECFA', // Purple 100
  '#E5D5FA', // Purple 200
  '#D1B4F8', // Purple 300
  '#BD93F7', // Purple 400
  '#9854F6', // Purple 500
  '#541F9D', // Purple 600
  '#541F9D',
  '#541F9D',
  '#541F9D',
];

const colors = {
  purple,
  black,
  grey,
  white,
};

export const getColor = (name: keyof typeof colors, index: MantineColorShade, defaultColor = '#ffffff') =>
  theme.colors?.[name]?.[index] ?? defaultColor;

const themeOverride: MantineThemeOverride = {
  colors,
  fontFamily: 'Inter, sans-serif',
};

export const theme: MantineThemeOverride = createTheme(themeOverride);
