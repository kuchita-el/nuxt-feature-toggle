# nuxt-feature-toggle

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 使い方

### 設定

```ts
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            features: ["featureName"]
        }
    }
});
```

### 実装

新しい機能を追加する場合

```vue

<template>
  <feature-toggle feature="featureName">
    <div>
      new feature
    </div>
  </feature-toggle>
</template>
```

機能を修正する場合

```vue

<template>
  <feature-toggle feature="featureName">
    <template #default>new feature</template>
    <template #fallback>old feature</template>
  </feature-toggle>
</template>
```

## 実行方法

### セットアップ

依存するライブラリをインストールする。

```bash
# npm
npm install
```

## 開発サーバーで起動する

`http://localhost:3000` でサーバーを起動する。

```bash
# npm
npm run dev
```

## 本番用にアプリをビルドする

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
