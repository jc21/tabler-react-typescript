import React, { ReactNode } from "react";

import cn from "classnames";

export interface PageTitleProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
}
export const PageTitle: React.FC<PageTitleProps> = ({
	children,
	className,
}) => {
	return (
		<div className={cn("page-title-box", className)}>
			<h1 className="page-title">{children}</h1>
		</div>
	);
};
