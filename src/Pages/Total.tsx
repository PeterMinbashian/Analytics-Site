import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { AppShell } from '@mantine/core';
import BarChart from "../Components/BarChart";
import Header from '../Components/Header'

function Total() {
  const [data, setData] = useState([
    { x: "006", y: 510 },
    { x: "007", y: 409 },
    { x: "008", y: 453 },
    { x: "009", y: 396 },
    { x: "010", y: 528 },
  ]);

  return (
    <>
      <AppShell>
        <Header></Header>
        <BarChart series={{ data: data }}/>
      </AppShell>
    </>
  );
}

export default Total;
