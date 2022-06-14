import styled from 'styled-components';


export const MainContainer = styled.div`
.list-of-products {
    min-height: 350px;
    margin-top: 2rem;
  }
svg{
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

.buttom-disposition{
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 10%;
}
p{
  font-weight: 700;
  font-size: 150%;
  margin-left: 1rem;
  margin-bottom: 0;
  text-align: center;
  color: var(--success);
}
a{
  height: 100%;
}
`;