import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { Box, ChakraProvider } from "@chakra-ui/react";

// Views imports
import Home from "views/home";
import PageNotFound from "views/PageNotFound";

// Theme imports
import generateTheme from "theme";

function AppWrapper() {
  return (
    <Box visibility={"visible"}>
      <Outlet />
    </Box>
  );
}

export default function AppRoutes() {
  // Theme
  const theme = generateTheme();

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<AppWrapper />}>
            {/* Public routes */}
            <Route index element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
