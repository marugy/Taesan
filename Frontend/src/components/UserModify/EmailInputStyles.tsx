import styled from 'styled-components';

export const MailTipLi = styled.li<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#f5f5f5' : '')};
  color: ${({ selected }) => (selected ? 'var(--zu--m4-color)' : '')};
`;

export const MailTipUl = styled.ul`
  border: white;
  list-style: none;
  width: 20vw;
`;
