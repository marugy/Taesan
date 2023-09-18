import React from 'react';
import logo from './logo.svg';

import { Router, Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/AuthPage/LoginPage';
import SingUpPage from 'pages/AuthPage/SignUpPage';
import BuyifPage from 'pages/BuyifPage/BuyifPage';
import BuyifCreatePage from 'pages/BuyifPage/BuyifCreatePage';
import ChallengePage from 'pages/ChallengePage/ChallengePage';
import ChallengeResultPage from 'pages/ChallengePage/ChallengeResultPage';
import ChallengeResultDetailPage from 'pages/ChallengePage/ChallengeResultDetailPage';
import ChallengeCreatePage from 'pages/ChallengePage/ChallengeCreatePage';
import ChallengePlayPage from 'pages/ChallengePage/ChallengePlayPage';
import ChallengeRecruitPage from 'pages/ChallengePage/ChallengeRecruitPage';
import HabitCreatePage from 'pages/HabitPage/HabitCreatePage';
import HabitPage from 'pages/HabitPage/HabitPage';
import HabitDetailPage from 'pages/HabitPage/HabitDetailPage';
import HistoryDetailPage from 'pages/HistoryPage/HistoryDetailPage';
import HistoryPage from 'pages/HistoryPage/HistoryPage';
import ReceiptPage from 'pages/HistoryPage/ReceiptPage';
import MainPage from 'pages/MainPage/MainPage';
import AssetRegisterPage from 'pages/MainPage/AssetRegisterPage';
import ChangeAccountPage from 'pages/MyPage/ChangeAccountPage';
import ChangePasswordPage from 'pages/MyPage/ChangePasswordPage';
import ChangePincodePage from 'pages/MyPage/ChangePincodePage';
import MyPage from 'pages/MyPage/MyPage';
import ProductInfoPage from 'pages/MyPage/ProductInfoPage';
import UserDeletePage from 'pages/MyPage/UserDeletePage';
import UserModifyPage from 'pages/MyPage/UserModifyPage';
import PatternPage from 'pages/PatternPage/PatternPage';
import PatternDetailPage from 'pages/PatternPage/PatternDetailPage';
import PayPage from 'pages/PayPage/PayPage';
import SavingPage from 'pages/SavingPage/SavingPage';
import SavingDetailPage from 'pages/SavingPage/SavingDetailPage';
import SavingCreatePage from 'pages/SavingPage/SavingCreatePage';
import SavingDeletePage from 'pages/SavingPage/SavingDeletePage';
import TestPage from 'pages/TestPage/TestPage';

import BottomNav from 'components/Common/BottomNav';
import { CommonContainer } from 'components/Common/CommonStyles';
import './App.css';
function App() {
  return (
    <div className="App">
      <CommonContainer>
        <Routes>
          <Route path="/" element={<TestPage />} />

          {/* 계정 관련 페이지 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SingUpPage />} />

          {/* 샀다치고 관련 페이지 */}
          <Route path="/buyif" element={<BuyifPage />} />
          <Route path="/buyif/create" element={<BuyifCreatePage />} />

          {/* 절약 챌린지 관련 페이지 */}
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/challenge/result" element={<ChallengeResultPage />} />
          <Route path="/challenge/result/detail" element={<ChallengeResultDetailPage />} />
          <Route path="/challenge/create" element={<ChallengeCreatePage />} />
          <Route path="/challenge/play" element={<ChallengePlayPage />} />
          <Route path="/challenge/recruit" element={<ChallengeRecruitPage />} />

          {/* 습관 저금 관련 페이지 */}
          <Route path="/habit" element={<HabitPage />} />
          <Route path="/habit/create" element={<HabitCreatePage />} />
          <Route path="/habit/detail" element={<HabitDetailPage />} />

          {/* 거래내역 관련 페이지 */}
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/history/detail" element={<HistoryDetailPage />} />
          <Route path="/history/receipt" element={<ReceiptPage />} />

          {/* 메인페이지 관련 페이지 */}
          <Route path="/main" element={<MainPage />} />
          <Route path="/main/asset/register" element={<AssetRegisterPage />} />

          {/* 마이페이지 관련 페이지 */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/account" element={<ChangeAccountPage />} />
          <Route path="/mypage/password" element={<ChangePasswordPage />} />
          <Route path="/mypage/pincode" element={<ChangePincodePage />} />
          <Route path="/mypage/product" element={<ProductInfoPage />} />
          <Route path="/mypage/userdelete" element={<UserDeletePage />} />
          <Route path="/mypage/usermodify" element={<UserModifyPage />} />

          {/* 소비 패턴 관련 페이지 */}
          <Route path="/pattern" element={<PatternPage />} />
          <Route path="/pattern/detail" element={<PatternDetailPage />} />

          {/* 결제 관련 페이지 */}
          <Route path="/pay" element={<PayPage />} />

          {/* 적금통 관련 페이지 */}
          <Route path="/saving" element={<SavingPage />} />
          <Route path="/saving/detail" element={<SavingDetailPage />} />
          <Route path="/saving/create" element={<SavingCreatePage />} />
          <Route path="/saving/delete" element={<SavingDeletePage />} />
        </Routes>
        <BottomNav />
      </CommonContainer>
    </div>
  );
}

export default App;
