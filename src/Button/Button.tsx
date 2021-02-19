import React, { ReactNode } from "react";

interface ButtonProps {
	children?: ReactNode;
	color?: string;
	disabled?: boolean;
	loading?: boolean;
	shape?: "ghost" | "square" | "pill" | "outline" | "icon";
	size?: "small" | "large";
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
	if (shape) {
		switch (shape) {
			case "ghost":
				modifier = "-ghost";
				break;
			case "outline":
				modifier = "-outline";
				break;
			default:
				classes.push(`btn-${shape}`);
		}
	}

	color && classes.push(`btn${modifier}-${color}`);
	modifier && classes.push(`btn${modifier}`);
	disabled && classes.push("disabled");
	loading && classes.push("btn-loading");

	if (size === "small") {
		classes.push("btn-sm");
	} else if (size === "large") {
		classes.push("btn-lg");
	}

	return (
		<button className={classes.join(" ")} aria-label="Button">
			{children}
		</button>
	);
};

export default Button;
export { ButtonProps };
