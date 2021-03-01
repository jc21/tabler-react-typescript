import React from "react";

import { Alert } from "tabler-react-typescript-dev";

const App = () => {
	return (
		<div className="content">
			<div className="container-xl">
				<Alert type="info" title="Welcome to Tabler React Typescript">
					This project is under construction. For now, please read the{" "}
					<Alert.Link href="documentation/index.html">
						component documentation
					</Alert.Link>
					.
				</Alert>
			</div>
		</div>
	);
};

export default App;
