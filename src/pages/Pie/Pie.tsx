import { Box } from "@mui/material";
import Header from "components/Header/Header";
import PieChartComponent from "components/PieChartComponent/PieChartComponent";

interface PieProps {}

const Pie = ({}: PieProps) => {
    return (
        <Box m="20px">
            <Header title="PIE CHART" subTitle="Static data pie chart" />

            <Box height="75vh">
                <PieChartComponent />
            </Box>
        </Box>
    );
};

export default Pie;
