// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		body: {
			background: string;
			color: string;
		};
		scrollbar: {
			thumb: string;
			track: string;
			hoverThumb: string;
		};
	}
}
