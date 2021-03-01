import React, { ReactNode } from "react";

import cn from "classnames";

export interface DividerProps {
	/**
	 * Additional Class
	 */
	className?: string;
	/**
	 * Text to display
	 */
	text: string;
	/**
	 * Alignment
	 */
	align?: "left" | "right";
}
export const Divider: React.FC<DividerProps> = ({
	className,
	text,
	align,
}) => {
	return (
		<div className={cn("hr-text", align === "left" && "hr-text-left", align === "right" && "hr-text-right", className)}>{text}</div>
	);
};
