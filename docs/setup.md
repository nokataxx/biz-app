## 開発環境構築

### 1. Vite

```bash
npm create vite@latest
```

### 2. Chakura UI

https://chakra-ui.com/ を参照

### 3. その他ライブラリ

```bash
npm install react-router-dom
```

## Github

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:verde-x/card-app.git
git push -u origin main
```

## Supabase

```bash
npm install @supabase/supabase-js
```

.env

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## Firebase

Firebase CLI インストール（未インストールの場合）

```bash
npm install -g firebase-tools
```

Firebase ログイン

```bash
firebase login
```

プロジェクトディレクトリで初期化

```bash
cd /Users/nokata/Develop/card-app
firebase init hosting
```

- 初期化時の選択：

  - 既存の Firebase プロジェクトを選択または新規作成
  - Public directory: `build`  または  `dist`（ビルド出力先）
  - Single-page app: `Yes`（React の場合）
  - GitHub Actions: 任意

アプリをビルド

```bash
npm run build
```

デプロイ

```bash
firebase deploy --only hosting
```
