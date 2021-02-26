import React, { ReactNode, useState } from "react";

interface AlertLinkProps {
	/**
	 * Child elements inside the Alert
	 */
	children?: ReactNode;
	/**
	 * The type of this Alert, changes it's color
	 */
	type: "info" | "success" | "warning" | "danger";
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
	important: boolean;
	/**
	 * Adds an 'X' to the right side of the Alert that dismisses the Alert
	 */
	dismissable: boolean;
	/**
	 * Event to call after dissmissing
	 */
	onDismissClick?: React.MouseEventHandler<HTMLButtonElement>;
}
function AlertLink({
	children,
	type = "info",
	icon,
	avatar,
	important = false,
	dismissable = false,
	onDismissClick,
}: AlertLinkProps) {
	const [dismissed, setDismissed] = useState(false);
	const classes = ["alert", "alert-" + type];

	// Yes, this is a typo from the tabler css
	dismissable && classes.push("alert-dismissible");
	important && classes.push("alert-important");

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
			<div className={classes.join(" ")} role="alert">
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
}

export default AlertLink;
export { AlertLinkProps };
