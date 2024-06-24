import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


import daolabnft1 from '../assets/daolabnft1.png';
import daolabnft2 from '../assets/daolabnft2.png';
import daolabnft3 from '../assets/daolabnft3.png';
import daolabnft4 from '../assets/daolabnft4.png';
import './Governanace.css';

function Governanace() {
  const [selectedImage, setSelectedImage] = useState('사진1');
  const [isSelectedGovernance1, setIsSelectedGovernance1] = useState(true);
  const [hasVotedGovernance1, setHasVotedGovernance1] = useState(false);
  const [hasVotedGovernance2, setHasVotedGovernance2] = useState(false);

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  useEffect(() => {
    setSelectedImage(selectedImage);
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedImage(value);
  };

  const handleGovernance1Click = () => {
    setIsSelectedGovernance1(true);
  };

  const handleGovernance2Click = () => {
    setIsSelectedGovernance1(false);
  };

  const data = {
    labels: ['사진1', '사진2', '사진3', '사진4'],
    datasets: [
      {
        data: [3, 10, 7, 1],
        backgroundColor: ['blue', 'green', 'orange', 'red'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false, position: 'top', },
      title: { display: true, text: '거버넌스1 투표 결과', },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className='gov-body'>
      <div className='gov-wrapper'>
        <div className='gov-title'>거버넌스를 참여하세요</div>
        {isSelectedGovernance1 ? (
          <div>
            <div className='gov-select-wrapper'>
              <button className='gov-select-button1' onClick={handleGovernance1Click}>
                <div className='gov-select-text'>거버넌스1</div>
              </button>
              <button className='gov-select-button2' onClick={handleGovernance2Click}>
                <div className='gov-select-text2'>거버넌스2</div>
              </button>
            </div>
            {!hasVotedGovernance1 ? (
              <div className='voted-wrapper'>
                <div className='gov-title-sub'>맴버십 사진을 선택해주세요</div>
                <div className='gov-title-sub2'>투표가 모두 완료되는 순간 클립 지갑에 있는 맴버십 사진이 변경됩니다!</div>
                <div className='gov-image-wrapper'>
                  <div className='gov-image-wrapper-sub'>
                    <img className='gov-image' style={{ width: 143, height: 143 }} src={daolabnft1} />
                    <div className='gov-image-text'>사진1</div>
                  </div>
                  <div className='gov-image-wrapper-sub'>
                    <img className='gov-image' style={{ width: 143, height: 143 }} src={daolabnft2} />
                    <div className='gov-image-text'>사진2</div>
                  </div>
                </div>
                <div className='gov-image-wrapper'>
                  <div className='gov-image-wrapper-sub'>
                    <img className='gov-image' style={{ width: 143, height: 143 }} src={daolabnft3} />
                    <div className='gov-image-text'>사진3</div>
                  </div>
                  <div className='gov-image-wrapper-sub'>
                    <img className='gov-image' style={{ width: 143, height: 143 }} src={daolabnft4} />
                    <div className='gov-image-text'>사진4</div>
                  </div>
                </div>
                <div className='gov-image-select-wrapper'>
                  <select className='gov-image-select' value={selectedImage} onChange={handleChange}>
                    <option value='사진1'>사진1</option>
                    <option value='사진2'>사진2</option>
                    <option value='사진3'>사진3</option>
                    <option value='사진4'>사진4</option>
                  </select>
                  <button className='gov-image-select-button'>
                    <div className='gov-image-select-text'>투표</div>
                  </button>
                </div>
              </div>
            ) : (
              <div className='voted-wrapper'>
                <div className='gov-title-sub'>투표가 완료되었습니다. 사진1 으로 결정되었습니다.</div>
                <div className='gov-title-sub2'>클립 지갑에서 다오랩 맴버쉽 NFT 사진이 바뀌었는지 확인해보세요!</div>
                <div className='gov-title-sub3'>*투표율: 92%</div>
                <div style={{ width: '293px', height: '293px' }}>
                  <Bar data={data} options={options} />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className='gov-select-wrapper'>
              <button className='gov-select-button2' onClick={handleGovernance1Click}>
                <div className='gov-select-text'>거버넌스1</div>
              </button>
              <button className='gov-select-button1' onClick={handleGovernance2Click}>
                <div className='gov-select-text2'>거버넌스2</div>
              </button>
            </div>
            {!hasVotedGovernance2 ? (
              <div className='voted-wrapper'>
                <div className='gov-title-sub'>트레져리 물량을 분배해드립니다</div>
                <div className='gov-title-sub2'>참여 안하신분들은 맴버쉽 구매에 사용하셨던 KLAY 그대로 돌려드립니다! <br /> <span style={{ fontWeight: 'bold' }}>참여한 사람 기준으로 컨트렉트 내에서 랜덤한 한명을 선택</span> 후 남은 KLAY 를 전송해드립니다! 랜덤한 사람을 추출하는 방식은 코드에 반영되어있어, 매우 투명하게 진행될꺼에요! </div>
                <div className='gov-title-sub3'>*트레져리 물량: 3,000 KLAY</div>
                <button className='gov-apply-button'>
                  <div className='gov-image-select-text'>참여</div>
                </button>
              </div>
            ) : (
              <div className='voted-wrapper'>
                <div className='gov-title-sub'>MG12님, 우승 축하드립니다</div>
                <div className='gov-title-sub2'>받기 버튼을 눌러 100 KLAY 를 받아가세요!</div>
                <div className='gov-title-sub3'>*참여율: 92%</div>
                <button className='gov-apply-button'>
                  <div className='gov-image-select-text'>받기</div>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Governanace;
