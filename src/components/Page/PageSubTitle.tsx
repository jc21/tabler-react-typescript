import React, { ReactNode } from "react";

import cn from "classnames";

export interface PageSubTitleProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
}
export const PageSubTitle: React.FC<PageSubTitleProps> = ({
	children,
	className,
}) => {
	return <div className={cn("page-subtitle", className)}>{children}</div>;
};
