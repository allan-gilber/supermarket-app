import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 4px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  #root {
    width: max(100vw, 360px);
    height: max(100vh, 640px);
    overflow: hidden;
    background:var(--background-white);
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
	--error: #DA1E28;
	--success: #24A148;
    --warning: 'red';
    --btn-text: 'black';
    --label: #393939;
    --white:  #E6E6E6;
    --menu-text: #828282;
    --red-text: #EA1D2C;
    --shadow-box: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    --success-color: #52c41a;
    --warning-color: #faad14;
    --primary-color: #5e81d1;
    --secondary-color: #f16b44;
    --background-white: #E6E6E6;
    --background-light-orange: #ff8d27;
}
`;