import React, { ReactNode } from "react";

import cn from "classnames";
import { Link, useRouteMatch } from "react-router-dom";

export interface NavigationMenuLinkProps {
	/**
	 * Additional Class
	 */
	className?: string;
	/**
	 * An Icon to be displayed on the right hand side of the Alert
	 */
	icon?: ReactNode;
	/**
	 * Title of the Item
	 */
	title: string;
	/**
	 * Router Link to if using react-router-dom
	 */
	to?: any;
	/**
	 * Router Link property if using react-router-dom
	 */
	activeOnlyWhenExact?: boolean;
	/**
	 * Shows this item as being active
	 */
	active?: boolean;
	/**
	 * Disables the menu item
	 */
	disabled?: boolean;
	/**
	 * Badge if you want to show one
	 */
	badge?: ReactNode;
}
export const NavigationMenuLink: React.FC<NavigationMenuLinkProps> = ({
	className,
	icon,
	title,
	active,
	disabled,
	badge,
	to,
	activeOnlyWhenExact,
}) => {
	const match = useRouteMatch({
		path: to,
		exact: activeOnlyWhenExact,
	});

	return (
		<li className={cn("nav-item", { active: match || active }, className)}>
			<Link
				className={cn("nav-link", disabled && "disabled")}
				to={to}
				role="button"
				aria-expanded="false">
				{icon && (
					<span className="nav-link-icon d-md-none d-lg-inline-block">
						{icon}
					</span>
				)}
				<span className="nav-link-title">{title}</span>
				{badge}
			</Link>
		</li>
	);
};
