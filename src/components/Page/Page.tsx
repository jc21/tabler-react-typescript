import React, { ReactNode } from "react";

import cn from "classnames";

import { PageContent } from "./PageContent";
import { PageHeader } from "./PageHeader";
import { PageMain } from "./PageMain";
import { PageOptions } from "./PageOptions";
import { PageSubTitle } from "./PageSubTitle";
import { PageTitle } from "./PageTitle";

export interface PageProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
}
export const Page: React.FC<PageProps> = ({ children, className }) => {
	return (
		<div className={cn("page d-flex h-auto min-h-screen", className)}>
			<div className="d-flex flex-fill">{children}</div>
		</div>
	);
};

Page.Content = PageContent;
Page.Header = PageHeader;
Page.Main = PageMain;
Page.Options = PageOptions;
Page.SubTitle = PageSubTitle;
Page.Title = PageTitle;
