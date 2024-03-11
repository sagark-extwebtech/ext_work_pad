import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import CardList from "../../utils/cardData";
import { withStyles } from "@mui/styles";
import { style } from "./Cards.style";

const Cards = (props: any) => {
  const { classes } = props;
  
  return (
    <Stack direction="row" columnGap={3} py={1} className={classes.card_list}>
      {CardList.map((card, index) => (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          flex={1}
          height={140}
          p={2}
          key={index}
          component={Paper}
          mb={2}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box px={3}>{card.element}</Box>
            <Box>
              <Typography fontSize={15} align="right" color={"gray"}>
                {card.title}
              </Typography>
              <Typography fontSize={25}>{card.value}</Typography>
            </Box>
          </Box>
          <Divider />
          <Box
            display="flex"
            color={"gray"}
            alignItems="center"
            gap={0.5}
            fontSize="small"
          >
            {card.icon}
            {card.icon_name}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default withStyles(style)(Cards);
