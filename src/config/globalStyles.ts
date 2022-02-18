import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
	padding: 0;
	box-sizing: border-box;
	list-style: none;
	text-decoration: none;
	border: none;
	outline: none;
	font: inherit;
  font-size: 18px;
	font-family: 'Roboto', sans-serif;
	vertical-align: baseline;
}



article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, div, button {
	display: block;
}

ol, ul {
	list-style: none;
}

a {
	font-weight: 600;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

a:visited {
        color: none;
				
}

`
