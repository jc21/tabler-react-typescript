import React, { ReactNode } from "react";

interface DropdownProps {
	children: ReactNode;
}
const Dropdown: React.FC<DropdownProps> = ({ children }) => {
	return (
		<div className="dropdown-menu dropdown-menu-demo">
			<a className="dropdown-item" href="#">
				Action
			</a>
			<a className="dropdown-item" href="#">
				Another action
			</a>
		</div>
	);
};

export default Dropdown;
export { DropdownProps };
