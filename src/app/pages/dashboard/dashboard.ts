import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  stats = [
    {
      label: 'Total Accounts',
      value: '12',
      info: 'All broker accounts'
    },
    {
      label: 'Open Positions',
      value: '09',
      info: 'Live copied trades'
    },
    {
      label: 'Available Margin',
      value: '₹4.8L',
      info: 'Across all accounts'
    },
    {
      label: 'Today PNL',
      value: '+₹12.5K',
      info: 'Real-time profit'
    }
  ];

  accountSummary = [
    {
      pseudo: '768687',
      trading: '768687',
      m2m: '₹0.00',
      pnl: '+₹0.00',
      pnlClass: 'profit',
      atPnl: '₹0.00',
      total: 4,
      open: 2,
      closed: 2,
      marginTotal: '₹1,20,000',
      utilized: '₹35,000',
      available: '₹85,000',
      orderTotal: 8,
      orderOpen: 2,
      pending: 1,
      complete: 5
    },
    {
      pseudo: 'MRX671',
      trading: 'MRX671',
      m2m: '₹1,250',
      pnl: '+₹1,250',
      pnlClass: 'profit',
      atPnl: '₹1,250',
      total: 6,
      open: 4,
      closed: 2,
      marginTotal: '₹2,40,000',
      utilized: '₹82,000',
      available: '₹1,58,000',
      orderTotal: 14,
      orderOpen: 4,
      pending: 0,
      complete: 10
    },
    {
      pseudo: 'ACC003',
      trading: 'Zenam',
      m2m: '-₹420',
      pnl: '-₹420',
      pnlClass: 'loss',
      atPnl: '-₹420',
      total: 2,
      open: 1,
      closed: 1,
      marginTotal: '₹90,000',
      utilized: '₹41,000',
      available: '₹49,000',
      orderTotal: 5,
      orderOpen: 1,
      pending: 1,
      complete: 3
    }
  ];

  symbolSummary = [
    {
      symbol: 'NIFTY 24500 CE',
      buyQty: 50,
      sellQty: 0,
      netQty: 50,
      m2m: '₹1,250',
      pnl: '+₹1,250',
      pnlClass: 'profit',
      buyAvg: '₹125.40',
      sellAvg: '-',
      holdingQty: 0,
      value: '₹6,270',
      totalQty: 50,
      status: 'Live',
      statusClass: 'live',
      broker: 'Zerodha'
    },
    {
      symbol: 'BANKNIFTY 52000 PE',
      buyQty: 0,
      sellQty: 30,
      netQty: -30,
      m2m: '-₹420',
      pnl: '-₹420',
      pnlClass: 'loss',
      buyAvg: '-',
      sellAvg: '₹210.10',
      holdingQty: 0,
      value: '₹6,303',
      totalQty: 30,
      status: 'Warning',
      statusClass: 'warning',
      broker: 'Zenam'
    },
    {
      symbol: 'RELIANCE',
      buyQty: 10,
      sellQty: 0,
      netQty: 10,
      m2m: '₹680',
      pnl: '+₹680',
      pnlClass: 'profit',
      buyAvg: '₹2,842',
      sellAvg: '-',
      holdingQty: 25,
      value: '₹71,050',
      totalQty: 35,
      status: 'Live',
      statusClass: 'live',
      broker: 'AliceBlue'
    }
  ];
}