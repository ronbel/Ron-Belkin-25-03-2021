import React from 'react';
import Loader from 'react-loader-spinner';


export default function DefaultSpinner(props){

    return <Loader
    type="Puff"
    color="#6c3e93"
    width={100}
    height={100}
    {...props}
  />
}