import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true; // adds the `tablet` breakpoint
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

interface NavTileItem {
  img: string;
  text: string;
}

interface NavTilesProps {
  items: NavTileItem[];
}

function NavTiles({ items }: NavTilesProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            // 2 columns for mobile, 3 columns for larger screens
            mobile: 'repeat(2, 1fr)',
            tablet: 'repeat(3, 1fr)',
            laptop: 'repeat(3, 1fr)',
            desktop: 'repeat(3, 1fr)',
          },
          gap: 2,
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              padding: 2,
              borderRadius: 1,
              textAlign: 'center',
            }}
          >
            <img src={item.img} alt={item.text} style={{ width: '100%', height: 'auto' }} />
            <p>{item.text}</p>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  )
}

export default NavTiles;
