import { useState } from "react";
import { Container, Text, VStack, Input, Button, Box, Heading, IconButton } from "@chakra-ui/react";
import { FaPlane } from "react-icons/fa";

const Index = () => {
  const [inputData, setInputData] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handlePredict = () => {
    // Placeholder for prediction logic
    // You would replace this with a call to your backend prediction API
    const mockPrediction = Math.random() * 100; // Mock prediction value
    setPrediction(mockPrediction.toFixed(2));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl" mb={6}>
          Aviator Bot Predictor
        </Heading>
        <IconButton aria-label="Aviator Bot" icon={<FaPlane />} size="lg" isRound />
        <Text fontSize="lg">Enter your data to predict how far the jet will fly:</Text>
        <Input placeholder="Enter data" value={inputData} onChange={handleInputChange} />
        <Button colorScheme="teal" onClick={handlePredict}>
          Predict
        </Button>
        {prediction && (
          <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
            <Text fontSize="xl">Predicted Distance: {prediction} units</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
