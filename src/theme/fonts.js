import { Platform } from 'react-native';

export const fonts = Platform.select({
  ios: {
    regular: 'ArialMt',
    bold: 'Arial-BoldMT',
  },
  android: {
    regular: 'Roboto',
    medium: 'Roboto_medium',
  },
});
export default fonts;