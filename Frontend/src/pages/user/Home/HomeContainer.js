import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
export default () => {
  const horses = [
    {
      name: '금빛질주',
      age: 10
    },
    {
      name: '마이리더',
      age: 10
    },
    {
      name: '금빛질주',
      age: 10
    }
  ]
  return (
    <HomePresenter horses={horses}/>
  );
}