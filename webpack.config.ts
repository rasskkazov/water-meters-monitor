import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { EnvironmentPlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const BUILD_DIR = path.resolve(__dirname, "build");
const PUBLIC_DIR = path.resolve(__dirname, "public");

const devServer: DevServerConfiguration = {
  port: 3000,
  open: true,
};

type Mode = "production" | "development";
type Env = {
  mode: Mode;
};
export default (env: Env) => {
  const isDev = env.mode === "development";
  const isProd = env.mode === "production";

  const plugins = [
    new EnvironmentPlugin({
      TOKEN: "",
    }),
    new HtmlWebpackPlugin({ template: path.join(PUBLIC_DIR, "index.html") }),
    isProd &&
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[name].[contenthash].css",
      }),
  ];

  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    plugins,
    entry: path.join(__dirname, "src", "index.tsx"),

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".scss"],
    },

    output: {
      path: BUILD_DIR,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? devServer : undefined,
  };

  return config;
};