import React, { useState, useEffect } from "react";
const withLoader = (Component: React.Component) => {
  return (props: any) => {
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
};
export default withLoader;
