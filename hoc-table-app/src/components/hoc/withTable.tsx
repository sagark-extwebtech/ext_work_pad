import React, { useEffect, useState } from "react";

const withTable = (WrappedComponent: React.ComponentType, tableData: any) => {
  const NewComponent = (props: any) => {
    const keys = Object.keys(tableData[0]);

    return <WrappedComponent {...props} tableData={tableData} keys={keys} />;
  };

  return NewComponent;
};

export default withTable;
