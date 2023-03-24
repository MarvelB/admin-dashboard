import { Box, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "theme";

interface HeaderProps {
    title: string;
    subTitle: string;
}

const Header = ({ title, subTitle }: HeaderProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box mb="30px">
            <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ mb: "5px" }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
                {subTitle}
            </Typography>
        </Box>
    );
};

export default Header;
