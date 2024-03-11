import { Button, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ProductConext } from "../../context/ProductContext";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const {handleFilterProducts,allData } = useContext(ProductConext)

  useEffect(() => {
    if (activeButton === null) {
      setActiveButton("Italian")
      handleFilterProducts("Italian")
    }else{
      handleFilterProducts(activeButton)
    }
    
  }, [allData])
  
  const handleActiveButton = (buttonName: string) => {
    setActiveButton(buttonName);
    handleFilterProducts(buttonName)
  };

  return (
    <div>
      <Stack direction="row" spacing={4}>
        <Button
          color={activeButton === "Italian" ? "secondary" : "inherit"}
          onClick={() => handleActiveButton("Italian")}
        >
          Italian
        </Button>
        <Button
          color={activeButton === "Mexican" ? "secondary" : "inherit"}
          onClick={() => handleActiveButton("Mexican")}
        >
          Mexican
        </Button>
        <Button
          color={activeButton === "Indian" ? "secondary" : "inherit"}
          onClick={() => handleActiveButton("Indian")}
        >
          Indian
        </Button>
        <Button
          //   color="inherit"
          color={activeButton === "Chinese" ? "secondary" : "inherit"}
          onClick={() => handleActiveButton("Chinese")}
        >
          Chinese
        </Button>
      </Stack>
    </div>
  );
};

export default Navbar;
