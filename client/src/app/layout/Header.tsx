import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import { useEffect } from "react";
import SignedInMenu from "./SignedInMenu";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Store", path: "/store" },
  { title: "Contact", path: "/contact" },
];

const accountLinks = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  px: 2,
  typography: "h6",
  "&:hover": { color: "secondary.main" },
  "&.active": { color: "secondary.main" },
};

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  const { basket } = useAppSelector((state) => state.basket);
  const { user } = useAppSelector((state) => state.account);

  useEffect(() => {
    console.log("Basket Items:", basket?.items);
  }, [basket]);

  const itemCount =
    basket?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* LEFT - LOGO + THEME */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Sports Center
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>

        {/* CENTER - NAV LINKS */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <List sx={{ display: "flex", p: 0, m: 0 }}>
            {navLinks.map(({ title, path }) => (
              <ListItem
                key={path}
                component={NavLink}
                to={path}
                sx={navStyles}
              >
                {title}
              </ListItem>
            ))}
          </List>
        </Box>

        {/* RIGHT - CART + ACCOUNT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

          <IconButton component={Link} to="/basket" color="inherit">
            <Badge badgeContent={itemCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          {user ? (
            <SignedInMenu />
          ) : (
            <List sx={{ display: "flex", p: 0, m: 0 }}>
              {accountLinks.map(({ title, path }) => (
                <ListItem
                  key={path}
                  component={NavLink}
                  to={path}
                  sx={navStyles}
                >
                  {title}
                </ListItem>
              ))}
            </List>
          )}

        </Box>
      </Toolbar>
    </AppBar>
  );
}