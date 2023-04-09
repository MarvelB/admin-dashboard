import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "theme";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";

interface TopBarProps {}

const TopBar = ({}: TopBarProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            p={2}
            position="sticky"
            top="0"
            zIndex="1"
            sx={{ backgroundColor: theme.palette.background.default }}
        >
            {/* Search bar */}
            <Box
                display="flex"
                borderRadius="3px"
                sx={{ backgroundColor: colors.primary[400] }}
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* Icons Section */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "light" ? (
                        <LightModeOutlined />
                    ) : (
                        <DarkModeOutlined />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlined />
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton>
                <IconButton>
                    <PersonOutlineOutlined />
                </IconButton>
            </Box>
        </Box>
    );
};

export default TopBar;
