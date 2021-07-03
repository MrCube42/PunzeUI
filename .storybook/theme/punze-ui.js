import { create } from '@storybook/theming';
import logo from './logo.png'

export default create({
    base: 'light',

    brandTitle: 'PunzeUI',
    brandUrl: 'https://github.com/MrCube42/PunzeUI',
    brandImage: logo,

    // Sidebar background
    appBg: 'linear-gradient(0deg, rgba(174, 121, 117, 0.5) 0%, rgba(245, 185, 89, 0.5) 100%)',

    // Font
    fontBase: 'Roboto',
});
