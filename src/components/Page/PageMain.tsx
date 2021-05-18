import React, { ReactNode } from "react";

import cn from "classnames";

export interface PageMainProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
}
export const PageMain: React.FC<PageMainProps> = ({ children, className }) => {
	return (
		<div
			className={cn(
				"page-main flex-fill d-flex flex-column max-w-full",
				className,
			)}>
			{children}
		</div>
	);
};
