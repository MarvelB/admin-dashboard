import { useTheme } from "@emotion/react";
import { tokens } from "theme";

interface TopBarProps {}

const TopBar = ({}: TopBarProps) => {

    const theme = useTheme();
    const colors = tokens(theme.);

    return (
        <div>
            <h2>TopBar</h2>
        </div>
    );
};

export default TopBar;
