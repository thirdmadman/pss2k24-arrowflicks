import { MantineColorsTuple, MantineThemeOverride } from '@mantine/core';
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

const gray: MantineColorsTuple = [
  '#F5F5F6',
  '#F5F5F6', // Gray 100
  '#EAEBED', // Gray 200
  '#D5D6DC', // Gray 300
  '#ACADB9', // Gray 400
  '#7B7C88', // Gray 500
  '#7B7C88', // Gray 600
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
  gray,
  white,
};

const theme: MantineThemeOverride = {
  colors,
  fontFamily: 'Inter, sans-serif',
};

export default theme;
