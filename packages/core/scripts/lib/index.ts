import { sassPlugin } from "esbuild-sass-plugin";
import path from "path";
import postcss from "postcss";
import combineSelectors from "postcss-combine-duplicated-selectors";
import presetEnv from "postcss-preset-env";

export const entrypoints = [path.join(process.cwd(), "src/style.scss")];

export const plugins = [
	sassPlugin({
		async transform(source, resolveDir) {
			const { css } = await postcss([presetEnv(), combineSelectors()]).process(
				source,
				{
					from: undefined,
				},
			);

			return css;
		},
	}),
];
