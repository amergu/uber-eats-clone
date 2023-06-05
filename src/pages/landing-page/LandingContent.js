import { Box, Button, Link, Grid, InputBase, Typography } from "@mui/material";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './LandingContent.css';
import { useState } from "react";
import CustomDialog from "./CustomDialog";

function LandingContent() {

    const [userAddress, setUserAddress] = useState('');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Box display="flex" justifyContent={"center"} flexDirection="column" width="870px" height="100%" boxSizing={"border-box"} p={4}>
            <Typography variant="h3" mb={"40px"} fontWeight={550}>Order food to your door</Typography>
            <CustomDialog open={open} handleClose={handleClose}/>
            <Grid container display="flex" alignItems="center"   >
                <Grid container className="addressBar" backgroundColor="white" xs={7} display="flex" p="8px 16px" alignItems="center" height={"100%"}>
                    <Grid item xs={1} width={"100%"} display={"flex"} justifyContent={"center"}>
                        <Box >
                            <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z" fill="currentColor"></path></svg>
                        </Box>
                    </Grid>

                    <Grid item xs={9}>
                        <InputBase value={userAddress} onChange={(event) => { setUserAddress(event.target.value); }} placeholder="Enter delivery address" sx={{ width: "100%" }} />
                    </Grid>

                    <Grid item xs={2}>
                        <Button onClick={() => (setUserAddress(''))} className={userAddress==="" ? "clearButton hidden" : "clearButton"}  variant="normal" hidden={true} sx={{ height:"100%", textTransform: "none", backgroundColor: "white", color: "black", float: "right", p:0, '&:hover': { background: "inherit" }  }}>Clear</Button>
                    </Grid>
                </Grid>
                <Grid item xs={0.1}></Grid>
                <Grid item xs={2.8} backgroundColor="white" height={"100%"}>
                    <Button p={0} disableElevation variant="contained" startIcon={<AccessTimeFilledIcon />} endIcon={<KeyboardArrowDownIcon />} sx={{ '&:hover': { background: "inherit" }, backgroundColor: "white", color: "black", width: "100%", height:"100%" }}>Deliver Now</Button>
                    {/* <Button p={0} disableElevation variant="contained" startIcon={<AccessTimeFilledIcon />} endIcon={<KeyboardArrowDownIcon />} sx={{ '&:hover': { background: "inherit" }, backgroundColor: "white", color: "black", width: "100%"}}>Deliver Now</Button> */}
                    {/* <Button p={0} disableElevation variant="contained" startIcon={<AccessTimeFilledIcon />} endIcon={<KeyboardArrowDownIcon />} sx={{ '&:hover': { background: "inherit" }, backgroundColor: "white", color: "black", width: "100%"}}>Deliver Now</Button> */}
                </Grid>
                <Grid item xs={0.1}></Grid>
                <Grid item xs={1.6} height={"100%"} width="100%">
                    <Button variant="contained" onClick={handleClickOpen} sx={{ '&:hover': { background: "rgb(51,51,51)" }, backgroundColor: "black", height: "100%", width: "100%" }} >Find Food</Button>
                </Grid>

            </Grid>
            <br />
            <Typography variant="body2">
                <Link href="https://www.ubereats.com/login-redirect/?campaign=signin_universal_link&marketing_vistor_id=da308c8c-0e6a-4cf1-9e2e-7706e477c2d3&redirect=%2F&guest_mode=false&app_clip=false" sx={{ color: "black" }}>Sign In</Link> for your recent addresses
            </Typography>
        </Box>
    );
}

export default LandingContent;