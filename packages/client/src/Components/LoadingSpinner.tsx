import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const LoadingSpinner = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Wait 150ms before showing the spinner to avoid flickering.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 150);
    return clearTimeout(timer)
  }, [])

  return (
  <Spinner display={isVisible ? 'inherit' : 'none'} viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="2"
    />
  </Spinner>
  )
};

const Spinner = styled.svg`
  animation: rotate 1s linear infinite;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
