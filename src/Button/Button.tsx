import React, { ReactNode } from "react";

interface Props {
	children?: ReactNode;
	color?: string;
	disabled?: boolean;
	shape?: "ghost" | "square" | "pill" | "outline";
}
const Button: React.FC<Props> = ({ children, color, disabled, shape }) => {
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

	return <button className={classes.join(" ")}>{children}</button>;
};

export default Button;
