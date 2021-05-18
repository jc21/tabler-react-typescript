import React, { ReactNode } from "react";

import cn from "classnames";

export interface GridRowProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
	cards?: boolean;
	deck?: boolean;
	alignItems?: string;
	justifyContent?: string;
}
export const GridRow: React.FC<GridRowProps> = ({
	children,
	className,
	cards,
	deck,
	alignItems = "",
	justifyContent = "",
}) => {
	const classes: string = cn(
		"row",
		{
			"row-cards": cards,
			"row-deck": deck,
			[`align-items-${alignItems}`]: alignItems,
			[`justify-content-${justifyContent}`]: justifyContent,
		},
		className,
	);

	return <div className={classes}>{children}</div>;
};
