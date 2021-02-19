import React, { ReactNode } from "react";

interface AlertProps {
	children?: ReactNode;
	color?: "info" | "success" | "warning" | "danger";
	dismissable?: boolean;
	important?: boolean;
}
const Alert: React.FC<AlertProps> = ({
	children,
	color,
	dismissable,
	important,
}) => {
	const classes = ["alert", "alert-" + (color || "info")];

	dismissable && classes.push("alert-dismissable");
	important && classes.push("alert-important");

	return (
		<div className={classes.join(" ")} role="alert">
			{children}
			{dismissable ? (
				<button
					className="btn-close"
					data-bs-dismiss="alert"
					aria-label="close"></button>
			) : null}
		</div>
	);
};

export default Alert;
export { AlertProps };
