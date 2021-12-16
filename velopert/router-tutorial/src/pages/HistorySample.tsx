import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface HistorySampleProps {
  history: string;
}

function HistorySample() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate(0);
  };

  useEffect(() => {
    console.log(navigate);
    return () => {
      // unblock();
    };
  }, [navigate]);

  return (
    <div>
      <button onClick={goBack}>go back</button>
      <button onClick={goHome}>go home</button>
    </div>
  );
}

export default HistorySample;
