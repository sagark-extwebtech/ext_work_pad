import { createContext, Dispatch, SetStateAction, useState } from "react";
import productData from "../utils/productData";

interface ProductContextProps {
  filteredData: any;
  setFilteredData: any;
  allData:any, 
  setAllData:any,
  handleFilterProducts: (album: any) => void;
}

export const ProductConext = createContext({} as ProductContextProps);

const ProductConextProvider = (props: any) => {
  const { children } = props;
  const [filteredData, setFilteredData] = useState<{}[]>([]);
  const [allData, setAllData] = useState<{}[]>(productData);

  const handleFilterProducts = (category="Italian") => {
    // const data = productData.filter((ele) => ele.category === category);
    const data = allData.filter((ele:any) => ele.category === category);

    setFilteredData(data);
  };

  const value = {
    filteredData,
    handleFilterProducts,
    setFilteredData,
    allData, 
    setAllData
  };

  return (
    <ProductConext.Provider value={value}>{children}</ProductConext.Provider>
  );
};

export default ProductConextProvider;
