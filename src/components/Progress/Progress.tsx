import React from "react";

import cn from "classnames";

export interface ProgressProps {
	/**
	 * Additional Class
	 */
	className?: string;
	/**
	 * Percentage from 0 to 100
	 */
	value: number;
	/**
	 * Button size
	 */
	size?: "sm";
	/**
	 * Color of the Bar
	 */
	color?: string;
	/**
	 * Shows a loading animation
	 */
	indeterminate: boolean;
}
export const Progress: React.FC<ProgressProps> = ({
	className,
	value,
	size,
	color,
	indeterminate,
}) => {
	const classes = [
		"progress",
		{
			[`progress-${size}`]: !!size,
		},
	];

	let p = Math.min(value, 100);
	p = Math.max(p, 0);

	return (
		<div className={cn(classes, className)}>
			{indeterminate ? (
				<div
					className={cn(
						"progress-bar",
						"progress-bar-indeterminate",
						{ [`bg-${color}`]: !!color },
					)}
				/>
			) : (
				<div
					className={cn("progress-bar", { [`bg-${color}`]: !!color })}
					style={{ width: `${p}%` }}
					role="progressbar"
					aria-valuenow={p}
					aria-valuemin={0}
					aria-valuemax={100}>
					<span className="visually-hidden">{p}% Complete</span>
				</div>
			)}
		</div>
	);
};
