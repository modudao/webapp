import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import Modal from 'react-modal';

import { prepare, request, getResult } from 'klip-sdk';

import nft0 from '../assets/nft0.png';
import './Membership.css';

function Membership() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [qrValue, setQrValue] = useState('');
  const [isMembership, setIsMembership] = useState(false);

  const nftAddress = "0xb065C2E339Ec555aA03EA5695939708673A9bb15";
  const mintAbi = '{"constant":false,"inputs":[],"name":"mint","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}';

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const mintNFT = async () => {
    const bappName = 'MODULAB DAPP';

    // Step 1: Prepare the contract action
    const transaction = {
      bappName,
      to: nftAddress,
      abi: mintAbi,
      value: '1' + '0'.repeat(18),
      params: '[]',
      from: localStorage.getItem('klipAddress'),
    };

    // Step 2: Request the contract action through Klip
    const { request_key } = await prepare.executeContract(transaction);
    // const res = await axios.post(A2P_API_PREPARE_URL, {
    //   bapp: { name: bappName, },
    //   transaction,
    //   type: "execute_contract",
    // })
    // const { request_key } = res.data;

    const userAgent = navigator.userAgent;
    if (/Windows/i.test(userAgent) || /Macintosh/i.test(userAgent)) {
      const qrURL = `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
      // window.open(qrURL, '_blank');
      setQrValue(qrURL);

      openModal();
    } else {
      request(request_key);
    }
  
    // Step 3: Poll for the result
    // const interval = setInterval(() => {
    //   getResult(request_key, (result) => {
    //     if (result.err) {
    //       console.error(result.err);
    //       clearInterval(interval);
    //       return;
    //     }
    //     if (result.result) {
    //       clearInterval(interval);
    //     }
    //   });
    // }, 1000);
  };

  return (
    <div className='membership-body'>
      {!isMembership ? (
        <div className='membership-body-wrapper'>
          <div className='membership-body-text'>맴버십을 구매하세요</div>
          <img className='modu-nft-image' style={{ width: 259, height: 259 }} src={nft0} />
          <div className='membership-body-text-sub'>2024 다오랩 2기 마무리를 기념하기 위한 NFT 카드입니다. 이 NFT는 양도가 불가능한 SBT입니다.</div>
          <div className='membership-body-text-sub2'>*가격: 10 KLAY</div>
          <button className='membership-button' onClick={mintNFT}>
            <div className='faucet-button-text'>구매</div>
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="modal-content" 
            overlayClassName="modal-overlay"
            contentLabel="QR Code Modal"
          >
            <div className='membership-body-text'>QR 코드를 스캔하세요</div>
            <QRCode value={qrValue} size={256} />
          </Modal>
        </div>
      ) : (
        <div className='membership-body-wrapper'>
          <div className='membership-body-text'>맴버가 되신걸 환영합니다</div>
          <div className='membership-body-text-sub-success'>총 24명의 맴버가 함께하고 있습니다! 거버넌스 페이지에서 투표를 진행해보세요!</div>
          <div className='membership-member-body'>
            {/*  */}
            <div className='membership-member-wrapper'>
              <img className='modu-nft-image' style={{ width: 111, height: 111 }} src={nft0} />
              <div className='membership-nft-text'>MG12 님</div>
            </div>
            <div className='membership-member-wrapper'>
              <img className='modu-nft-image' style={{ width: 111, height: 111 }} src={nft0} />
              <div className='membership-nft-text'>MG12 님</div>
            </div>
            <div className='membership-member-wrapper'>
              <img className='modu-nft-image' style={{ width: 111, height: 111 }} src={nft0} />
              <div className='membership-nft-text'>MG12 님</div>
            </div>
            <div className='membership-member-wrapper'>
              <img className='modu-nft-image' style={{ width: 111, height: 111 }} src={nft0} />
              <div className='membership-nft-text'>MG12 님</div>
            </div>
            {/*  */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Membership;
