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
    CalendarTodayOutlined,
    ReceiptOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "theme";
import { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
// @ts-ignore: Cannot find module
import user from "assets/user.jpg";
import { Link } from "react-router-dom";

interface CustomMenuItemProps {
    title: string;
    to: string;
    icon: React.ReactNode;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const CustomMenuItem = ({
    icon,
    selected,
    setSelected,
    title,
    to,
}: CustomMenuItemProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

interface SideBarProps {}

const SideBar = ({}: SideBarProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>("Dashboard");

    const handleCollapse = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLLIElement>,
    ) => {
        e.preventDefault();

        setIsCollapsed(!isCollapsed);
    };

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
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={handleCollapse}
                        icon={isCollapsed ? <MenuOutlined /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                ml="15px"
                                alignItems="center"
                            >
                                <Typography
                                    variant="h3"
                                    color={colors.grey[100]}
                                >
                                    ADMIN
                                </Typography>
                                <IconButton onClick={handleCollapse}>
                                    <MenuOutlined />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

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

                    {/* Some Menu items */}
                    <Box paddingLeft={isCollapsed ? "" : "10%"}>
                        <CustomMenuItem
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>

                        <CustomMenuItem
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <CustomMenuItem
                            title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <CustomMenuItem
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>

                        <CustomMenuItem
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <CustomMenuItem
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <CustomMenuItem
                            title="FAQ"
                            to="/faq"
                            icon={<HelpOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>

                        <CustomMenuItem
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <CustomMenuItem
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <CustomMenuItem
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <CustomMenuItem
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default SideBar;
