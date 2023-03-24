import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Header from "components/Header/Header";
import { mockDataContacts } from "data/mockData";
import { tokens } from "theme";
import { ContactModel } from "types";

interface ContactsProps {}

const Contacts = ({}: ContactsProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef<ContactModel, any, any>[] = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
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
        { field: "address", headerName: "Address" },
        { field: "city", headerName: "City" },
        { field: "zipCode", headerName: "ZipCode" },
    ];

    return (
        <Box m="20px">
            <Header title="CONTACTS" subTitle="All contacts" />
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
                    "& .name-column--cell": { color: colors.greenAccent[300] },
                    "& .MuiDataGrid-cell": { borderBottom: "none" },
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default Contacts;
