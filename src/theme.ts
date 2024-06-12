import { createTheme } from '@mui/material';
import type { } from '@mui/lab/themeAugmentation';

declare module '@mui/material/styles' {
  interface Palette {
    surface: Palette['primary'];
    outline: Palette['primary'];
  }
  interface PaletteOptions {
    surface: PaletteOptions['primary'];
    outline: PaletteOptions['primary'];
  }

  interface PaletteColor {
    on?: string;
    bright?: string;
    text?: string;
    container?: string;
    soft?: string;
  }

  interface SimplePaletteColorOptions {
    on?: string;
    bright?: string;
    text?: string;
    container?: string;
    contrastText?: string;
    soft?: string;
  }

  interface TypographyVariants {
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h4: React.CSSProperties;
    body: React.CSSProperties;
    caption: React.CSSProperties;
    valueType: React.CSSProperties;
    header: React.CSSProperties;
    errorLink: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1?: React.CSSProperties;
    h2?: React.CSSProperties;
    h3?: React.CSSProperties;
    h4?: React.CSSProperties;
    body?: React.CSSProperties;
    caption?: React.CSSProperties;
    valueType?: React.CSSProperties;
    header: React.CSSProperties;
    errorLink: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    body: true;
    caption: true;
    valueType: true;
    header: true;
    errorLink: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    textButton: true;
    secondaryButton: true;
    textIconButton: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#5E7CE2',
      on: '#FFFFFF',
      container: '#CBDDFF',
      text: '#3D5CC3',
    },
    surface: {
      main: '#F1F3F9',
      on: '#0D1F2D',
      bright: '#FFFFFF',
      soft: '#778895',
      container: '#2BC23A',
    },
    outline: {
      main: '#EAECF2',
    },
    secondary: {
      main: '#384147',
      text: '#5D6770',
    },
    error: {
      main: '#D12B49',
      contrastText: '#E22A40',
      soft: '#FFD7DB',
      text: '#C22B2B',
      container: '#FBC3C3',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 'normal',
    },
    h2: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal',
    },
    h3: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal',
    },
    h4: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    body: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    caption: {
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    valueType: {
      fontSize: '10px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    header: {
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    errorLink: {},
  },
  components: {
    
  },
});

export default theme;
