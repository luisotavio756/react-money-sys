import styled from 'styled-components';
import { darken, transparentize } from 'polished';

interface IRadioBoxProps {
  isActive: boolean;
  activeColor: 'red' | 'green';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d',
};

export const Container = styled.form`
  margin-top: 2rem;

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    background: #e7e9ee;
    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;
    outline: none;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    color: #fff;
    background: var(--green);
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    outline: none;
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0.5rem;
`;

export const RadioBox = styled.button<IRadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) => (props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent')};
  outline: none;
  transition: border-color 0.2s;

  img {
    margin-right: 0.25rem;
    height: 20px;
    width: 20px;
  }

  span {
    font-size: 1rem;
    color: var(--text-title);
  }

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')}
  }

`;
