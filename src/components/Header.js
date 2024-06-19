import React, { useState, useEffect } from 'react';
import { prepare, getResult } from 'klip-sdk';
import './Header.css';

const Header = () => {
  const [address, setAddress] = useState(null);
  const [shortedAddress, setShortedAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // 컴포넌트 로드 시 로컬 스토리지에서 주소를 읽어 상태를 복원
    const storedAddress = localStorage.getItem('klipAddress');
    if (storedAddress) {
      setAddress(storedAddress);
      setShortedAddress(storedAddress.slice(0, 4) + '...' + storedAddress.slice(-2));
      setIsConnected(true);
    }
  }, []);

  const connectToKlip = async () => {
    const bappName = 'MODULAB DAPP';
    const res = await prepare.auth({ bappName });

    if (res.request_key) {
      const qrURL = `https://klipwallet.com/?target=/a2a?request_key=${res.request_key}`;
      window.open(qrURL, '_blank');

      let intervalId = setInterval(async () => {
        const result = await getResult(res.request_key);
        if (result.status === 'completed') {
          const walletAddress = result.result.klaytn_address;
          setAddress(walletAddress);
          setShortedAddress(walletAddress.slice(0, 4) + '...' + walletAddress.slice(-2));
          setIsConnected(true);
          // store local storage
          localStorage.setItem('klipAddress', walletAddress);
          clearInterval(intervalId);
        }
      }, 1000);
    }
  };

  return (
    <div className='modu-header'>
      <div className='modu-logo-wrapper'>
        <img className='modu-logo-image' style={{ width: 32, height: 32 }} src="./imgs/logo.png" />
        <div className='modu-logo-text'>MODUDAO</div>
      </div>
      <div className='modu-menu-wrapper'>
        <div className='modu-menu-text-wrapper'>
          <div className='modu-logo-text1'>맴버쉽</div>
          <div className='modu-logo-text2'>투표</div>
        </div>
        <div className='modu-menu-button-wrapper'>

          {isConnected ? (
            <button className='modu-menu-wallet-success'>
              <div className='modu-wallet-text'>{shortedAddress}</div>
            </button>
          ) : (
            <button className='modu-menu-wallet' onClick={connectToKlip}>
              <div className='modu-wallet-text'>지갑 연결</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
