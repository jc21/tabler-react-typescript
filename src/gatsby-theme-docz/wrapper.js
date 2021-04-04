import * as React from "react";

import { Helmet } from "react-helmet-async";

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => (
	<React.Fragment>
		<Helmet>
			<link
				rel="stylesheet"
				href="https://unpkg.com/@tabler/core@1.0.0-beta2/dist/css/tabler.min.css"
			/>
			<link
				rel="stylesheet"
				href="https://unpkg.com/@tabler/core@1.0.0-beta2/dist/css/tabler-flags.min.css"
			/>
		</Helmet>
		{children}
	</React.Fragment>
);
export default Wrapper;
