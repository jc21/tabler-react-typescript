import React from "react";

import cn from "classnames";

export interface CarouselProps {
	/**
	 * Additional Class
	 */
	className?: string;
}
export const Carousel: React.FC<CarouselProps> = ({ className }) => {
	return (
		<div
			className={cn("carousel", "slide", className)}
			data-bs-ride="carousel">
			<ol className="carousel-indicators">
				<li
					data-bs-target="#carousel-sample"
					data-bs-slide-to="0"
					className="active"
				/>
				<li data-bs-target="#carousel-sample" data-bs-slide-to="1" />
				<li data-bs-target="#carousel-sample" data-bs-slide-to="2" />
				<li data-bs-target="#carousel-sample" data-bs-slide-to="3" />
				<li data-bs-target="#carousel-sample" data-bs-slide-to="4" />
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						className="d-block w-100"
						alt=""
						src="https://tabler-react-typescript.jc21.com/assets/9f36332564ca271d.jpg"
					/>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						alt=""
						src="https://tabler-react-typescript.jc21.com/assets/9f36332564ca271d.jpg"
					/>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						alt=""
						src="https://tabler-react-typescript.jc21.com/assets/9f36332564ca271d.jpg"
					/>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						alt=""
						src="https://tabler-react-typescript.jc21.com/assets/9f36332564ca271d.jpg"
					/>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						alt=""
						src="https://tabler-react-typescript.jc21.com/assets/9f36332564ca271d.jpg"
					/>
				</div>
			</div>
			<a
				className="carousel-control-prev"
				href="#carousel-sample"
				role="button"
				data-bs-slide="prev">
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</a>
			<a
				className="carousel-control-next"
				href="#carousel-sample"
				role="button"
				data-bs-slide="next">
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</a>
		</div>
	);
};
