import { Box } from "@mui/material";
import Header from "components/Header/Header";

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
    return (
        <Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Header title="DASHBOARD" subTitle="Welcome to the dashboard" />
            </Box>
        </Box>
    );
};

export default Dashboard;
