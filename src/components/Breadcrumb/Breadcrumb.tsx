import React, { ReactNode } from "react";

import cn from "classnames";

import { BreadcrumbItem, BreadcrumbItemProps } from "./BreadcrumbItem";

declare global {
	interface Function {
		Item: React.FC<BreadcrumbItemProps>;
	}
}

 export interface BreadcrumbProps {
	/**
	 * Child elements within
	 */
	children: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
}
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, className }) => {
	return (
		<ol className={cn("breadcrumb", className)} aria-label="breadcrumbs">
			{children}
		</ol>
	);
};

Breadcrumb.Item = BreadcrumbItem;
