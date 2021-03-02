import React, { ReactNode } from "react";

import cn from "classnames";

export interface EmptyProps {
	/**
	 * Additional Class
	 */
	className?: string;
	/**
	 * Header text instead of icon or image
	 */
	headerText?: string;
	/**
	 * Icon instead of header text or image
	 */
	icon?: ReactNode;
	/**
	 * Image URL instead of header text or icon
	 */
	image?: string;
	/**
	 * Title line
	 */
	title?: string;
	/**
	 * Sub Title
	 */
	subTitle?: string;
	/**
	 * Button call to action
	 */
	button?: ReactNode;
}
export const Empty: React.FC<EmptyProps> = ({
	className,
	headerText,
	icon,
	image,
	title,
	subTitle,
	button,
}) => {
	let header: ReactNode;
	if (headerText) {
		header = <div className="empty-header">{headerText}</div>;
	} else if (icon) {
		header = <div className="empty-icon">{icon}</div>;
	} else if (image) {
		header = (
			<div className="empty-img">
				<img src={image} height="128" alt="" />
			</div>
		);
	}

	return (
		<div className={cn("empty", className)}>
			{header}
			{title && <p className="empty-title text-muted">{title}</p>}
			{subTitle && (
				<p className="empty-subtitle text-muted">{subTitle}</p>
			)}
			{button && <div className="empty-action">{button}</div>}
		</div>
	);
};
