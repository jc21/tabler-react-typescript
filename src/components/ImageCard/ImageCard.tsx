import React, { ReactNode } from "react";

interface ImageCardProps {
	image: string;
	children?: ReactNode;
	title?: string;
	size?: "sm" | "md" | "lg";
}
const ImageCard: React.FC<ImageCardProps> = ({
	image,
	children,
	title,
	size,
}) => {
	const classes = ["card"];
	size && classes.push(`card-${size}`);

	const styles = {
		backgroundImage: `url(${image})`,
	};

	return (
		<div className={classes.join(" ")}>
			<div
				className="card-img-top img-responsive img-responsive-16by9"
				style={styles}></div>
			<div className="card-body">
				{title ? <h3 className="card-title">{title}</h3> : null}
				{children}
			</div>
		</div>
	);
};

export default ImageCard;
export { ImageCardProps };
