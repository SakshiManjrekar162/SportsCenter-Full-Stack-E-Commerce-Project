import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { logOut } from "../../features/account/accountSlice";
import { Link } from "react-router-dom";

export default function SignedInMenu() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        color="inherit"
        sx={{ typography: "h6" }}
      >
        Hi, {user?.username}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>

        <MenuItem
          component={Link}
          to="/orders"
          onClick={handleClose}
        >
          My Orders
        </MenuItem>

        <MenuItem
          onClick={() => {
            dispatch(logOut());
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}