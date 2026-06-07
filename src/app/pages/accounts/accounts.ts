import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-accounts',
  imports: [NgFor],
  templateUrl: './accounts.html',
  styleUrl: './accounts.css'
})
export class Accounts {
  accounts = [
    {
      short: 'Z',
      broker: 'Zerodha',
      clientId: 'ACC001',
      name: 'Main Master Account',
      status: 'Connected',
      statusClass: 'connected',
      role: 'Master',
      roleClass: 'master',
      connection: 'WebSocket Active',
      session: 'Valid',
      sync: '2 sec ago'
    },
    {
      short: 'A',
      broker: 'AliceBlue',
      clientId: 'ACC002',
      name: 'Child Account 01',
      status: 'Connected',
      statusClass: 'connected',
      role: 'Child',
      roleClass: 'child',
      connection: 'API Active',
      session: 'Valid',
      sync: '8 sec ago'
    },
    {
      short: 'Z',
      broker: 'Zenam',
      clientId: 'ACC003',
      name: 'Child Account 02',
      status: 'Warning',
      statusClass: 'warning',
      role: 'Child',
      roleClass: 'child',
      connection: 'Token Expiring',
      session: 'Refresh Needed',
      sync: '1 min ago'
    },
    {
      short: 'Z',
      broker: 'Zerodha',
      clientId: 'ACC004',
      name: 'Child Account 03',
      status: 'Disconnected',
      statusClass: 'disconnected',
      role: 'Child',
      roleClass: 'child',
      connection: 'Reconnect Required',
      session: 'Expired',
      sync: '12 min ago'
    }
  ];
}