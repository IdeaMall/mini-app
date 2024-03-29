# IdeaMall mini-app

[Taro][1] project scaffold based on [TypeScript][2], [Preact][3], [MobX][4] & [Vant][5]

[![CI & CD](https://github.com/IdeaMall/mini-app/actions/workflows/main.yml/badge.svg)][6]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][7]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][8]

## Demo

https://ideamall.github.io/mini-app/

## Technology stack

- Language: [TypeScript v5][2]
- Component engine: [Preact v10][3]
- State management: [MobX v4][4]
- Component suite: [AntM Vant UI v3][5] + [Bootstrap v5 (CSS utility)][9]
- CI / CD: GitHub [Actions][10] + [Pages][11]

## Extra components

1. [Range Field](src/components/RangeField.tsx)
2. [Area Select](src/components/AreaSelect.tsx)

## Development

### Install & Start

1. sign in GitHub NPM: https://github.com/IdeaMall/data-service#type-package

2. execute installation commands:

```shell
npm i pnpm -g
pnpm i
```

### Start Dev-server

```shell
pnpm dev h5
# or
pnpm dev weapp
```

### Mini-app Debug

#### Windows

```shell
winget install Tencent.WeixinDevTools
winget install Tencent.qq-devtool
winget install Alibaba.MiniProgramStudio
winget install ByteDance.DouyinIDE
winget install Baidu.SwanIDE
```

#### Mac OS X

```shell
brew install --cask wechatwebdevtools
```

## Deployment

```shell
pnpm build h5
# or
pnpm build weapp
```

[1]: https://taro-docs.jd.com/
[2]: https://www.typescriptlang.org/
[3]: https://preactjs.com/
[4]: https://github.com/mobxjs/mobx/blob/mobx4and5/docs/
[5]: https://antmjs.github.io/vantui/
[6]: https://github.com/IdeaMall/mini-app/actions/workflows/main.yml
[7]: https://codespaces.new/IdeaMall/mini-app
[8]: https://gitpod.io/?autostart=true#https://github.com/IdeaMall/mini-app
[9]: https://getbootstrap.com/docs/5.1/getting-started/contents/#css-files
[10]: https://github.com/features/actions
[11]: https://pages.github.com/
