import React, { ReactNode } from "react";

interface BreadcrumbItemProps {
	children: ReactNode;
	active?: boolean;
}
const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
	children,
	active,
}) => {
	const classes = ["breadcrumb-item"];
	active && classes.push("active");
	return <li className={classes.join(" ")}>{children}</li>;
};

export default BreadcrumbItem;
export { BreadcrumbItemProps };
