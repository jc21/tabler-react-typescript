import React from "react";

declare global {
	interface Function {
		Col: React.FC<any>;
		Item: React.FC<any>;
		Link: React.FC<any>;
		Row: React.FC<any>;
		Content: React.FC<any>;
		Header: React.FC<any>;
		Main: React.FC<any>;
		Options: React.FC<any>;
		SubTitle: React.FC<any>;
		Title: React.FC<any>;
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
export * from "./components/Container";
export * from "./components/Divider";
export * from "./components/Dropdown";
export * from "./components/Empty";
export * from "./components/Flag";
export * from "./components/Grid";
export * from "./components/ImageCard";
export * from "./components/Modal";
export * from "./components/Page";
export * from "./components/Progress";
// export * from "./components/Site";
