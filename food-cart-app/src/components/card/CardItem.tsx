import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { withStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { style } from "./CardItem.style";


const CardItem = (props: any) => {
  const { cardElement,onQuantityChange, classes } = props;

  const handleAdd = (stockStatus:any, id:any) => {
    onQuantityChange(id, "add");
  };

  const handleSubtract = (id:any) => {
    onQuantityChange(id, "sub");
  };

  return (
    <Card className={classes.card_item}>
      <CardMedia
        component="img"
        className={classes.card_img}
        // image="https://source.unsplash.com/random"
        image={cardElement.imageUrl}
        alt="unsplash img"
      />
      <CardContent className={classes.card_content}>
        <Box>
          <Box className={classes.card_actions}>
            <Typography variant="h5" component="h5" gutterBottom>
              {cardElement?.title}
            </Typography>
            <Box>
              <AvatarGroup max={3} >
                {cardElement?.sub_categories.length > 0 &&
                  cardElement?.sub_categories.map((ele: any) => {
                    return <Avatar alt={ele.item} src={ele.imageUrl} />;
                  })}
              </AvatarGroup>
            </Box>
          </Box>

          <Typography variant="body2" color="text.secondary">
            {cardElement.description}
          </Typography>
        </Box>

        <CardActions className={classes.card_actions}>
          <Box>
            <Typography
              variant="body2"
              color="black"
              display="inline"
              paddingRight={1}
            >
              {cardElement.discountedPrice}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              display="inline"
              sx={{ textDecoration: "line-through" }}
            >
              {cardElement.price}
            </Typography>
          </Box>
          <Box>
            {!cardElement.stockStatus ? (
              <Button
                variant="contained"
                size="small"
                className={classes.add_button}
                color="error"
              >
                Out of stock
              </Button>
            ) : (
              <>
                {cardElement.quantity > 0 && (
                  <Box display="inline">
                    <Button
                      variant="contained"
                      size="small"
                      className={classes.add_button}
                      onClick={()=> handleSubtract(cardElement.id)}
                    >
                      <RemoveIcon />
                    </Button>
                    <Typography
                      variant="body1"
                      color="black"
                      display="inline"
                      p={2}
                    >
                      {cardElement.quantity}
                    </Typography>
                  </Box>
                )}

                <Button
                  variant="contained"
                  size="small"
                  className={classes.add_button}
                  onClick={()=> handleAdd(cardElement.stockStatus,cardElement.id)}
                >
                  <AddIcon />
                </Button>
              </>
            )}
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default withStyles(style)(CardItem);
