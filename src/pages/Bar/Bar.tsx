import { Box } from "@mui/material";
import BarComponent from "components/BarComponent/BarComponent";
import Header from "components/Header/Header";

interface BarProps {}

const Bar = ({}: BarProps) => {
    return (
        <Box m="20px">
            <Header title="BAR CHART" subTitle="Static data bar chart" />

            <Box height="75vh">
                <BarComponent />
            </Box>
        </Box>
    );
};

export default Bar;
