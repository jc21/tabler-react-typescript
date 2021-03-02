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
	/**
	 * Separator type
	 */
	separator?: "arrows" | "bullets" | "dot";
	/**
	 * Alternate style
	 */
	alternate?: boolean;
}
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
	children,
	className,
	separator,
	alternate,
}) => {
	return (
		<ol
			className={cn(
				"breadcrumb",
				separator && `breadcrumb-${separator}`,
				alternate && "breadcrumb-alternate",
				className,
			)}
			aria-label="breadcrumbs">
			{children}
		</ol>
	);
};

Breadcrumb.Item = BreadcrumbItem;
