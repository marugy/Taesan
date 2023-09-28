import React from 'react';
import { useNavigate} from 'react-router-dom';
import BottomNav from './BottomNav';
const NotFound: React.FC = () => {
    const navigate = useNavigate();
  return (
    <section className="page_404 bg-white flex flex-col items-center justify-center h-screen font-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg"
                style={{
                  backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
                  height: '400px',
                  backgroundPosition: 'center',
                }}
              >
                <h1 className="text-center text-5xl text-black font-medium">404</h1>
              </div>
              <div className="contant_box_404 mt-[-50px]">
                <h3 className="text-xl dt:text-4xl">접근할 수 없는 페이지입니다.</h3>
                <p>The page you are looking for is not available!</p>
                <div className="link_404 inline-block bg-sub text-white py-2 px-4 mt-5" onClick={()=>{
                    navigate('/main')
                }}>홈으로 가기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
