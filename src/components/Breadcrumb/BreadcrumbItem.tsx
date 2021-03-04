import React, { ReactNode } from "react";

import cn from "classnames";

export interface BreadcrumbItemProps {
	/**
	 * Child elements within
	 */
	children: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
	/**
	 * Set true for the current page
	 */
	active?: boolean;
}
export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
	children,
	className,
	active,
}) => {
	return (
		<li className={cn("breadcrumb-item", active && "active", className)}>
			{children}
		</li>
	);
};
