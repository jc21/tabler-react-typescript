import React, { ReactNode } from "react";

interface CardProps {
	children?: ReactNode;
	title?: string;
	size?: "sm" | "md" | "lg";
	statusColor?: string;
	statusPosition?: "top" | "start";
	stacked?: boolean;
}
const Card: React.FC<CardProps> = ({
	children,
	title,
	size,
	statusColor,
	statusPosition,
	stacked,
}) => {
	const classes = ["card"];
	size && classes.push(`card-${size}`);
	stacked && classes.push("card-stacked");

	return (
		<div className={classes.join(" ")}>
			{statusColor ? (
				<div
					className={`card-status-${
						statusPosition || "top"
					} bg-${statusColor}`}></div>
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

export default Card;
export { CardProps };
