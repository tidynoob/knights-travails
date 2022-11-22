import React from "react";
import { Box, Heading } from "@chakra-ui/react";

function Navbar() {
    return (
        <Box display="flex" justifyContent="space-between" p="8" bg="gray.300" shadow="base">
            <Heading>Knights Travails</Heading>
        </Box>
    )
}

export default Navbar