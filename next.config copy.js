// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */

const moduleExports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {},
  images: {
    domains: ["firebasestorage.googleapis.com"],
    disableStaticImages: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(wav|mp3|ogg|mpe?g|png|jpe?g|gif)$/i,
        exclude: config.exclude,
        use: [
          {
            loader: require.resolve("file-loader"),
            options: {
              limit: 10000,
              fallback: require.resolve("url-loader"),
              publicPath: "_next/static/images/",
              outputPath: `${isServer ? "../" : ""}static/images/`,
              name: "[name]-[hash].[ext]",
              esModule: config.esModule || false,
            },
          },
        ],
      }
    );

    return config;
  },
  sentry: {
    hideSourceMaps: true,
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
