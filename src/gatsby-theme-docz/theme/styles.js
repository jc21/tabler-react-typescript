// src/gatsby-theme-docz/theme/styles.js

import styles from "gatsby-theme-docz/src/theme/styles";

styles.root.fontFamily =
	'"Inter", -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif';
styles.root.fontSize = "0.875rem";
styles.code.fontSize = styles.root.fontSize;

styles.root['div[data-testid="props"]'] = {
	fontSize: styles.root.fontSize,
};

styles.root['div[data-testid="prop-description"]'] = {
	fontSize: styles.root.fontSize,
};

styles.root['div[data-testid="live-editor"]'] = {
	fontSize: styles.root.fontSize,
};

styles.root['div[data-testid="main-container"]'] = {
	"> h2": {
		marginTop: "40px",
	},
};

styles.root['div[data-testid="live-preview"]'] = {
	backgroundColor: "#f2f2f2",
};

// Changes for Tabler specifically for documentation
styles.root[".dropdown-menu.demo"] = {
	display: "inline-block",
	width: "200px",
	position: "relative",
	top: 0,
	marginBottom: "1rem",
};

export default styles;
