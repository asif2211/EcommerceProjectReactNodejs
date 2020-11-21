import React, { Component } from 'react';
import { usePromiseTracker } from "react-promise-tracker";

export const LoadingSpinerComponent = (props) => {
const { promiseInProgress } = usePromiseTracker();

  return (
    <div>
    {
     (promiseInProgress === true) ?
        <h3>Hey I'm a spinner loader wannabe !!!</h3>
      :
        null
    }
  </div>
  )
};