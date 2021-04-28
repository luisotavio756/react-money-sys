import styled from 'styled-components';

export const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: 22px;
    line-height: 36px;
  }

  button {
    background: transparent;
    color: #333;
    border: none;

    svg {
      font-size: 22px;
    }
  }
`;
