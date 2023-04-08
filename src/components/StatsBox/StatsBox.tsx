import { Box, Typography, useTheme } from "@mui/material";
import ProgressCircle from "components/ProgressCircle/ProgressCircle";
import { tokens } from "theme";

interface StatsBoxProps {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    progress: number;
    increase: string;
}

const StatsBox = ({
    icon,
    increase,
    progress,
    subtitle,
    title,
}: StatsBoxProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: colors.grey[100] }}
                    >
                        {title}
                    </Typography>
                </Box>

                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>

            <Box display="flex" justifyContent="space-between">
                <Typography
                    variant="h5"
                    sx={{ color: colors.greenAccent[500] }}
                >
                    {subtitle}
                </Typography>

                <Typography
                    variant="h5"
                    fontStyle="italic"
                    sx={{ color: colors.greenAccent[600] }}
                >
                    {increase}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatsBox;
