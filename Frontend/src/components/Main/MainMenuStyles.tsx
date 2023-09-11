import styled from 'styled-components';
export const GridMainButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* 모든 컨텐츠를 하나의 컬럼에 배치 */
  grid-template-rows: 1fr 1fr; /* 세로 비율을 3:2:3으로 조정 */
  //   gap: 16px; /* 각 그리드 아이템 사이의 간격 (선택 사항) */
  height: 100%; /* 그리드 컨테이너를 화면 높이로 설정 (선택 사항) */
  width: 50vh;
`;
