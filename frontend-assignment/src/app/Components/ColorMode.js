// Desc: Contains the icons for toggling between light and dark mode

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../Context/ColorModeProvider";

function ColorMode() {
  const theme = useTheme();
  const colorMode = useColorMode();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        color: "text.primary",
        borderRadius: 1,
        p: 2,
      }}
    >
      {/* {theme..mode} mode */}
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon color="primary" /> // Forcefully set the color to primary (black) for Brightness7Icon
        ) : (
          <Brightness4Icon color="primary" /> // Forcefully set the color to primary (black) for Brightness4Icon
        )}
      </IconButton>
    </Box>
  );
}

export default ColorMode;
