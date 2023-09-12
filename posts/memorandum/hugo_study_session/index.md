---
title: "Hugo勉強会 コマンドたち"
date: 2023-06-10
---

# Hugo勉強会 コマンドたち

### 関連
- [Git/GitHub のセットアップ](../git-setup/)
- [Hugo のセットアップ](../hugo-setup/)
- [テーマ一覧](https://themes.gohugo.io/)

## プロジェクトの作成(p.9)
```shell
hugo new site profile
```

## git の初期化(p.10)
```shell
git init
```

## テーマの追加(p.11)
```shell
git submodule add https://github.com/SatooRu65536/satooru-hugo-theme themes/satooru-hugo-theme
```

## サンプルデータの追加(p.12)
```shell
cp -r ./themes/satooru-hugo-theme/exampleSite/* ./ 
```

## 不要なファイルを削除(p.12)
```shell
rm -r ./hugo.toml
```

## ローカル環境で確認する(p.13)
```shell
hugo server
```

[http://localhost:1313](localhost:1313/)

## ステージに上げる(p.15)
```shell
git add .
```

## コミットする(p.16)
```shell
git commit -m "メッセージ"
```

## Vercelに登録(p.18)
[http://vercel.com](https://vercel.com)
