import React, { ReactNode, useState } from "react";

import cn from "classnames";
import { Bell } from "tabler-icons-react";

import { AvatarProps } from "../Avatar";
import { Badge } from "../Badge";
import { ButtonList } from "../ButtonList";
import { Dropdown } from "../Dropdown";
import { DropdownItemProps } from "../Dropdown/DropdownItem";
import { NavigationMenu } from "./NavigationMenu";
import { NavigationMenuItemProps } from "./NavigationMenuItem";

export interface NavigationHeaderProps {
	/**
	 * Additional Class
	 */
	className?: string;
	/**
	 * Logo and/or Text elements to show on the left brand side of the header
	 */
	brandContent?: ReactNode;
	/**
	 * Color theme for the nav bar
	 */
	theme?: "transparent" | "light" | "dark";
	/**
	 * buttonList
	 */
	buttonList?: typeof ButtonList;
	/**
	 * Notifications Content
	 */
	notifications?: ReactNode;
	/**
	 * Has unread notifications, shows red dot
	 */
	hasUnreadNotifications?: boolean;
	/**
	 * Avatar Object
	 */
	avatar?: React.FC<AvatarProps>;
	/**
	 * Profile name to show next to avatar
	 */
	profileName?: string;
	/**
	 * Profile text to show beneath profileName
	 */
	profileSubName?: string;
	/**
	 * Profile dropdown menu items
	 */
	profileItems?: [React.FC<DropdownItemProps>];
	/**
	 * Applies dark theme to Notifications and Profile dropdowns
	 */
	darkDropdowns?: boolean;
	/**
	 * Navigation Menu within this Header
	 */
	menuItems?: [NavigationMenuItemProps];
}
export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
	className,
	theme = "transparent",
	brandContent,
	buttonList,
	notifications,
	hasUnreadNotifications,
	avatar,
	profileName,
	profileSubName,
	profileItems,
	darkDropdowns,
	menuItems,
}) => {
	const [notificationsShown, setNotificationsShown] = useState(false);
	const [profileShown, setProfileShown] = useState(false);

	return (
		<header
			className={cn(
				`navbar navbar-expand-md navbar-${theme} d-print-none`,
				className,
			)}>
			<div className="container-xl">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbar-menu">
					<span className="navbar-toggler-icon" />
				</button>
				<h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
					{brandContent}
				</h1>
				<div className="navbar-nav flex-row order-md-last">
					{buttonList ? (
						<div className="nav-item d-none d-md-flex me-3">
							{buttonList}
						</div>
					) : null}
					{notifications ? (
						<div className="nav-item dropdown d-none d-md-flex me-3">
							<button
								style={{
									border: 0,
									backgroundColor: "transparent",
								}}
								className="nav-link px-0"
								aria-label="Show notifications"
								onClick={() => {
									setNotificationsShown(!notificationsShown);
								}}>
								<Bell className="icon" />
								{hasUnreadNotifications ? (
									<Badge color="red" />
								) : null}
							</button>
							<Dropdown
								className="dropdown-menu-end dropdown-menu-card"
								show={notificationsShown}
								dark={darkDropdowns}>
								<div className="card">
									<div className="card-body">
										{notifications}
									</div>
								</div>
							</Dropdown>
						</div>
					) : null}
					<div
						className={cn("nav-item", {
							dropdown: !!profileItems,
						})}>
						<button
							style={{
								border: 0,
								backgroundColor: "transparent",
							}}
							className="nav-link d-flex lh-1 text-reset p-0"
							aria-label="Open user menu"
							onClick={() => {
								setProfileShown(!profileShown);
							}}>
							{avatar}
							{profileName ? (
								<div className="d-none d-xl-block ps-2">
									<div>{profileName}</div>
									{profileSubName ? (
										<div className="mt-1 small text-muted">
											{profileSubName}
										</div>
									) : null}
								</div>
							) : null}
						</button>
						{profileItems ? (
							<Dropdown
								className="dropdown-menu-end dropdown-menu-card"
								show={profileShown}
								dark={darkDropdowns}
								arrow>
								{profileItems}
							</Dropdown>
						) : null}
					</div>
				</div>
				{menuItems ? (
					<NavigationMenu items={menuItems} withinHeader />
				) : null}
			</div>
		</header>
	);
};
