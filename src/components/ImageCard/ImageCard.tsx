import React, { ReactNode } from "react";

import cn from "classnames";

export interface ImageCardProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
	/**
	 * Additional Class
	 */
	className?: string;
	/**
	 * Image URL
	 */
	image: string;
	/**
	 * Title
	 */
	title?: string;
	/**
	 * Size
	 */
	size?: "sm" | "md" | "lg";
}
export const ImageCard: React.FC<ImageCardProps> = ({
	children,
	className,
	image,
	title,
	size,
}) => {
	const styles = {
		backgroundImage: `url(${image})`,
	};

	return (
		<div className={cn("card", size && `card-${size}`, className)}>
			<div className="card-img-top img-responsive" style={styles} />
			<div className="card-body">
				{title ? <h3 className="card-title">{title}</h3> : null}
				{children}
			</div>
		</div>
	);
};
