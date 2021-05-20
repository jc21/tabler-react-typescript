// TODO: REDO

import React, { ReactNode } from "react";

import cn from "classnames";

import { Container } from "../Container";
import { PageHeader } from "./PageHeader";

export interface PageContentProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
	title?: string;
	subTitle?: string;
	options?: React.ReactNode;
}
export const PageContent: React.FC<PageContentProps> = ({
	children,
	className,
	title,
	subTitle,
	options,
}) => {
	return (
		<div
			className={cn(
				"page-content d-flex flex-fill max-w-full",
				className,
			)}>
			<div className="flex-fill px-lg-2 mw-100">
				<Container className="my-4">
					{(title || subTitle || options) && (
						<PageHeader
							title={title}
							subTitle={subTitle}
							// options={options}
						/>
					)}
					{children}
				</Container>
			</div>
		</div>
	);
};
