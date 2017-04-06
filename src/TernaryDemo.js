import React from 'react';

export default function TernaryDemo(props) {
  return (
    <div>
      {props.data ? props.data : 'No data found!'}
    </div>
  )
}