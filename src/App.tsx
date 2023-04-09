import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import SideBar from "components/SideBar/SideBar";
import TopBar from "components/TopBar/TopBar";
import Bar from "pages/Bar/Bar";
import Calendar from "pages/Calendar/Calendar";
import Contacts from "pages/Contacts/Contacts";
import Dashboard from "pages/Dashboard/Dashboard";
import Faq from "pages/FAQ/FAQ";
import Form from "pages/Form/Form";
import Geography from "pages/Geography/Geography";
import Invoices from "pages/Invoices/Invoices";
import Line from "pages/Line/Line";
import Pie from "pages/Pie/Pie";
import Team from "pages/Team/Team";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "theme";

function App() {
    const { theme, colorMode } = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <SideBar />

                    <Box className="content" sx={{ overflowY: "scroll" }}>
                        <TopBar />

                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/faq" element={<Faq />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/geography" element={<Geography />} />
                        </Routes>
                    </Box>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
