import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FlashlightOnOutlinedIcon from '@mui/icons-material/FlashlightOnOutlined';
import SevereColdOutlinedIcon from '@mui/icons-material/SevereColdOutlined';

const CardList = [
  {
    title: "Number",
    value: "150GB",
    element: <CrisisAlertOutlinedIcon color="warning" sx={{ fontSize: 50 }}/>,
    icon: <RefreshOutlinedIcon />,
    icon_name: "Update Now",
  },
  {
    title: "Revenue",
    value: "$ 1,345",
    element: <FlashlightOnOutlinedIcon color="success" sx={{ fontSize: 50 }}/>,
    icon: <RefreshOutlinedIcon />,
    icon_name: "Last day",
  },
  {
    title: "Errors",
    value: "23",
    element: <SevereColdOutlinedIcon color="error" sx={{ fontSize: 50 }}/>,
    icon: <RefreshOutlinedIcon />,
    icon_name: "In the last hour",
  },
  {
    title: "Followers",
    value: "+45K",
    element: <FavoriteBorderOutlinedIcon color="primary" sx={{ fontSize: 50 }}/>,
    icon: <RefreshOutlinedIcon />,
    icon_name: "Update Now",
  },
];

export default CardList;