import styled from 'styled-components';

export const StyledBottomNav = styled.div`
  position: fixed; // Fix position
  bottom: 0; // At the bottom
  left: 50%; // Center horizontally
  transform: translate(-50%, 0); // Adjust for true center
  z-index: 1000; // Make it appear above other elements if necessary
`;
