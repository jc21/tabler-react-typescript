import React, { ReactNode } from "react";

import cn from "classnames";

export interface PageOptionsProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
}
export const PageOptions: React.FC<PageOptionsProps> = ({
	children,
	className,
}) => {
	return (
		<div className={cn("page-options d-flex", className)}>{children}</div>
	);
};
