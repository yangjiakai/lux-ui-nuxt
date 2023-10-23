import type { ThemeTypes } from '@/types/ThemeType';

const BLUE_THEME: ThemeTypes = {
    name: 'BLUE_THEME',
    dark: false,
    variables: {
        'border-color': '#e5eaef'
    },
    colors: {
        primary: '#186dde',
        secondary: '#0acc95',
        info: '#7460ee',
        success: '#13DEB9',
        accent: '#fc4b6c',
        warning: '#fec90f',
        error: '#ef5350',
        lightprimary: '#f5fcfd',
        lightsecondary: '#E8F7FF',
        lightsuccess: '#E6FFFA',
        lighterror: '#FDEDE8',
        lightwarning: '#FEF5E5',
        lightinfo: '#EBF3FE',
        textPrimary: '#2A3547',
        textSecondary: '#2A3547',
        borderColor: '#e5eaef',
        inputBorder: '#DFE5EF',
        containerBg: '#ffffff',
        background: '#f4f6f9',
        hoverColor: '#f6f9fc',
        surface: '#fff',
        'on-surface-variant': '#fff',
        grey100: '#F2F6FA',
        grey200: '#EAEFF4',
        muted: '#1d2228',
        borderline: '#1d1d1d'
    }
};

const GRAY_THEME = {
    name: 'GRAY_THEME',
    dark: false,
    variables: {
        'border-color': '#e5eaef',
    },
    colors: {
        primary: "#344767",
        secondary: "#0162FD",
        accent: "#705CF6",
        success: "#06d6a0",
        warning: "#FFAB00",
        info: "#2196F3",
        error: "#ef476f",
        'on-success': "#fff",
        'on-warning': "#fff",
        'on-info': "#fff",
        'on-error': "#fff",
        lightprimary: '#f5fcfd',
        lightsecondary: '#E8F7FF',
        lightsuccess: '#E6FFFA',
        lighterror: '#FDEDE8',
        lightwarning: '#FEF5E5',
        lightinfo: '#EBF3FE',
        textPrimary: '#2A3547',
        textSecondary: '#2A3547',
        borderColor: '#e5eaef',
        inputBorder: '#DFE5EF',
        containerBg: '#ffffff',
        background: '#f4f6f9',
        hoverColor: '#f6f9fc',
        surface: '#fff',
        'on-surface-variant': '#fff',
        grey100: '#F2F6FA',
        grey200: '#EAEFF4',
        muted: '#1d2228',
        borderline: '#1d1d1d'
    }
};


export { BLUE_THEME, GRAY_THEME };
