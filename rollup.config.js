
import builder from "@daybrush/builder";

export default builder([
    {
        name: "MoveableHelper",
        input: "src/index.ts",
        output: "./dist/moveable-helper.js",
        resolve: true,
    },
    {
        name: "MoveableHelper",
        input: "src/index.ts",
        output: "./dist/moveable-helper.min.js",
        resolve: true,
        uglify: true,
    },
    {
        input: "src/index.ts",
        output: "./dist/moveable-helper.esm.js",
        exports: "named",
        format: "es",
    },
    {
        input: "src/index.ts",
        output: "./dist/moveable-helper.cjs.js",
        exports: "named",
        format: "cjs",
    },
]);
