import { Box, Flex } from "@radix-ui/themes"
import HandymanIcon from '@mui/icons-material/Handyman';
import AddIcon from '@mui/icons-material/Add';
import RedeemIcon from '@mui/icons-material/Redeem';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebar.css'
function Sidebar() {
  return (
    <div style={{height: "60vh", width: "4vw", position: "fixed", zIndex: 10, marginTop: "60px", marginLeft: "10px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "white"}}>
      <Box style={{ width: "4vw", marginLeft: "10px", alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "60vh"}}>
          <HomeIcon style={{ fontSize: 30 }} className="SidebarIcon"/>
          <HandymanIcon style={{ fontSize: 30 }} className="SidebarIcon"/>
          <AddIcon style={{ fontSize: 30 }} className="SidebarIcon"/>
          <RedeemIcon style={{ fontSize: 30 }} className="SidebarIcon"/>
          <LogoutIcon style={{ fontSize: 30 }} className="SidebarIcon"/>
      </Box>
    </div>
  )
}

export default Sidebar
