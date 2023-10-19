import OHLCChart from '@/component/OhlcChart/OhlcChart'
import React from 'react'

interface OHLCData {
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number;
  }

const ohlcData: OHLCData[] = [
    {
      date: new Date('2023-10-01'),
      open: 100,
      high: 110,
      low: 95,
      close: 105,
    },
    {
      date: new Date('2023-10-02'),
      open: 105,
      high: 115,
      low: 100,
      close: 110,
    },
    {
      date: new Date('2023-10-03'),
      open: 110,
      high: 120,
      low: 105,
      close: 115,
    },
    {
      date: new Date('2023-10-04'),
      open: 115,
      high: 125,
      low: 110,
      close: 120,
    },
    {
      date: new Date('2023-10-05'),
      open: 120,
      high: 130,
      low: 115,
      close: 125,
    },
    // Add more data points as needed
  ];

function OHLC() {
  return (
    <div style={{height:'100vh'}}>
      <OHLCChart data={ohlcData} height={500} width={500}/>
    </div>
  )
}

export default OHLC
