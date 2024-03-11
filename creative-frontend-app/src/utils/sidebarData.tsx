import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import TabUnselectedOutlinedIcon from '@mui/icons-material/TabUnselectedOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import UpdateIcon from "@mui/icons-material/Update";
import ForumIcon from "@mui/icons-material/Forum";
import AttractionsIcon from "@mui/icons-material/Attractions";


const MenuList = [
    {
      title: "Dashboard",
      element: <DashboardOutlinedIcon />,
    },
    {
      title: "Components",
      element: <ViewInArOutlinedIcon />,
    },
    {
      title: "Forms",
      element: <ContentPasteOutlinedIcon />,
    },
    {
      title: "Table",
      element: <TabUnselectedOutlinedIcon />,
    },
    {
      title: "Maps",
      element: <FmdGoodOutlinedIcon />,
    },
    {
      title: "Charts",
      element: <BarChartOutlinedIcon />,
    },
    {
      title: "Calender",
      element: <CalendarTodayOutlinedIcon />,
    },
  ];
  const CategoryList = [
    {
      title: "Social",
      element: <PeopleAltIcon />,
    },
    {
      title: "Update",
      element: <UpdateIcon />,
    },
    {
      title: "Forums",
      element: <ForumIcon />,
    },
    {
      title: "Promotions",
      element: <AttractionsIcon />,
    },
  ];

  export { MenuList, CategoryList };