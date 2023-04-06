import { Box, useTheme } from "@mui/material";
import GeographyChartComponent from "components/GeographyChartComponent/GeographyChartComponent";
import Header from "components/Header/Header";
import { tokens } from "theme";

interface GeographyProps {}

const Geography = ({}: GeographyProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header
                title="GEOGRAPHY CHART"
                subTitle="Static data geography chart"
            />

            <Box
                height="75vh"
                border={`1px solid ${colors.grey[100]}`}
                borderRadius="4px"
            >
                <GeographyChartComponent />
            </Box>
        </Box>
    );
};

export default Geography;
