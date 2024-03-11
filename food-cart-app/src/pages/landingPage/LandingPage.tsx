import React, { useContext, useEffect, useState } from "react";
import "./landingPage.css";
import productData from "../../utils/productData";
import { Box, Button, Grid, Typography } from "@mui/material";
import CardItem from "../../components/card/CardItem";
import { ProductConext } from "../../context/ProductContext";

const LandingPage = () => {
  const { filteredData, allData, setAllData } = useContext(ProductConext);

  const [totalQuantity, setTotalQuantity] = useState(0);
  
  useEffect(() => {
    let sum = allData.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + currentValue.quantity,
      0
    );

    setTotalQuantity(sum);
  }, [allData]);

  const handleQuantityChange = (productId: any, action: any) => {
    if (action === "add") {
      setAllData((prevProductData: any) =>
        prevProductData.map((product: any) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else if (action === "sub") {
      setAllData((prevProductData: any) =>
        prevProductData.map((product: any) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };

  return (
    <Box className="grid_container">
      <Box className="card_item_list">
        {filteredData &&
          filteredData.map((ele: any) => {
            return (
              <CardItem
                key={ele.id}
                cardElement={ele}
                onQuantityChange={handleQuantityChange}
              />
            );
          })}
      </Box>
      <Box className="cart_box">
        <Button color="secondary" variant="contained" fullWidth size="large">
          Go to Cart ({totalQuantity})
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
