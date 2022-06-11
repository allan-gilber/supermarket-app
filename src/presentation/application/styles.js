import styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    /* body{
        margin: 0 auto;
        padding: 0px 0px;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    } */

    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  :root {
     /* Transições de viewport */
    --phone: 37.5rem;
    --tablet: 37.51rem;
    --landTablet: 48.1rem;
    --desktop: 62rem;
    --widescreen: 87.5rem;
    /* Cores */
    --primary: 'green';
	--details: 'yellow';
    --secondary: 'brown';
    --disabled: 'gray';
    // --error: ${({settings}) => settings?.colors.error} : "#DA1E28";
	--error: #DA1E28;
    /* --success: ${({settings}) => settings?.colors.success}; */
	--success: #24A148;
    --warning: 'red';
    --btn-text: 'black';
    --label: #393939;
    --white:  #E6E6E6;
    --background-white: #ffffff;
    --menu-text: #828282;
    --red-text: #EA1D2C;
    --shadow-box: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    --success-color: #52c41a;
    --warning-color: #faad14;
    --primary-color: #1890ff;
  }
`;