import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppContext } from '../Context/Newcontext';
import { AccountCircle } from '@mui/icons-material';
import { Stack } from '@mui/material';

export default function NavBar() {
    const { mydetails} = useContext(AppContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trivia Games
          </Typography>
          {!mydetails ? <Button href='/' color="inherit">Login</Button> :
          <Stack spacing={1} direction={'row'}>
             <AccountCircle />
             <Typography variant='subtitle2'>{mydetails?.nickname}</Typography>
          </Stack>
          
            }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
