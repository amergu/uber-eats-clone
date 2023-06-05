import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Grid, InputBase, Fade, Drawer, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Person from "@mui/icons-material/Person";
import './PageHeader.css';
import { useEffect, useState } from "react";
import SideDrawer from "../pages/landing-page/SideDrawer";

export default function PageHeader() {

  const [appBarEnabled, setAppBarEnabled] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [drawerState, setDrawerState] = useState(false);
  const [userAddress, setUserAddress] = useState('');

  const toggleDrawer = (open) => (event) => {
    setDrawerState(open);
  };

  useEffect(() => {

    const someFunc = () => {
      if (appBarEnabled && window.scrollY !== 0) {
        setAppBarEnabled(false);
      }

      if (!appBarEnabled && window.scrollY === 0) {
        setAppBarEnabled(true);
      }

      if (showSearchBar && window.scrollY < 430)
        setShowSearchBar(false);

      if (!showSearchBar && window.scrollY > 430)
        setShowSearchBar(true);
    }

    window.addEventListener('scroll', someFunc);

    return () => window.removeEventListener('scroll', someFunc);
  }, [appBarEnabled, showSearchBar]);



  return (
    <Box display="flex" alignItems="center" >
      <AppBar className={appBarEnabled ? "TopNavBar" : "TopNavBar scrolled"} sx={{ height: "96px" }} position="fixed" color="transparent" elevation={0}  >
        <Toolbar sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            open={drawerState}
            onClose={toggleDrawer(false)}
          >
            <SideDrawer />
          </Drawer>
          <Box sx={{ flexGrow: 1 }}>
            <a href="/">
              <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg" height={24} alt="Uber Eats Home" />
            </a>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Fade in={showSearchBar}>
            <Grid className="deliveryAddress" sx={{ flexGrow: 5, mr: 5 }} container backgroundColor="rgb(238, 238, 238)" width={"30%"} display="flex" alignItems="center" height={"60%"}>
              <Grid item xs={1} width={"100%"} display={"flex"} justifyContent={"center"}>
                <Box >
                  <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z" fill="currentColor"></path></svg>
                </Box>
              </Grid>

              <Grid item xs={9}>
                <InputBase value={userAddress} onChange={(event)=>(setUserAddress(event.target.value))} placeholder="Enter delivery address"  sx={{ width: "100%" }}/>
              </Grid>

              <Grid item xs={2}>
                <Button onClick={() => (setUserAddress(''))} className={userAddress === "" ? "clearButton hidden" : "clearButton"} variant="normal" hidden={true} sx={{ height: "100%", textTransform: "none", backgroundColor: "inherit", color: "black", float: "right", p: 0, '&:hover': { background: "inherit" } }}>Clear</Button>
              </Grid>
            </Grid>
          </Fade>



          <Box sx={{ flexGrow: 1 }} />

          <Link href="https://www.ubereats.com/login-redirect/?campaign=signin_universal_link&marketing_vistor_id=da308c8c-0e6a-4cf1-9e2e-7706e477c2d3&redirect=%2F&guest_mode=false&app_clip=false"><Button variant="contained" startIcon={<Person />} sx={{ '&:hover': { background: "rgb(204,204,204)" }, borderRadius: 500, backgroundColor: "white", color: "black", mr: 2 }}>Log in</Button></Link>
          <Link href="https://www.ubereats.com/login-redirect/?campaign=signin_universal_link&marketing_vistor_id=da308c8c-0e6a-4cf1-9e2e-7706e477c2d3&redirect=%2F&guest_mode=false&app_clip=false"><Button variant="contained" color="success" sx={{ '&:hover': { background: "rgb(51,51,51)" }, borderRadius: 500, backgroundColor: "black" }}>Sign up</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
