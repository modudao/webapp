import React, { useState, useEffect } from 'react';
import { prepare, getResult } from 'klip-sdk';

import smile from '../assets/smile.png';
import './Faucet.css';

const Faucet = () => {
  const [isClaimed, setIsClaimed] = useState(false);
  const [userName, setUserName] = useState(false);

  return (
    <div className='faucet-body'>
      {!isClaimed ? (
        <div className='faucet-body-wrapper'>
          <div className='faucet-body-text'>닉네임을 입력하세요</div>
          <div className='faucet-body-text-sub'>모두다오에 오신걸 환영합니다! 닉네임 입력 후 KLAY를 받아가세요!</div>
          <div className='faucet-button-wrapper'>
            <input className='faucet-button-input' type='text' placeholder='1자 이상을 입력하세요'>
            </input>
            <button className='faucet-button'>
              <div className='faucet-button-text'>확인</div>
            </button>
          </div>
        </div>
      ) : (
        <div className='faucet-body-wrapper'>
          <div className='faucet-body-text-wrapper'>
            <div className='faucet-body-text'>{userName} 님,</div>
            <img className='modu-logo-image' style={{ width: 62, height: 62 }} src={smile} />
          </div>
          <div className='faucet-body-text'>만나서 반갑습니다!</div>
          <div className='faucet-category-wrapper'>
            <div className='faucet-category'>
              <div className='faucet-category-text'>DAPP</div>
            </div>
            <div className='faucet-category'>
              <div className='faucet-category-text'>SBT</div>
            </div>
            <div className='faucet-category'>
              <div className='faucet-category-text'>Governance</div>
            </div>
            <div className='faucet-category'>
              <div className='faucet-category-text'>Contract</div>
            </div>
          </div>
          <div className='faucet-body-text-sub'>맴버십 페이지에서 맴버쉽을 획득해보세요!</div>
        </div>
      )}
    </div>
  );
};

export default Faucet;
