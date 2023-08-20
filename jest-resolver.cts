// eslint-disable-next-line @typescript-eslint/no-var-requires
const importResolver = require("enhanced-resolve").create.sync({
  conditionNames: ["import", "node", "default"],
  extensions: [".js", ".json", ".node", ".ts", ".tsx"],
  roots: ["src"],
  modules: ["node_modules", "src"],
});
// eslint-disable-next-line @typescript-eslint/no-var-requires
const requireResolver = require("enhanced-resolve").create.sync({
  conditionNames: ["require", "node", "default"],
  extensions: [".js", ".json", ".node", ".ts", ".tsx"],
  roots: ["src"],
  modules: ["node_modules", "src"],
});

module.exports = function (request, options) {
  let resolver = requireResolver;
  if (options.conditions?.includes("import")) {
    resolver = importResolver;
  }
  return resolver(options.basedir, request);
};
