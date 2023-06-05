import PageHeader from "../../components/PageHeader";
import Box from "@mui/material/Box";
import LandingContent from "./LandingContent";
import "./LandingPage.css";
import UserOptions from "./UserOptions";
import {useState} from 'react';
import CitiesNearMe from "./CitiesNearMe";
import UberEatCountries from "./UberEatCountries";
import Footer from "./Footer";

function LandingPage(){

    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer = (open) => {
        setDrawerState(open);
    };

    return (
        <Box height={"100vh"} className="BoxPage">
            <PageHeader className="TopNavBar scrolled"/>
            <LandingContent/>
            <UserOptions/>
            <CitiesNearMe/>
            <UberEatCountries/>
            <Footer/>
        </Box>
    );
}

export default LandingPage;