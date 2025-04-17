import { Flex, Heading, Text, TextField } from '@radix-ui/themes'
import { ConnectButton } from '@suiet/wallet-kit'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useState } from 'react';
import DecryptedText from './DecryptedText';

function Topbar() {
      // Handle key down events on the input element
    const [searchTerm, setSearchTerm] = useState('');
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
        // When the user presses Enter, log or process the searchTerm
        console.log('User pressed Enter, search term is:', searchTerm);
        // You could call an API, update state, or navigate with the search value, for example:
        }
    };
  return (
    <div style={{ width: "100vw", position: "fixed", zIndex: 10, backgroundColor: "white"}}>
    <Flex justify="between" direction="row" style={{ height: '60px', padding: '0 20px', alignItems: 'center'}}>
        <Heading style={{ display: 'flex', alignItems: 'center', justifyContent:"space-between" ,fontSize: '36px', fontWeight: 'bold' }}>
          <DecryptedText text="Sumi"/>
        </Heading>
        <TextField.Root placeholder="Search" style={{ width: '300px', marginLeft: '20px' }} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={(e) => handleKeyDown(e)}>
            <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
        </TextField.Root>
        <ConnectButton style={{zIndex: 20, outline: "none"}}/>
    </Flex>
    </div>
  )
}

export default Topbar
