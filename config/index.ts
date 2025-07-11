import { defineConfig, type UserConfigExport } from '@tarojs/cli';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { UnifiedWebpackPluginV5 } from 'weapp-tailwindcss/webpack';

import devConfig from './dev';
import prodConfig from './prod';

export default defineConfig(async (merge, {}) => {
  const baseConfig: UserConfigExport = {
    projectName: 'ideashop-miniapp',
    date: '2025-7-8',
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2
    },
    compiler: { type: 'webpack5', prebundle: { enable: false } },
    sourceRoot: 'src',
    outputRoot: 'dist',
    defineConstants: {},
    copy: { patterns: [], options: {} },
    framework: 'preact',
    plugins: [
      ['@tarojs/plugin-html', { pxtransformBlackList: [/demo-/, /van-/] }],
      [
        '@tarojs/plugin-http',
        {
          enableCookie: true,
          disabledFormData: false,
          disabledBlob: false
        }
      ]
    ],
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {}
        },
        url: {
          enable: true,
          config: {
            limit: 1024
          }
        },
        cssModules: {
          enable: true,
          config: {
            namingPattern: 'module',
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin);
        chain.merge({
          plugin: {
            install: {
              plugin: UnifiedWebpackPluginV5,
              args: [
                {
                  appType: 'taro',
                  injectAdditionalCssVarScope: true,
                  rem2rpx: true
                }
              ]
            }
          }
        });
      },
      miniCssExtractPluginOption: {
        ignoreOrder: true
      },
      optimizeMainPackage: {
        enable: true
      }
    },
    h5: {
      publicPath: '/',
      staticDirectory: 'static',
      postcss: {
        autoprefixer: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: true,
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      esnextModules: ['@antmjs/vantui'],
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin);
      }
    },
    rn: {
      appName: 'taroDemo',
      postcss: {
        cssModules: {
          enable: true
        }
      }
    }
  };
  if (process.env.NODE_ENV === 'development') {
    return merge({}, baseConfig, devConfig);
  }

  return merge({}, baseConfig, prodConfig);
});
