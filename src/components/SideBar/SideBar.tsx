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
            {/* User section */}
            {!isCollapsed && (
                <Box>
                    <Box>
                        <img src="" alt="" />
                    </Box>

                    <Box>
                        <Typography>Jimmy McGill</Typography>
                        <Typography>CEO</Typography>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default SideBar;
