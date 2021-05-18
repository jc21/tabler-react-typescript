import React, { ReactNode } from "react";

import { GridCol } from "./GridCol";
import { GridRow } from "./GridRow";

export interface GridProps {
	/**
	 * Child elements within
	 */
	children?: ReactNode;
}
export const Grid = ({ children }: GridProps) => {
	return children;
};

Grid.Col = GridCol;
Grid.Row = GridRow;
