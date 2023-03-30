import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useTheme,
    Typography,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Header from "components/Header/Header";
import { tokens } from "theme";

interface FaqProps {}

const Faq = ({}: FaqProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
            <Header title="FAQs" subTitle="Frequently Asked Questions" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore perspiciatis quis asperiores natus, quibusdam
                        eveniet tempora accusantium dignissimos totam repellat
                        fugit, culpa soluta, eaque facilis officia quod?
                        Distinctio, quis cum.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Random question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore perspiciatis quis asperiores natus, quibusdam
                        eveniet tempora accusantium dignissimos totam repellat
                        fugit, culpa soluta, eaque facilis officia quod?
                        Distinctio, quis cum.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Less Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore perspiciatis quis asperiores natus, quibusdam
                        eveniet tempora accusantium dignissimos totam repellat
                        fugit, culpa soluta, eaque facilis officia quod?
                        Distinctio, quis cum.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Not that common question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore perspiciatis quis asperiores natus, quibusdam
                        eveniet tempora accusantium dignissimos totam repellat
                        fugit, culpa soluta, eaque facilis officia quod?
                        Distinctio, quis cum.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Extremely important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore perspiciatis quis asperiores natus, quibusdam
                        eveniet tempora accusantium dignissimos totam repellat
                        fugit, culpa soluta, eaque facilis officia quod?
                        Distinctio, quis cum.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Least important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore perspiciatis quis asperiores natus, quibusdam
                        eveniet tempora accusantium dignissimos totam repellat
                        fugit, culpa soluta, eaque facilis officia quod?
                        Distinctio, quis cum.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default Faq;
