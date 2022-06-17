import styled from 'styled-components';

export const ButtomDisposition = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 10%;
p{
  height: 100%;
  margin: 0;
}
svg {
    margin-right: 0.5rem;
    cursor: pointer;
}

.input-qty-of-products{
  font-weight: 700;
  font-size: max(150%, 1.5rem);
  margin-left: 1rem;
  margin-bottom: 0;
  text-align: center;
  color: var(--success);
  height: 100%;
}
.svg-icons{
  :hover{
    filter: brightness(1);
  }
  :active {
    transform: translateY(2px);
    animation-delay: 500000;
  }
}
`;