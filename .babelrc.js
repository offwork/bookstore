const isTest = String(process.env.NODE_ENV) === 'test';
// const isProd = String(process.env.NODE_ENV) === 'production';

module.exports = {
  presets: [
    [
      '@babel/preset-env', 
      { 
        modules: isTest ? 'commonjs' : false,
        targets: {
          node: 'current',
          browsers: '> 0.25%, ie 11, not op_mini all, not dead'
        }
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    "react-hot-loader/babel"
  ],
}