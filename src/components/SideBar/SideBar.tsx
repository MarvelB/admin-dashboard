import "react-pro-sidebar/dist/css/styles.css";
import {
    HomeOutlined,
    PeopleOutlined,
    ContactsOutlined,
    MapOutlined,
    PersonOutlined,
    TimelineOutlined,
    MenuOutlined,
    HelpOutlined,
    PieChartOutlined,
    BarChartOutlined,
    CalendarMonthOutlined,
    ReceiptOutlined,
} from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "theme";
import { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
// @ts-ignore: Cannot find module
import user from "assets/user.jpg";

interface SideBarProps {}

const SideBar = ({}: SideBarProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px, 5px, 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar>
                <Menu>
                    <MenuItem></MenuItem>

                    {/* User section */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <img
                                    src={user}
                                    alt="profile user"
                                    width="100px"
                                    height="100px"
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                    }}
                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Jimmy McGill
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}
                                >
                                    CEO
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default SideBar;
