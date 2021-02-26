import React, { ReactNode } from "react";

interface BreadcrumbProps {
	children: ReactNode;
}
const Breadcrumb: React.FC<BreadcrumbProps> = ({ children }) => {
	return (
		<ol className="breadcrumb" aria-label="breadcrumbs">
			{children}
		</ol>
	);
};

export default Breadcrumb;
export { BreadcrumbProps };
