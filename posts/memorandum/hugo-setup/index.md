---
title: "Hugoのインストール"
date: 2023-06-03
---

# HUGO のインストール方法
[ソース元](https://gohugo.io/installation/)  

### 目次
- [MacOS](#macos)
- [Windows](#windows)

### 関連
- [Git/GitHub のセットアップ](../git-setup/)
- [Hugo勉強会 コマンドたち](../hugo_study_session/)
- [テーマ一覧](https://themes.gohugo.io/)

## MacOS
### 1. brew のインストール
#### brew の確認
> brew -v

```
Homebrew x.x.xx
```
とバージョンが出たら [2.hugoのインストール](#2-hugo-のインストール) へ.

#### brew のインストール
以下のコマンドを実行して brew をインストールする.
> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

#### 2. hugo のインストール
> brew install hugo

インストール完了後 以下のコマンドを実行し, バージョンが出たら完了.
> hugo -v

```
Homebrew x.x.xx
```


### Windows
### 1. winget のインストール
#### winget の確認
> winget -v

バージョンが出なければ [こちら](https://www.microsoft.com/ja-jp/p/%E3%82%A2%E3%83%97%E3%83%AA-%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%A9%E3%83%BC/9nblggh4nns1?activetab=pivot:overviewtab) からインストールする.

完了後, 以下のコマンドを実行し, 入ったことを確認する
> winget -v

### 2. hugoのインストール
> winget install Hugo.Hugo.Extended
