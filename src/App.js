import { Box, Container } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
    return (
        <>
            <Box mb={20}>
                <Container>
                    <Header />
                    <Content />
                </Container>
            </Box>
        </>
    );
}

export default App;
