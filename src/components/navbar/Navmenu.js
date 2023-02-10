import React from 'react';
import { Menu, MenuItem } from '@mui/material';
const Navmenu = ({ anchorEl, handleClose }) => {
  return (
    <div>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Menu1</MenuItem>
        <MenuItem onClick={handleClose}>Menu2</MenuItem>
        <MenuItem onClick={handleClose}>Menu3</MenuItem>
      </Menu>
    </div>
  );
};

export default Navmenu;
