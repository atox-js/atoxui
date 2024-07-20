# Atox UI

**Atox UI**は、ReactとTailwind CSSを使用して構築された軽量でカスタマイズ可能なUIコンポーネントライブラリです。シンプルで美しいインターフェースを提供し、フロントエンド開発の生産性を向上させることを目的としています。

## 特徴

- **簡単なインストール**: 依存関係が最小限で、すぐに利用可能
- **カスタマイズ性**: Tailwind CSSを使用して、スタイルの調整が容易

## インストール

`atoxui`をプロジェクトに追加するには、以下のコマンドを実行します。

```bash
npm install atoxui
```

または、`yarn`を使用する場合は以下のコマンドを実行します。

```bash
yarn add atoxui
```

## 必要な依存関係

`atoxui`は、以下の依存関係に依存しています。

- **React**: バージョン 17 以上
- **Tailwind CSS**: バージョン 2 以上
- **Framer Motion**: アニメーションのためのライブラリ

これらの依存関係がまだインストールされていない場合は、次のコマンドでインストールしてください。

```bash
npm install react tailwindcss framer-motion
```

または、

```bash
yarn add react tailwindcss framer-motion
```

## 使用方法

### スタイルのインポート

`Atox UI`を使用するには、ライブラリのスタイルシートをレイアウトファイルでインポートする必要があります。例えば、`src/pages/_app.tsx`や`src/app/layout.tsx`などのレイアウトファイルで以下の行を追加してください。

```typescript
import "atoxui/dist/style.css";
```

## ライセンス

このライブラリはMITライセンスの下で提供されています。詳細については、[LICENSE](LICENSE)ファイルを参照してください。

---

このREADMEはChatGPTを使用して生成し、改変しました
