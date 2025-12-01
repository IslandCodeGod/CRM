# Trae CRM - 顧客管理システム

🌐 [English](README_en.md) • [中文](README_zh.md) • [Deutsch](README_de.md) • [Español](README_es.md) • [Français](README_fr.md) • [Italiano](README_it.md) • [日本語](README_ja.md) • [한국어](README_ko.md) • [Nederlands](README_nl.md) • [Polski](README_pl.md) • [Português](README_pt.md) • [Русский](README_ru.md) • [العربية](README_ar.md) • [हिन्दी](README_hi.md) • [Svenska](README_sv.md) • [ไทย](README_th.md) • [Türkçe](README_tr.md) • [Tiếng Việt](README_vi.md)

## 📋 プロジェクト概要

Trae CRMは、中小企業向けに設計されたオープンソースの顧客関係管理（CRM）システムです。顧客、販売機会、リード、フォローアップ活動を管理するための完全な機能を提供し、企業が販売パフォーマンスと顧客満足度を向上させるのを支援します。

## ✨ 主な特徴

- 🎯 **顧客管理**: 顧客情報の追加、編集、検索、管理
- 📊 **ダッシュボード**: 販売統計と主要メトリクスの可視化
- 💰 **販売機会**: 販売ファネルを通じた販売機会の追跡
- 📈 **リード管理**: 潜在的なリードと変換率の管理
- 📞 **連絡先**: 顧客の連絡先を整理して維持
- 📝 **タスク**: 活動とフォローアップの計画と管理
- 🔐 **アクセス制御**: ユーザーロールを備えた安全な認証システム

## 🛠️ 技術スタック

- **フロントエンド**: HTML、CSS、JavaScript、Bootstrap 5
- **バックエンド**: Python、Flask
- **データベース**: SQLite
- **構造**: MVC（モデル-ビュー-コントローラ）

## 🚀 クイックスタート

### 前提条件

- Python 3.8+
- pip（Pythonパッケージマネージャ）

### インストール

1. リポジトリをクローンする
   ```bash
   git clone https://github.com/yourusername/trae_crm.git
   cd trae_crm
   ```

2. 依存関係をインストールする
   ```bash
   pip install -r requirements.txt
   ```

3. アプリケーションを起動する
   ```bash
   python run.py
   ```

4. ブラウザを開いて `http://localhost:5000` にアクセスする

### テストアカウント

- **ユーザー名**: admin
- **パスワード**: admin123

## 📁 プロジェクト構造

```
trae_crm/
├── app/
│   ├── __init__.py          # Flaskアプリケーションの初期化
│   ├── models/              # データモデル（ORM）
│   ├── routes/              # ルート定義（コントローラ）
│   ├── static/              # 静的ファイル（CSS、JS、画像）
│   ├── templates/           # HTMLテンプレート
│   └── utils/               # ユーティリティとサポート関数
├── config.py                # アプリケーション設定
├── run.py                   # メインエントリーポイント
├── requirements.txt         # プロジェクト依存関係
└── README.md                # プロジェクトドキュメント
```

## 📖 使用ガイド

### 1. ダッシュボード

ダッシュボードは、ビジネスの主要メトリクスの概要を提供します：

- **販売メトリクス**: 総顧客数、リード数、機会数、予想収益
- **販売ファネル**: 販売機会の進行状況の可視化
- **主要メトリクス**: 月間新規顧客、変換率など
- **最近の活動**: 最新の活動とタスク

![ダッシュボード](screenshots/dashboard.png)

### 2. 顧客管理

- **顧客の追加**: 新しい顧客を追加するためのフォームに記入
- **顧客リスト**: フィルターと並べ替え機能を備えたすべての顧客の表示
- **顧客詳細**: 顧客情報の表示と編集
- **顧客検索**: 名前、メール、電話番号で顧客を見つける

### 3. 販売機会管理

- **機会の追加**: 新しい販売機会を作成
- **販売ファネル**: 段階を通じて機会のステータスを追跡
- **機会の評価**: クロージングの金額と確率を割り当てる
- **収益予測**: 機会からの予想収益を計算

### 4. リード管理

- **リードの追加**: 新しい潜在的なリードを入力
- **資格認定**: リードを評価して資格認定
- **変換**: リードから顧客への変換を追跡
- **分析**: 変換統計を表示

### 5. 連絡先

- **連絡先管理**: 顧客の連絡先を整理して維持
- **連絡先情報**: 電話番号、メール、位置など
- **カテゴリー分け**: アクセスしやすくするために連絡先をカテゴリー分け

### 6. タスク

- **タスクの作成**: ミーティング、電話、タスクを計画
- **期限**: タスクの期限を設定
- **完了**: タスクを完了としてマーク
- **表示**: タスクをリストまたはカレンダーで表示

## ❓ よくある質問

**Q: SQLiteからMySQL/PostgreSQLにデータベースを変更できますか？**
A: はい、`config.py`ファイルの設定を変更して、別のデータベースを使用できます。

**Q: 新しいユーザーロールを追加するにはどうすればよいですか？**
A: `app/models/user.py`のUserモデルを変更して、新しいロールを追加できます。

**Q: インターフェースをカスタマイズできますか？**
A: はい、`app/templates/`のHTMLテンプレートと`app/static/css/`のCSSファイルを変更できます。

## 🛠️ 開発

### 開発環境

1. 仮想環境を作成する
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

2. 開発依存関係をインストールする
   ```bash
   pip install -r requirements.txt
   ```

3. 開発モードでアプリを実行する
   ```bash
   python run.py
   ```

### 貢献

1. リポジトリをフォークする
2. 機能ブランチを作成する (`git checkout -b feature/AmazingFeature`)
3. 変更をコミットする (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュする (`git push origin feature/AmazingFeature`)
5. Pull Requestを開く

## 📋 To Do

- [ ] メールとSMSのAPI統合
- [ ] 高度なレポート機能の追加
- [ ] データエクスポート（Excel、PDF）の実装
- [ ] プッシュ通知の追加
- [ ] モバイルインターフェースの改善

## 📄 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細については[LICENSE](LICENSE)ファイルを参照してください。

## 📞 連絡先

- **プロジェクト**: [Trae CRM](https://github.com/yourusername/trae_crm)
- **メール**: your.email@example.com
- **問題**: [問題を報告](https://github.com/yourusername/trae_crm/issues)

---

Trae CRMを選択していただきありがとうございます！🎉