// 모든 페이지에 같은 CSS 적용하기 위한 Styled-Components
import styled from 'styled-components';
export const CommonContainer = styled.div`
  // 768 미만, 768이상, 1024이상 화면에 따른 반응형
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
  @media screen and (min-width: 768px) {
    width: 60vw;
  }
  @media screen and (min-width: 1024px) {
    width: 50vw;
  }
`;
