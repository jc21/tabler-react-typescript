import React from "react";

declare global {
	interface Function {
		Item: React.FC<any>;
		Link: React.FC<any>;
	}
}

export * from "./components/Alert";
export * from "./components/Avatar";
export * from "./components/AvatarList";
export * from "./components/Badge";
export * from "./components/Breadcrumb";
export * from "./components/Button";
export * from "./components/ButtonList";
export * from "./components/Card";
export * from "./components/Carousel";
export * from "./components/Divider";
export * from "./components/Dropdown";
export * from "./components/Empty";
export * from "./components/Flag";
export * from "./components/ImageCard";
export * from "./components/Modal";
export * from "./components/Progress";
