import esbuild from "esbuild";
import fs from "fs";
import path from "path";

import { entrypoints, plugins } from "./lib";

const build = async () => {
	const dist = path.join(process.cwd(), "dist");

	if (!fs.existsSync(dist)) {
		fs.mkdirSync(dist);
	}

	await esbuild.build({
		entryPoints: entrypoints,
		bundle: true,
		minify: true,
		outdir: "dist",
		plugins,
	});
};

build();
