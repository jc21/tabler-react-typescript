import React, { ReactNode } from "react";

interface AvatarProps {
	children?: ReactNode;
	color?: string;
	url?: string;
	initials?: string;
	size?: string;
	status?: "info" | "success" | "warning" | "danger";
	shape?: "rounded" | "rounded-circle" | "rounded-0" | "rounded-lg";
}
const Avatar: React.FC<AvatarProps> = ({
	children,
	color,
	url,
	initials,
	size,
	shape,
	status,
}) => {
	const classes = ["avatar"];

	const styles = {
		backgroundImage: "url('" + url + "')",
	};

	color && classes.push("bg-" + color);
	size && classes.push("avatar-" + size);
	shape && classes.push(shape);

	return (
		<span style={styles} className={classes.join(" ")}>
			{initials && !url ? initials.toUpperCase() : null}
			{!initials && !url ? children : null}
			{status ? <span className={"badge bg-" + status} /> : null}
		</span>
	);
};

export default Avatar;
export { AvatarProps };
