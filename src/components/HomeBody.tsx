import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './HomeBody.css'
import { ConnectButton, useWallet } from '@suiet/wallet-kit'
import { TransactionBlock } from '@mysten/sui.js/transactions'
import { Box, Card, Container, Theme } from '@radix-ui/themes'
function HomeBody() {
  const [count, setCount] = useState(0)
  const wallet = useWallet()
  async function handleSignAndExecuteTxBlock() {
    if (!wallet.connected) return
    // define a programmable transaction
    const tx = new TransactionBlock();
    const packageObjectId = "0x475b76dc5c030b44b57dac1f91b332de6f67a0ee089a6bd662fcffc0c89f0e22";
    tx.moveCall({
      target: `${packageObjectId}::count::increment`,
      arguments: [tx.pure("0x15f51948b6ad3fe8975d720db2209f7cb5dee874a502117f6eadd6bec03b5d06")],
    });

    try {
      // execute the programmable transaction
      const resData = await wallet.signAndExecuteTransactionBlock({
        transactionBlock: tx
      });
      const url = 'https://fullnode.testnet.sui.io:443';
      const count_ref = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "sui_getTransactionBlock",
          params: [
            resData.digest,
            {
              showInput: false,
              showRawInput: false,
              showEffects: false,
              showEvents: true,
              showObjectChanges: false,
              showBalanceChanges: false,
              showRawEffects: false,
            }
          ]
        })
      });
      const countData = await count_ref.json();
      console.log('nft minted successfully!', countData);
      console.log('current count: ', countData.result.events[0].parsedJson.count);
      setCount(countData.result.events[0].parsedJson.count);
    } catch (e) {
      console.error('nft mint failed', e);
    }
  }

  return (
    <>
      <Card size="3" style={{ padding: "var(--space-4)", margin: '20px',display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1 }}>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => handleSignAndExecuteTxBlock()}>
            click to increase count
          </button>
          <text>
            count is {count}
          </text>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Card>
    </>
  )
}

export default HomeBody