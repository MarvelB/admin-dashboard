import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Header from "components/Header/Header";
import { mockDataInvoices } from "data/mockData";
import { tokens } from "theme";
import { InvoideModel } from "types";

interface InvoicesProps {}

const Invoices = ({}: InvoicesProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef<InvoideModel, any, any>[] = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
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
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (currItem) => (
                <Typography color={colors.greenAccent[500]}>
                    ${currItem.row.cost}
                </Typography>
            ),
        },
        { field: "date", headerName: "Date", flex: 1 },
    ];

    return (
        <Box m="20px">
            <Header title="INVOICES" subTitle="All invoices" />
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
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .name-column--cell": { color: colors.greenAccent[300] },
                    "& .MuiDataGrid-cell": { borderBottom: "none" },
                }}
            >
                <DataGrid
                    rows={mockDataInvoices}
                    columns={columns}
                    checkboxSelection
                />
            </Box>
        </Box>
    );
};

export default Invoices;
