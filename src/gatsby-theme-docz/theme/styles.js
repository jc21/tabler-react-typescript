// src/gatsby-theme-docz/theme/styles.js

import styles from "gatsby-theme-docz/src/theme/styles";

styles.root.fontFamily = '"Inter", -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif';
styles.root.fontSize = "0.875rem";
styles.code.fontSize = styles.root.fontSize;

styles.root["div[data-testid=\"props\"]"] = {
	fontSize: styles.root.fontSize,
};

styles.root["div[data-testid=\"prop-description\"]"] = {
	fontSize: styles.root.fontSize,
};

styles.root["div[data-testid=\"live-editor\"]"] = {
	fontSize: styles.root.fontSize,
};

export default styles;
