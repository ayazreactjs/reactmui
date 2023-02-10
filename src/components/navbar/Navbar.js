import {
  AppBar,
  Badge,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Avatar,
} from '@mui/material';
import Navmenu from './Navmenu';
import React, { useState } from 'react';
import * as icons from 'react-icons/bs';
import * as iCons from 'react-icons/bi';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Search = styled('div')`
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  /* width: 30%; */
  border-radius: 5%;
`;
const Icons = styled('div')`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'myColors.light' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          fontFamily="Train One"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          THEME
        </Typography>
        <Typography
          sx={{ display: { xs: 'block', sm: 'none' }, fontSize: '20px' }}
        >
          <icons.BsFlower1 />
        </Typography>
        <Search sx={{ width: { xs: '32%', sm: '20%' } }}>
          <InputBase placeholder="search..." />
          <iCons.BiSearchAlt color="Black" fontSize="25px" cursor="pointer" />
        </Search>
        <Icons>
          <Badge
            color="success"
            badgeContent="2"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <MailIcon />
          </Badge>
          <Badge
            color="error"
            badgeContent="4"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <NotificationsIcon />
          </Badge>
          <Typography
            sx={{ display: { xs: 'block', sm: 'none' } }}
            fontFamily="'Merriweather'"
          >
            John Doe
          </Typography>
          <Avatar
            onClick={handleClick}
            alt="John Doe"
            sx={{ width: 30, height: 30, cursor: 'pointer' }}
            src="images/11.jpg"
          />
          <Navmenu anchorEl={anchorEl} handleClose={handleClose} />
        </Icons>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
