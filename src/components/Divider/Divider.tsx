import React from "react";

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
	/**
	 * Color
	 */
	color?: string;
}
export const Divider: React.FC<DividerProps> = ({
	className,
	text,
	align,
	color,
}) => {
	return (
		<div
			className={cn(
				"hr-text",
				align === "left" && "hr-text-left",
				align === "right" && "hr-text-right",
				color && `text-${color}`,
				className,
			)}>
			{text}
		</div>
	);
};
