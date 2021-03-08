import React, { ReactNode, useState } from "react";

import cn from "classnames";

export interface ModalProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
	/**
	 * Additional class for body
	 */
	bodyClassName?: string;
	/**
	 * Modal Title
	 */
	title: string;
	/**
	 * Footer components
	 */
	footer?: ReactNode;
	/**
	 * Add a color to the top
	 */
	statusColor?: string;
	/**
	 * Show close cross
	 */
	closable: boolean;
	/**
	 * Event to call after closing
	 */
	onCloseClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const Modal: React.FC<ModalProps> = ({
	children,
	className,
	bodyClassName,
	title,
	footer,
	statusColor,
	closable,
	onCloseClick,
}) => {
	const [closed, setClosed] = useState(false);

	const handleClosed = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		setClosed(true);
		onCloseClick && onCloseClick(e);
	};

	const closeBtn = closable ? (
		<button
			className="btn-close"
			data-bs-dismiss="modal"
			aria-label="Close"
			onClick={handleClosed}
		/>
	) : null;

	if (!closed) {
		return (
			<div className={cn("modal-dialog", className)} role="document">
				<div className="modal-content">
					{statusColor ? (
						<div className={`modal-status bg-${statusColor}`} />
					) : null}
					{title ? (
						<div className="modal-header">
							<h5 className="modal-title">{title}</h5>
							{closeBtn}
						</div>
					) : (
						closeBtn
					)}
					<div className={cn("modal-body", bodyClassName)}>
						{children}
					</div>
					{footer && <div className="modal-footer">{footer}</div>}
				</div>
			</div>
		);
	}
	return null;
};
