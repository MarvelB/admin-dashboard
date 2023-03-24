import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
    AdminPanelSettingsOutlined,
    LockOpenOutlined,
    SecurityOutlined,
} from "@mui/icons-material";
import { tokens } from "theme";
import Header from "components/Header/Header";
import { mockDataTeam } from "data/mockData";
import { TeamMemberModel } from "types";

interface TeamProps {}

const Team = ({}: TeamProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef<TeamMemberModel, any, any>[] = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            align: "left",
            headerAlign: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "access",
            headerName: "Acess Level",
            flex: 1,
            renderCell: ({ row: { access } }) => (
                <Box
                    width="60%"
                    margin="0 auto"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    sx={{
                        backgroundColor:
                            access === "admin"
                                ? colors.greenAccent[600]
                                : colors.greenAccent[700],
                    }}
                    borderRadius="4px"
                >
                    {access === "admin" && <AdminPanelSettingsOutlined />}
                    {access === "manager" && <SecurityOutlined />}
                    {access === "user" && <LockOpenOutlined />}

                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        {access}
                    </Typography>
                </Box>
            ),
        },
    ];

    return (
        <Box m="20px">
            <Header title="TEAM" subTitle="Manage the team members" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": { border: "none" },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .name-column--cell": { color: colors.greenAccent[300] },
                    "& .MuiDataGrid-cell": { borderBottom: "none" },
                }}
            >
                <DataGrid rows={mockDataTeam} columns={columns} />
            </Box>
        </Box>
    );
};

export default Team;
