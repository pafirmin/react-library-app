import React from "react";
import Loader from "react-loader-spinner";

const LoadingIndicator = (props) => {
  const { loading } = props;

  return (
    loading && (
      <div
        style={{
          width: "100%",
          height: "100",
          position: "absolute",
          top: "40%",
        }}
      >
        <Loader type="BallTriangle" color="#fff" height="40" width="40" />
      </div>
    )
  );
};

export default LoadingIndicator;
