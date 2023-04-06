import { Box } from "@mui/material";
import Header from "components/Header/Header";
import LineChartComponent from "components/LineChartComponent/LineChartComponent";

interface LineProps {}

const Line = ({}: LineProps) => {
    return (
        <Box m="20px">
            <Header title="LINE CHART" subTitle="Static data line chart" />

            <Box height="75vh">
                <LineChartComponent />
            </Box>
        </Box>
    );
};

export default Line;
