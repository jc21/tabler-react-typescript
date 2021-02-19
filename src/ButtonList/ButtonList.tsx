import React, { ReactNode } from "react";

interface ButtonListProps {
	children?: ReactNode;
	align?: "center" | "right";
}
const ButtonList: React.FC<ButtonListProps> = ({ children, align }) => {
	const classes = ["btn-list"];

	align === "center" && classes.push("justify-content-center");
	align === "right" && classes.push("justify-content-end");

	return <div className={classes.join(" ")}>{children}</div>;
};

export default ButtonList;
export { ButtonListProps };
