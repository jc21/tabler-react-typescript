import React, { ReactNode } from "react";

interface BadgeProps {
	children?: ReactNode;
	color?: string;
	type?: "pill" | "soft";
}
const Badge: React.FC<BadgeProps> = ({ children, color, type }) => {
	let modifier = "";

	type === "soft" && (modifier = "-lt");
	const classes = ["badge", "bg-" + (color || "blue") + modifier];
	type === "pill" && classes.push("badge-pill");

	return <span className={classes.join(" ")}>{children}</span>;
};

export default Badge;
export { BadgeProps };
