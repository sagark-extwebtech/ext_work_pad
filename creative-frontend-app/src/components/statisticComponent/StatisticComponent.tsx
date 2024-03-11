import { Box, Paper, Stack } from "@mui/material";

const StatisticComponent = () => {
  return (
    <Stack direction="row" columnGap={3}>
      <Box component={Paper} width="30%" height={500} >1</Box>
      <Box component={Paper} flex={1} height={450} >2</Box>
    </Stack>
  );
};

export default StatisticComponent;
