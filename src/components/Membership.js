import React, { useState, useEffect } from 'react';

import nft0 from '../assets/nft0.png';
import './Membership.css';

function Membership() {
  const [isMembership, setIsMembership] = useState(false);

  return (
    <div className='membership-body'>
      {!isMembership ? (
        <div className='membership-body-wrapper'>
          <div className='membership-body-text'>맴버십을 구매하세요</div>
          <img className='modu-nft-image' style={{ width: 259, height: 259 }} src={nft0} />
          <div className='membership-body-text-sub'>2024 다오랩 2기 마무리를 기념하기 위한 NFT 카드입니다. 해당 NFT는 전송이 불가능한 SBT 입니다.</div>
          <div className='membership-body-text-sub2'>*가격: 100 KLAY</div>
          <button className='membership-button'>
            <div className='faucet-button-text'>구매</div>
          </button>
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
