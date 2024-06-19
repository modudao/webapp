import React, { useState, useEffect } from 'react';
import { prepare, getResult } from 'klip-sdk';
import './Faucet.css';

const Faucet = () => {
  return (
    <div className='faucet-body'>
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
    </div>
  );
};

export default Faucet;
