import { createGlobalStyle } from "styled-components";

/**
 * Note: This is CSS, not SCSS
 *
 * You can use theme variables like this:
 *   background: ${({ theme }) => theme.body};
 */

export const TablerStyles = createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
	:root {
		--tblr-blue: #206bc4;
		--tblr-azure: #4299e1;
		--tblr-indigo: #4263eb;
		--tblr-purple: #ae3ec9;
		--tblr-pink: #d6336c;
		--tblr-red: #d63939;
		--tblr-orange: #f76707;
		--tblr-yellow: #f59f00;
		--tblr-lime: #74b816;
		--tblr-green: #2fb344;
		--tblr-teal: #0ca678;
		--tblr-cyan: #17a2b8;
		--tblr-primary: #206bc4;
		--tblr-secondary: #656d77;
		--tblr-success: #2fb344;
		--tblr-info: #4299e1;
		--tblr-warning: #f76707;
		--tblr-danger: #d63939;
		--tblr-light: #f4f6fa;
		--tblr-dark: #232e3c;
		--tblr-font-sans-serif: "Inter", -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
		--tblr-font-monospace: null, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
		--tblr-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
		}

	*, *::before, *::after {
		box-sizing: border-box;
	}

	@media (prefers-reduced-motion: no-preference) {
		:root {
			scroll-behavior: smooth;
		}
	}

	html {
		font-size: 16px;
		scroll-behavior: smooth;
		height: 100%;
	}

	body {
		margin: 0;
		font-family: var(--tblr-font-sans-serif);
		font-size: 0.875rem;
		font-weight: 400;
		line-height: 1.4285714;
		color: ${({ theme }) => theme.body.color};
		background-color: ${({ theme }) => theme.body.background};
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		overflow-y: scroll;
		letter-spacing: 0;
		touch-action: manipulation;
		text-rendering: optimizeLegibility;
		font-feature-settings: "liga" 0;
		position: relative;
		min-height: 100%;
	}

	body .content *::-webkit-scrollbar {
		width: 6px;
		height: 6px;
		-webkit-transition: .3s background;
		transition: .3s background;
	}

	body .content *::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background: ${({ theme }) => theme.scrollbar.thumb};
	}

	body .content *::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.scrollbar.track};
	}

	body .content *::-webkit-scrollbar-corner {
		background: transparent;
	}

	body .content *:hover::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.scrollbar.hoverThumb};
	}

	@media print {
		body {
			background: transparent;
		}
	}

	hr, .hr {
		margin: 2rem 0;
		color: inherit;
		background-color: currentColor;
		border: 0;
		opacity: 0.16;
	}

	hr:not([size]), .hr:not([size]) {
		height: 1px;
	}

	h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
		margin-top: 0;
		margin-bottom: 0.5rem;
		font-weight: 500;
		line-height: 1.2;
	}

	h1, .h1 {
		font-size: calc(1.275rem + 0.3vw);
	}

	@media (min-width: 1200px) {
		h1, .h1 {
			font-size: 1.5rem;
		}
	}

	h2, .h2 {
		font-size: 1.125rem;
	}

	h3, .h3 {
		font-size: 1rem;
	}

	h4, .h4 {
		font-size: 0.875rem;
	}

	h5, .h5 {
		font-size: 0.75rem;
	}

	h6, .h6 {
		font-size: 0.625rem;
	}

	p {
		margin-top: 0;
		margin-bottom: 1rem;
	}

	abbr[title], abbr[data-bs-original-title] {
		text-decoration: underline;
		-webkit-text-decoration: underline dotted;
		text-decoration: underline dotted;
		cursor: help;
		-webkit-text-decoration-skip-ink: none;
		text-decoration-skip-ink: none;
	}

	address {
		margin-bottom: 1rem;
		font-style: normal;
		line-height: inherit;
	}

	ol, ul {
		padding-left: 2rem;
	}

	ol, ul, dl {
		margin-top: 0;
		margin-bottom: 1rem;
	}

	ol ol, ul ul, ol ul, ul ol {
		margin-bottom: 0;
	}

	dt {
		font-weight: 600;
	}

	dd {
		margin-bottom: .5rem;
		margin-left: 0;
	}

	blockquote {
		margin: 0 0 1rem;
	}

	b, strong {
		font-weight: bolder;
	}

	small, .small {
		font-size: 85.7142857%;
	}

	mark, .mark {
		padding: 0.2em;
		background-color: #fcf8e3;
	}

	sub, sup {
		position: relative;
		font-size: 0.75em;
		line-height: 0;
		vertical-align: baseline;
	}

	sub {
		bottom: -.25em;
	}

	sup {
		top: -.5em;
	}

	a {
		color: #206bc4;
		text-decoration: none;
	}

	a:hover {
		color: #1a569d;
		text-decoration: underline;
	}

	a:not([href]):not([class]), a:not([href]):not([class]):hover {
		color: inherit;
		text-decoration: none;
	}

	pre, code, kbd, samp {
		font-family: var(--tblr-font-monospace);
		font-size: 1em;
		direction: ltr /* rtl:ignore */;
		unicode-bidi: bidi-override;
	}

	pre {
		display: block;
		margin-top: 0;
		margin-bottom: 1rem;
		overflow: auto;
		font-size: 85.7142857%;
	}

	pre code {
		font-size: inherit;
		color: inherit;
		word-break: normal;
	}

	code {
		font-size: 85.7142857%;
		color: #206bc4;
		word-wrap: break-word;
	}

	a > code {
		color: inherit;
	}

	kbd {
		padding: 0.2rem 0.4rem;
		font-size: 85.7142857%;
		color: #ffffff;
		background-color: #232e3c;
		border-radius: 2px;
	}

	kbd kbd {
		padding: 0;
		font-size: 1em;
		font-weight: 600;
	}

	figure {
		margin: 0 0 1rem;
	}

	img, svg {
		vertical-align: middle;
	}

	table {
		caption-side: bottom;
		border-collapse: collapse;
	}

	caption {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		color: #656d77;
		text-align: left;
	}

	th {
		text-align: inherit;
		text-align: -webkit-match-parent;
	}

	thead, tbody, tfoot, tr, td, th {
		border-color: inherit;
		border-style: solid;
		border-width: 0;
	}

	label {
		display: inline-block;
	}

	button {
		border-radius: 0;
	}

	button:focus:not(:focus-visible) {
		outline: 0;
	}

	input, button, select, optgroup, textarea {
		margin: 0;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
	}

	button, select {
		text-transform: none;
	}

	[role="button"] {
		cursor: pointer;
	}

	select {
		word-wrap: normal;
	}

	[list]::-webkit-calendar-picker-indicator {
		display: none;
	}

	button, [type="button"], [type="reset"], [type="submit"] {
		-webkit-appearance: button;
	}

	button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
		cursor: pointer;
	}

	::-moz-focus-inner {
		padding: 0;
		border-style: none;
	}

	textarea {
		resize: vertical;
	}

	fieldset {
		min-width: 0;
		padding: 0;
		margin: 0;
		border: 0;
	}

	legend {
		float: left;
		width: 100%;
		padding: 0;
		margin-bottom: 0.5rem;
		font-size: calc(1.275rem + 0.3vw);
		line-height: inherit;
	}

	@media (min-width: 1200px) {
		legend {
			font-size: 1.5rem;
		}
	}

	legend + * {
		clear: left;
	}

	::-webkit-datetime-edit-fields-wrapper, ::-webkit-datetime-edit-text, ::-webkit-datetime-edit-minute, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-year-field {
		padding: 0;
	}

	::-webkit-inner-spin-button {
		height: auto;
	}

	[type="search"] {
		outline-offset: -2px;
		-webkit-appearance: textfield;
	}

	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	::-webkit-color-swatch-wrapper {
		padding: 0;
	}

	::file-selector-button {
		font: inherit;
	}

	::-webkit-file-upload-button {
		font: inherit;
		-webkit-appearance: button;
	}

	output {
		display: inline-block;
	}

	iframe {
		border: 0;
	}

	summary {
		display: list-item;
		cursor: pointer;
	}

	progress {
		vertical-align: baseline;
	}

	[hidden] {
		display: none !important;
	}

	.lead {
		font-size: 0.875rem;
		font-weight: 400;
	}

	.display-1 {
		font-size: calc(1.625rem + 4.5vw);
		font-weight: 300;
		line-height: 1.2;
	}

	@media (min-width: 1200px) {
		.display-1 {
			font-size: 5rem;
		}
	}

	.display-2 {
		font-size: calc(1.575rem + 3.9vw);
		font-weight: 300;
		line-height: 1.2;
	}

	@media (min-width: 1200px) {
		.display-2 {
			font-size: 4.5rem;
		}
	}

	.display-3 {
		font-size: calc(1.525rem + 3.3vw);
		font-weight: 300;
		line-height: 1.2;
	}

	@media (min-width: 1200px) {
		.display-3 {
			font-size: 4rem;
		}
	}

	.display-4 {
		font-size: calc(1.475rem + 2.7vw);
		font-weight: 300;
		line-height: 1.2;
	}

	@media (min-width: 1200px) {
		.display-4 {
			font-size: 3.5rem;
		}
	}

	.display-5 {
		font-size: calc(1.425rem + 2.1vw);
		font-weight: 300;
		line-height: 1.2;
	}

	@media (min-width: 1200px) {
		.display-5 {
			font-size: 3rem;
		}
	}

	.display-6 {
		font-size: calc(1.375rem + 1.5vw);
		font-weight: 300;
		line-height: 1.2;
	}

	@media (min-width: 1200px) {
		.display-6 {
			font-size: 2.5rem;
		}
	}

	.list-unstyled {
		padding-left: 0;
		list-style: none;
	}

	.list-inline {
		padding-left: 0;
		list-style: none;
	}

	.list-inline-item {
		display: inline-block;
	}

	.list-inline-item:not(:last-child) {
		margin-right: 0.5rem;
	}

	/* todo */

`;
