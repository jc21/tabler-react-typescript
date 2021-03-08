import React, { ReactNode } from "react";

import cn from "classnames";

export interface CardProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
	/**
	 * Card Title
	 */
	title?: string;
	/**
	 * Size
	 */
	size?: "sm" | "md" | "lg";
	/**
	 * Add a color to one side
	 */
	statusColor?: string;
	/**
	 * Position of the Color
	 */
	statusPosition?: "top" | "start";
	/**
	 * Shows cards in stacked view
	 */
	stacked?: boolean;
}
export const Card: React.FC<CardProps> = ({
	children,
	className,
	title,
	size,
	statusColor,
	statusPosition,
	stacked,
}) => {
	return (
		<div
			className={cn(
				"card",
				size && `card-${size}`,
				stacked && "card-stacked",
				className,
			)}>
			{statusColor ? (
				<div
					className={`card-status-${
						statusPosition || "top"
					} bg-${statusColor}`}
				/>
			) : null}
			{title ? (
				<div className="card-header">
					<h3 className="card-title">{title}</h3>
				</div>
			) : null}
			<div className="card-body">{children}</div>
		</div>
	);
};
