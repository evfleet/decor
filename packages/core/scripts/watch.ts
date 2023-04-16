import esbuild from "esbuild";
import fs from "fs";
import path from "path";

import { entrypoints, plugins } from "./lib";

const watch = async () => {
	const dist = path.join(process.cwd(), "dist");

	if (!fs.existsSync(dist)) {
		fs.mkdirSync(dist);
	}

	const context = await esbuild.context({
		entryPoints: entrypoints,
		bundle: true,
		outdir: "dist",
		plugins,
	});

	await context.watch();
};

watch();
