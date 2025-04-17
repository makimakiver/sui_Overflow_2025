import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {WalletProvider} from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';
import './index.css'
import { Flex, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import App from './App'
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletProvider>
      <Theme>
        <Topbar/>
        <Flex justify='between' style={{ height: '100vh'}}>
          <div style={{flex:'0.5'}}>
            <Sidebar/>
          </div>
          <div style={{flex:'11.5', width: "4vw"}}>
            <App />
          </div>
        </Flex>
      </Theme>
    </WalletProvider>
  </StrictMode>,
)
