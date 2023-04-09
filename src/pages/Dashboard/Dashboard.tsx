import { Box, IconButton, useTheme, Typography, Button } from "@mui/material";
import Header from "components/Header/Header";
import { tokens } from "theme";
import { mockTransactions } from "data/mockData";
import {
    DownloadOutlined,
    Email,
    PointOfSaleOutlined,
    PersonAdd,
    Traffic,
} from "@mui/icons-material";
import StatsBox from "components/StatsBox/StatsBox";
import LineChartComponent from "components/LineChartComponent/LineChartComponent";
import ProgressCircle from "components/ProgressCircle/ProgressCircle";
import BarComponent from "components/BarComponent/BarComponent";
import GeographyChartComponent from "components/GeographyChartComponent/GeographyChartComponent";

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Header title="DASHBOARD" subTitle="Welcome to the dashboard" />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlined sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            {/* Main grid */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* First row */}
                <Box
                    gridColumn="span 3"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ backgroundColor: colors.primary[400] }}
                >
                    <StatsBox
                        title="34,029"
                        subtitle="Emails Sent"
                        progress={0.75}
                        increase="+14%"
                        icon={
                            <Email
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>

                <Box
                    gridColumn="span 3"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ backgroundColor: colors.primary[400] }}
                >
                    <StatsBox
                        title="563,889"
                        subtitle="Sales Obtained"
                        progress={0.5}
                        increase="+21%"
                        icon={
                            <PointOfSaleOutlined
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>

                <Box
                    gridColumn="span 3"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ backgroundColor: colors.primary[400] }}
                >
                    <StatsBox
                        title="85,002"
                        subtitle="New Clients"
                        progress={0.3}
                        increase="+13%"
                        icon={
                            <PersonAdd
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>

                <Box
                    gridColumn="span 3"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ backgroundColor: colors.primary[400] }}
                >
                    <StatsBox
                        title="4,567,223"
                        subtitle="Traffic Inbound"
                        progress={0.8}
                        increase="+30%"
                        icon={
                            <Traffic
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>

                {/* Second Row */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    sx={{ backgroundColor: colors.primary[400] }}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>

                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $89,345,23
                            </Typography>
                        </Box>

                        <Box>
                            <IconButton>
                                <DownloadOutlined
                                    sx={{
                                        fontSize: "26px",
                                        color: colors.greenAccent[500],
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box height="250px" mt="-20px">
                        <LineChartComponent isDashboard={true} />
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    sx={{ backgroundColor: colors.primary[400] }}
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        color={colors.grey[100]}
                        p="15px"
                    >
                        <Typography
                            color={colors.grey[100]}
                            variant="h5"
                            fontWeight="600"
                        >
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, index) => (
                        <Box
                            key={`${transaction.txId}-${index}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    color={colors.greenAccent[500]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                                </Typography>

                                <Typography
                                    color={colors.grey[100]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {transaction.user}
                                </Typography>
                            </Box>

                            <Box color={colors.grey[100]}>
                                {transaction.date}
                            </Box>

                            <Box
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    padding: "5px 10px",
                                    borderRadius: "4px",
                                }}
                            >
                                {transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* 3rd row */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    sx={{
                        backgroundColor: colors.primary[400],
                        padding: "30px",
                    }}
                >
                    <Typography variant="h5" fontWeight="600">
                        Campaing
                    </Typography>

                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >
                        <ProgressCircle size="125" />
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{ mt: "15px" }}
                        >
                            $99,872 generated revenue
                        </Typography>
                        <Typography variant="h5" fontWeight="600">
                            Includes extra costs
                        </Typography>
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    sx={{
                        backgroundColor: colors.primary[400],
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        padding="30px 30px 0 30px"
                    >
                        Sales Quantity
                    </Typography>

                    <Box mt="-20px" height="250px">
                        <BarComponent isDashboard />
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    sx={{
                        backgroundColor: colors.primary[400],
                        padding: "30px",
                    }}
                >
                    <Typography variant="h5" fontWeight="600" mb="15px">
                        Geography Based Traffic
                    </Typography>

                    <Box height="200px">
                        <GeographyChartComponent isDashboard />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
