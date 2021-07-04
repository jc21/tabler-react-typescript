import React, { ReactNode } from "react";

import { NavigationHeader } from "./NavigationHeader";
import { NavigationMenu } from "./NavigationMenu";
import { NavigationMenuItem } from "./NavigationMenuItem";
import { NavigationMenuLink } from "./NavigationMenuLink";

export interface NavigationProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
}
export const Navigation = ({ children }: NavigationProps) => {
	return children;
};

Navigation.Header = NavigationHeader;
Navigation.Menu = NavigationMenu;
Navigation.MenuItem = NavigationMenuItem;
Navigation.MenuLink = NavigationMenuLink;
