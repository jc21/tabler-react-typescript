import React, { ReactNode } from "react";

import cn from "classnames";

export interface PageHeaderProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
	/**
	 * Breadcrumb element
	 */
	breadcrumb?: ReactNode;
	/**
	 * Page Title
	 */
	title?: string;
	/**
	 * Pre Title
	 */
	preTitle?: string;
	/**
	 * Sub Title
	 */
	subTitle?: ReactNode;
	/**
	 * Show bottom border
	 */
	border?: boolean;
}
export const PageHeader: React.FC<PageHeaderProps> = ({
	children,
	className,
	preTitle,
	title,
	subTitle,
	breadcrumb,
	border,
}) => {
	return (
		<div
			className={cn(
				"page-header",
				border && "page-header-border",
				className,
			)}>
			<div className="row align-items-center">
				<div className="col">
					{breadcrumb ? (
						<div className="mb-1">{breadcrumb}</div>
					) : null}
					{preTitle ? (
						<div className="page-pretitle">{preTitle}</div>
					) : null}
					<h2 className="page-title">{title}</h2>
					{subTitle ? (
						<div className="text-muted mt-1">{subTitle}</div>
					) : null}
				</div>
				{children ? (
					<div className="col-auto ms-auto">{children}</div>
				) : null}
			</div>
		</div>
	);
};
