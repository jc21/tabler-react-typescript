import React, { ReactNode } from "react";

import cn from "classnames";

export interface ContainerProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
}
export const Container: React.FC<ContainerProps> = ({
	children,
	className,
}) => {
	return <div className={cn("container", className)}>{children}</div>;
};
