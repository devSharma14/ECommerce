import React, { useState } from "react";
import {
    AppBar,
    Button,
    IconButton,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DrawerComp from "./DrawerComp";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";


const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <React.Fragment>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
                    {isMatch ? (
                        <>
                            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                                Shoppee
                            </Typography>
                            <DrawerComp />
                        </>
                    ) : (
                        <>
                            <Tabs
                                sx={{ marginLeft: "auto" }}
                                indicatorColor="secondary"
                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                            >
                                <Tab label="Products" />
                                <Tab label="Contact us" />
                                <Tab label="Services" />
                                <Tab label="About us" />
                            </Tabs>

                            <IconButton sx={{ marginLeft: "10px" }} color="inherit">
                                <AddShoppingCartIcon />
                            </IconButton>

                            <Button sx={{ marginLeft: "auto" }} variant="contained">
                                Login
                            </Button>
                            <Button sx={{ marginLeft: "20px" }} variant="contained">
                                Sign up
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;
