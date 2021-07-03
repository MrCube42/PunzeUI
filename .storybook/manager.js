import { addons } from '@storybook/addons';
import theme from './theme/punze-ui';

addons.setConfig({
    theme,
    // Hide toolbar
    isToolshown: false
});