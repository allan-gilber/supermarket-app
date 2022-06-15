import styled from 'styled-components';


export const MainContainer = styled.div`
  width: 100%;
  min-height: 350px;
  max-height: 500px;
  margin-top: 2rem;
  overflow-y: auto;
  overflow-x: none;
svg {
    margin-right: 0.5rem;
    cursor: pointer;
    
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

.input-qty-of-products{
  font-weight: 700;
  font-size: max(150%, 1.5rem);
  margin-left: 1rem;
  margin-bottom: 0;
  text-align: center;
  color: var(--success);
  height: 100%;
}

.buttom-disposition{
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 10%;
}
a{
  height: 100%;
}
`;