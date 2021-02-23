import React, { ReactNode } from "react";

interface PageHeaderProps {
	children?: ReactNode;
	breadcrumbs?: ReactNode;
	title: string;
	preTitle?: string;
	subTitle?: ReactNode;
}
const PageHeader: React.FC<PageHeaderProps> = ({
	children,
	preTitle,
	title,
	subTitle,
	breadcrumbs,
}) => {
	return (
		<div className="page-header">
			<div className="row align-items-center">
				<div className="col">
					{breadcrumbs}
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

export default PageHeader;
export { PageHeaderProps };
