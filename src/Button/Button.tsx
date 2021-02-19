import React, { ReactNode } from "react";

interface ButtonProps {
	children?: ReactNode;
	color?: string;
	disabled?: boolean;
	loading?: boolean;
	shape?: "ghost" | "square" | "pill" | "outline" | "icon";
	size?: "sm" | "lg";
}
const Button: React.FC<ButtonProps> = ({
	children,
	color,
	disabled,
	loading,
	shape,
	size,
}) => {
	const classes = ["btn"];
	let modifier = "";

	shape === "ghost" && (modifier = "-ghost");
	shape === "outline" && (modifier = "-outline");
	shape &&
		["ghost", "outline"].indexOf(shape) === -1 &&
		classes.push(`btn-${shape}`);

	color && classes.push(`btn${modifier}-${color}`);
	modifier && classes.push(`btn${modifier}`);
	disabled && classes.push("disabled");
	loading && classes.push("btn-loading");
	size && classes.push("btn-" + size);

	return (
		<button className={classes.join(" ")} aria-label="Button">
			{children}
		</button>
	);
};

export default Button;
export { ButtonProps };
