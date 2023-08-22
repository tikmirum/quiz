const CracoAntDesignPlugin = require('craco-antd');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const plugins = [new AntdDayjsWebpackPlugin()];

module.exports = (options = {}) => ({
  webpack: {
    configure: config => ({
      ...config,
      output: {
        ...config.output,
        publicPath: '/'
      },
      optimization: {
        ...config.optimization
      }
    }),
    alias: {},
    plugins
  },
  // Suppress compile errors,
  typescript: {
    enableTypeChecking: false
  },
  // Disable eslint error logs
  eslint: {
    enable: false
  },
  babel: {
    plugins: [
      ...(isProd ? ['react-remove-properties'] : [])
    ]
  },
  // Import styles on demand
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath:
          options.customizeThemeLessPath
      }
    }
  ]
});
