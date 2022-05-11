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

body {
	margin: auto;
	max-width: 1920px;
}



article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, div, button {
	display: block;
}

ol, ul {
	list-style: none;
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

a {
	font-weight: 600;
	color: ${({ theme }) => theme.colors.secondary};
	&:visited {
		color: ${({ theme }) => theme.colors.secondary};
		
	}
}


h1 { font-size:${({ theme }) => theme.fonts.h1};
color: ${({ theme }) => theme.colors.primary};
font-weight: bold;}
h2 { font-size:${({ theme }) => theme.fonts.h2};
color: ${({ theme }) => theme.colors.primary};
font-weight: bold;}
h3 { font-size:${({ theme }) => theme.fonts.h3};
color: ${({ theme }) => theme.colors.primary};
font-weight: bold;}
h4 { font-size:${({ theme }) => theme.fonts.h4};
color: ${({ theme }) => theme.colors.primary};
font-weight: bold;}
h5 { font-size:${({ theme }) => theme.fonts.h5};
color: ${({ theme }) => theme.colors.primary};
font-weight: bold;}
h6 { font-size:${({ theme }) => theme.fonts.h6};
color: ${({ theme }) => theme.colors.primary};
font-weight: bold;}

p {
	color: ${({ theme }) => theme.colors.primary};
	font-size:${({ theme }) => theme.fonts.txt};
	line-height: 160%;
	
	@media (max-width: 800px) {
		font-size:${({ theme }) => theme.fonts.txtsm};
	}
}
`
