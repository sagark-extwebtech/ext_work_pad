import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { CategoryList, MenuList } from "../../utils/sidebarData";
import { Avatar, Badge, Button, Collapse, Stack, colors } from "@mui/material";
import Cards from "../../components/cards/Cards";
import LocationComponent from "../../components/locationComponent/LocationComponent";
import StatisticComponent from "../../components/statisticComponent/StatisticComponent";

const drawerWidth = 240;
const bgImage =
  "https://e1.pxfuel.com/desktop-wallpaper/651/179/desktop-wallpaper-mountain-monochrome-snow-monochrome-mobile-thumbnail.jpg";
//   "https://e0.pxfuel.com/wallpapers/762/447/desktop-wallpaper-mountain-view-sky-bw-dark-nature-thumbnail.jpg";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  //   opacity: 0.9,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 10px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  //   zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#FFFFFF",
  color: "black",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function LandingPage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [isListItemOpen, setIsListItemOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [isTitleMatch, setIsTitleMatch] = React.useState<string | null>(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setIsListItemOpen(false);
  };

  const handleClick = (title: string) => {
    if (title === "Components") {
      setIsListItemOpen(!isListItemOpen);
    }

    setIsTitleMatch(title);
  };

  //new
  const [activeButton, setActiveButton] = React.useState<string | null>(null);

  const handleActiveButton = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} display={"flex"} alignItems={"center"}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 2,
                marginLeft: open ? 0 : 8,
                bgcolor: "black",
                ":hover": { bgcolor: "#2E2C2C" },
              }}
            >
              <MenuIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Creative Page
            </Typography>
          </Box>

          <Stack direction="row" spacing={4}>
            <Button
              //   color="inherit"
              color={activeButton === "feature" ? "warning" : "inherit"}
              onClick={() => handleActiveButton("feature")}
            >
              Feature
            </Button>
            <Button
              //   color="inherit"
              color={activeButton === "about" ? "warning" : "inherit"}
              onClick={() => handleActiveButton("about")}
            >
              About
            </Button>
            <IconButton
              color="inherit"
              //   color={activeButton === "login" ? "warning" : "inherit"}
              onClick={() => handleActiveButton("login")}
            >
              <Badge badgeContent={100} color="info">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <ListItem disablePadding sx={{ display: "block", py: 1 }}>
          <ListItemButton
            className="listItem"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: "center",
                color: "#FFFFFF",
                fontWeight: 700,
              }}
            >
              <img
                onClick={handleDrawerClose}
                src="./logo192.png"
                width={25}
                height={25}
                alt="logo"
              />
            </ListItemIcon>
            <ListItemText
              primary={"CREATIVE TIM"}
              sx={{
                ml: open ? 3 : "auto",
                display: open ? "visible" : "none",
                color: "#FFFFFF",
                fontWeight: 700,
              }}
            />
          </ListItemButton>
        </ListItem>
        <Divider sx={{ borderColor: "gray", width: "90%", margin: "0 auto" }} />
        <ListItem disablePadding sx={{ display: "block", py: 1 }}>
          <ListItemButton
            className="listItem"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "#FFFFFF",
                fontWeight: 700,
              }}
            >
              <Avatar
                src="https://randomuser.me/api/portraits/men/64.jpg"
                alt="David Patel"
              />
            </ListItemIcon>
            <ListItemText
              primary={"David Patel"}
              sx={{
                opacity: open ? 1 : 0,
                color: "#FFFFFF",
                fontWeight: 700,
              }}
            />
            {open &&
              (isListItemOpen ? (
                <ExpandLess sx={{ color: "#FFFFFF", fontWeight: 700 }} />
              ) : (
                <ExpandMore sx={{ color: "#FFFFFF", fontWeight: 700 }} />
              ))}
          </ListItemButton>
        </ListItem>

        <Collapse in={isListItemOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {CategoryList.map((subItem, ind) => (
              <ListItemButton sx={{ pl: 5 }}>
                <ListItemIcon sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  {subItem.element}
                </ListItemIcon>
                <ListItemText
                  primary={subItem.title}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: "#FFFFFF",
                    fontWeight: 700,
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <Divider sx={{ borderColor: "gray" }} />
        <List>
          {MenuList.map((item, index) => (
            <>
              <ListItem
                key={item.title}
                onClick={() => setSelectedIndex(index)}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  selected={index === selectedIndex}
                  className="listItem"
                  onClick={() => handleClick(item.title)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    {item.element}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                    }}
                  />
                  {open &&
                    (item.title === "Components" ? (
                      isListItemOpen ? (
                        <ExpandLess
                          sx={{ color: "#FFFFFF", fontWeight: 700 }}
                        />
                      ) : (
                        <ExpandMore
                          sx={{ color: "#FFFFFF", fontWeight: 700 }}
                        />
                      )
                    ) : null)}
                </ListItemButton>
              </ListItem>

              {item.title === "Components" ? (
                <Collapse in={isListItemOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {CategoryList.map((subItem, ind) => (
                      <ListItemButton sx={{ pl: 5 }}>
                        <ListItemIcon
                          sx={{ color: "#FFFFFF", fontWeight: 700 }}
                        >
                          {subItem.element}
                        </ListItemIcon>
                        <ListItemText
                          primary={subItem.title}
                          sx={{
                            opacity: open ? 1 : 0,
                            color: "#FFFFFF",
                            fontWeight: 700,
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              ) : null}
            </>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Cards />
        <LocationComponent />
        <StatisticComponent/>
      </Box>
    </Box>
  );
}
