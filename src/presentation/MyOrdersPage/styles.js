import styled from 'styled-components';

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: max(3%, 1rem) 5% 0 5%;
width: 100%;
max-height: 93vh;
min-height: 93%;
overflow: auto;
text-align: left;
.ant-form-item-label{
    text-align: left;
}
`;