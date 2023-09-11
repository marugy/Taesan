import React from 'react';
import MainAssetInfo from 'components/Main/MainAssettInfo';
import MainMenu from 'components/Main/MainMenu';
import MainAssetRegister from 'components/Main/MainAssetRegister';
import MainCardInfo from 'components/Main/MainCardInfo';
import { GridContainer } from './MainPageStyles';
const MainPage = () => {
  return (
    <div>
      <GridContainer>
        <MainAssetRegister />
        <MainAssetInfo />
        <MainMenu />
        <MainCardInfo />
      </GridContainer>
    </div>
  );
};

export default MainPage;
