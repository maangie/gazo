# gazo

画像をマウスでドラッグして動かせる、React の小さな実験用アプリです。

## 概要

ページに猫の画像（`src/gazo.jpg`）を表示し、マウスでつかんで好きな位置へ動かせます。

- このプロジェクトは [Create React App](https://github.com/facebookincubator/create-react-app) で作り、`npm run eject` 済みです。
- そのため、webpack・Babel・Jest の設定は `config/` と `scripts/` に直接置いてあります。

## 使用技術

| 分類 | ライブラリ |
|---|---|
| UI | React 15.6 / React DOM |
| ビルド | webpack 3 / Babel 6（`babel-preset-react-app`） |
| テスト | Jest 20 |
| 状態管理（導入のみ） | MobX 3 / mobx-react 4 |
| UI コンポーネント（導入のみ） | material-ui 0.19 |
| デプロイ（導入のみ） | gh-pages |

MobX のデコレータ構文を使えるように、`babel-plugin-transform-decorators-legacy` を有効にしてあります。

## ディレクトリ構成

```
gazo/
├── config/            webpack・Jest などの設定（eject で出てきたもの）
├── public/            index.html・favicon・manifest.json
├── scripts/           start / build / test スクリプト
└── src/
    ├── index.js       エントリーポイント
    ├── App.js         ルートコンポーネント
    ├── Gazo.js        ドラッグできる画像のコンポーネント
    ├── gazo.jpg       表示する画像
    └── registerServiceWorker.js
```

## Gazo コンポーネントの仕組み

`src/Gazo.js` は `<img>` を `position: relative` で配置し、`top` / `left` を state で管理しています。

1. **mousedown**: マウスの位置と画像の今の位置の差を覚え、ドラッグを始めます。
2. **mousemove**: ドラッグ中はマウスの動きに合わせて画像を動かします。
3. **mouseup**: ドラッグを終え、最後の位置で止めます。

ブラウザ標準の画像ドラッグと重ならないように、`draggable="false"` を指定しています。

## 使い方

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

ウォッチモードで Jest が起動します。

### 本番用にビルドする

```sh
yarn build
```

最適化したファイルが `build/` に出力されます。

## 注意

- 依存パッケージは 2017 年当時のバージョンです。最近の Node.js ではそのままでは動かないことがあります。その場合は Node.js 8 系などの古いバージョンを使ってください。
- マウスのイベントは画像の要素で受けています。そのため、マウスを速く動かして画像の外に出ると、ドラッグが途切れることがあります。
- MobX・material-ui・gh-pages はインストールしてありますが、まだコードでは使っていません。
