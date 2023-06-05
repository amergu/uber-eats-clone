import { Box, Button, Typography, Link } from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
function SideDrawer() {
    return (
        <Box p={"24px"} sx={{width:"300px",  height:"100vh"}}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", width:"100%" }}>
                <Box sx={{ display: "flex", flexDirection: "column", rowGap:"16px", width:"100%"}}>
                    <Box  sx={{ display: "flex", flexDirection: "column", rowGap:"8px" }}>
                        <Link href="https://www.ubereats.com/login-redirect/?campaign=signin_universal_link&marketing_vistor_id=da308c8c-0e6a-4cf1-9e2e-7706e477c2d3&redirect=%2F&guest_mode=false&app_clip=false"><Button variant="contained" size="large" sx={{ '&:hover': {background: "rgb(51,51,51)"}, backgroundColor: "black", width:"100%"}} >Sign up</Button></Link>
                        <Link href="https://www.ubereats.com/login-redirect/?campaign=signin_universal_link&marketing_vistor_id=da308c8c-0e6a-4cf1-9e2e-7706e477c2d3&redirect=%2F&guest_mode=false&app_clip=false"><Button variant="contained" size="large" sx={{ '&:hover': {background: "rgb(226,226,226)"}, backgroundColor: "rgb(238, 238, 238)", color: "black", width:"100%" }} >Log in</Button></Link>
                    </Box>
                    <Box marginTop={"24px"} marginBottom={"24px"} sx={{display:"flex", flexDirection:"column", rowGap:"16px"}}>
                        <Link variant="body2" underline="hover" sx={{ color: "black" }} href="https://www.uber.com/business/eats" >Create a business account</Link>
                        <Link variant="body2" underline="hover" sx={{ color: "black" }} href="https://merchants.ubereats.com/s/signup/" >Add your restaurant</Link>
                        <Link variant="body2" underline="hover" sx={{ color: "black" }} href="https://www.uber.com/drive/delivery/" >Sign up to deliver</Link>
                    </Box>
                </Box>
                <Box sx={{display:"flex", flexDirection:"column", rowGap:"16px"}}>
                    <Box height="56px" sx={{ display: "flex", columnGap: "16px" }}>
                        <img alt="Uber Eats" height="100%" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/31ee382bd0e6ed84.svg" />
                        <Box sx={{display:"flex", flexDirection: "column", justifyContent:"center"}}><Typography variant="body1">There's more to love in the app.</Typography></Box>
                    </Box>
                    <Box sx={{ display: "flex", columnGap: "12px" }}>
                        <Link href="https://apps.apple.com/us/app/uber-eats-food-delivery/id1058959277"><Button variant="contained" disableElevation startIcon={<AppleIcon />} sx={{ '&:hover': {background: "rgb(226,226,226)"}, borderRadius: 500, backgroundColor: "rgb(238, 238, 238)", color: "black"}}>iPhone</Button></Link>
                        <Link href="https://play.google.com/store/apps/details?id=com.ubercab.eats"><Button variant="contained" disableElevation startIcon={<AndroidIcon />} sx={{ '&:hover': {background: "rgb(226,226,226)"}, borderRadius: 500, backgroundColor: "rgb(238, 238, 238)", color: "black" }}>Android</Button></Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SideDrawer;