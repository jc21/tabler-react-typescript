import React, { ReactNode } from "react";

interface AvatarListProps {
	children?: ReactNode;
	stacked?: boolean;
}
const AvatarList: React.FC<AvatarListProps> = ({ children, stacked }) => {
	const classes = ["avatar-list"];

	stacked && classes.push("avatar-list-stacked");

	return <div className={classes.join(" ")}>{children}</div>;
};

export default AvatarList;
export { AvatarListProps };
