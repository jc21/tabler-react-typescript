import React, { ReactNode } from "react";

import cn from "classnames";

// TODO

export interface DropdownProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
}
export const Dropdown: React.FC<DropdownProps> = ({ children, className }) => {
	return (
		<div className={cn("dropdown-menu", "dropdown-menu-demo", className)}>
			<a className="dropdown-item" href="#">
				Action
			</a>
			<a className="dropdown-item" href="#">
				Another action
			</a>
		</div>
	);
};
