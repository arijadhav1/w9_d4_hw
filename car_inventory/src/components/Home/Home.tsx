import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme, ThemeProvider, createTheme } from '@mui/material'; 

import car_image from '../../assets/images/erik-mclean-ZRns2R5azu0-unsplash.jpg';

interface Props {
  title: string;
}

const Root = styled('div')({
  padding: 0,
  margin: 0,
});

const NavBarContainer = styled('div')(({ theme }) => ({ // passed through theme and made the backgroundColor and color based on the theme pallete. 
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const Logo = styled('h1')({
  margin: '0 0 0 0.45em',
});

const LogoA = styled(Link)(({ theme }) => ({ // passed through theme and made the backgroundColor and color based on the theme pallete.
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  listStyle: 'none',
  textTransform: 'uppercase',
  textDecoration: 'none',
}));

const LogoNavigation = styled('ul')({
  listStyle: 'none',
  textTransform: 'uppercase',
  textDecoration: 'none',
  display: 'flex',
});

const NavA = styled(Link)(({ theme }) => ({ // passed through theme and made the backgroundColor and color based on the theme pallete.
  display: 'block',
  padding: '1em',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const Main = styled('main')(({ theme }) => ({ // passed through theme and made the backgroundColor and color based on the theme pallete.
  backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.7)), url(${car_image});`,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'absolute',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const MainText = styled('div')({
  textAlign: 'center',
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const Home = (props: Props) => { // First defined theme in Home and created an arrow function for setDarkMode to be true or false. 
  const [darkMode, setDarkMode] = useState(false); //Down below, created a button that calls the arrow function for setDarkMode for onClick
                                                  //and switches the value in order for the palette to change.
  const theme = useTheme();
  const appTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', 
    },
  });
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode); 
  };
  return (
    <ThemeProvider theme={appTheme}>
      <Root>
        <NavBarContainer>
          <Logo>
            <LogoA to="#">Car Collection</LogoA>
          </Logo>
          <LogoNavigation>
            <li>
              <NavA to='/'>Home</NavA>
            </li>
            <li>
              <NavA to='/dashboard'>Dashboard</NavA>
            </li>
            <li>
              <NavA to='/signin'>Sign In</NavA>
            </li>
            <li>
              <NavA to='/signup'>Sign Up</NavA>
            </li>
          </LogoNavigation>
        </NavBarContainer>

        <Main>
          <MainText>
            <h1>{props.title}</h1>
            <p>Welcome to our Car page! Take a look around!</p>
            <Button color='primary' variant='contained' component={Link} to='#'>
              View Cars Now
            </Button>
            <Button color='primary' variant='contained' onClick={toggleTheme}>
              {darkMode ? 'Light Mode' : 'Dark Mode'} 
            </Button>
          </MainText>
        </Main>
      </Root>
    </ThemeProvider>
  );
};

export default Home;