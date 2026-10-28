# gazo

画像をマウスでドラッグして動かせる、React の小さな実験用アプリです。

## 概要

ページに猫の画像（`src/gazo.jpg`）を表示し、マウスでつかんで好きな位置へ動かせます。

- 2017 年に [Create React App](https://github.com/facebookincubator/create-react-app) で作ったものを、Node.js v26 で動くように [Vite](https://vite.dev/) へ移行しました。

## 使用技術

| 分類 | ライブラリ |
|---|---|
| UI | React 19 / React DOM |
| ビルド | Vite 8（`@vitejs/plugin-react`） |
| テスト | Vitest 5 / jsdom / Testing Library |

## ディレクトリ構成

```
gazo/
├── index.html         HTML のテンプレート
├── vite.config.js     Vite・Vitest の設定
├── public/            favicon・manifest.json
└── src/
    ├── index.jsx      エントリーポイント
    ├── App.jsx        ルートコンポーネント
    ├── App.test.jsx   テスト
    ├── Gazo.jsx       ドラッグできる画像のコンポーネント
    └── gazo.jpg       表示する画像
```

## Gazo コンポーネントの仕組み

`src/Gazo.jsx` は `<img>` を `position: relative` で配置し、`top` / `left` を state で管理しています。

1. **mousedown**: マウスの位置と画像の今の位置の差を覚え、ドラッグを始めます。
2. **mousemove**: ドラッグ中はマウスの動きに合わせて画像を動かします。
3. **mouseup**: ドラッグを終え、最後の位置で止めます。

ブラウザ標準の画像ドラッグと重ならないように、`draggable="false"` を指定しています。

## 使い方

Node.js v26.12.1 以降と Corepack が必要です。yarn のバージョン（4.1.0）は `package.json` の `packageManager` で固定してあり、Corepack が自動で使います。

### 依存パッケージのインストール

```sh
yarn install
```

### 開発サーバーを起動する

```sh
yarn start
```

[http://localhost:3000](http://localhost:3000) で開きます。ソースを編集すると自動で再読み込みされます。

### テストを実行する

```sh
yarn test
```

ウォッチモードで Vitest が起動します。1 回だけ実行するときは `yarn test run` とします。

### 本番用にビルドする

```sh
yarn build
```

最適化したファイルが `build/` に出力されます。`yarn preview` でビルド結果を確認できます。

## デプロイ

master に push すると、GitHub Actions（`.github/workflows/deploy.yml`）がビルドして GitHub Pages に公開します。

- 公開先: https://maangie.github.io/gazo/
- GitHub Pages では `/gazo/` の下で公開するため、`yarn build` のときだけ Vite の `base` を `/gazo/` にしています。

## 注意

- マウスのイベントは画像の要素で受けています。そのため、マウスを速く動かして画像の外に出ると、ドラッグが途切れることがあります。
