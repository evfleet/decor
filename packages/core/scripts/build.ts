import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import fs from "fs";
import path from "path";
import postcss from "postcss";
import combineSelectors from "postcss-combine-duplicated-selectors";
import presetEnv from "postcss-preset-env";

const build = async () => {
	const dist = path.join(process.cwd(), "dist");

	if (!fs.existsSync(dist)) {
		fs.mkdirSync(dist);
	}

	/*
	const entryPoints = fs
		.readdirSync(path.join(process.cwd(), "src"))
		.filter(
			(file) =>
				/\.(css|scss)$/.test(file) &&
				fs.statSync(path.join(process.cwd(), "src", file)).isFile(),
		)
		.map((file) => `src/${file}`);
	*/

	const context = await esbuild.context({
		entryPoints: [path.join(process.cwd(), "src/style.scss")],
		bundle: true,
		// minify: true,
		outdir: "dist",
		// metafile: true,
		plugins: [
			sassPlugin({
				async transform(source, resolveDir) {
					const { css } = await postcss([
						presetEnv(),
						combineSelectors(),
					]).process(source, {
						from: undefined,
					});

					return css;
				},
			}),
		],
	});

	await context.watch();
};

build();
