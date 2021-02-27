import React, { ReactNode, useState } from "react";

import cn from "classnames";

import { AlertLink } from "./AlertLink";

// TODO: avatar support

declare global {
	interface Function {
		Link: React.FC;
	}
}

export interface AlertProps {
	/**
	 * Child elements inside the Alert
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
	/**
	 * The type of this Alert, changes it's color
	 */
	type?: "info" | "success" | "warning" | "danger";
	/**
	 * An Icon to be displayed on the right hand side of the Alert
	 */
	icon?: ReactNode;
	/**
	 * Display an Avatar on the left hand side of this Alert
	 */
	avatar?: string;
	/**
	 *
	 */
	important?: boolean;
	/**
	 * Adds an 'X' to the right side of the Alert that dismisses the Alert
	 */
	dismissable?: boolean;
	/**
	 * Event to call after dissmissing
	 */
	onDismissClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const Alert: React.FC<AlertProps> = ({
	children,
	className,
	type = "info",
	icon,
	avatar,
	important = false,
	dismissable = false,
	onDismissClick,
}) => {
	const [dismissed, setDismissed] = useState(false);

	const classes = {
		"alert-dismissible": dismissable,
		"alert-important": important,
	};

	const handleDismissed = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		setDismissed(true);
		onDismissClick && onDismissClick(e);
	};

	const wrapIfIcon = (): ReactNode => {
		if (icon) {
			return (
				<div className="d-flex">
					<div>
						<span className="alert-icon">{icon}</span>
					</div>
					<div>{children}</div>
				</div>
			);
		}
		return children;
	};

	if (!dismissed) {
		return (
			<div
				className={cn("alert", `alert-${type}`, classes, className)}
				role="alert">
				{wrapIfIcon()}
				{dismissable ? (
					<button
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="close"
						onClick={handleDismissed}
					/>
				) : null}
			</div>
		);
	}
	return null;
};

Alert.Link = AlertLink;
