import React from "react";

import { Helmet } from "react-helmet";

function TablerStyles() {
	return (
		<Helmet>
			<link
				rel="stylesheet"
				href="https://unpkg.com/@tabler/core@1.0.0-beta3/dist/css/tabler.min.css"
			/>
		</Helmet>
	);
}

export { TablerStyles };
