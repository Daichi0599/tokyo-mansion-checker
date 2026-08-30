# 30Lab

家・車・出産・子育てなど、30代の大きな決断を数字で整理するための無料ツール集。

> 30Labは、家・車・出産・子育てなど、アラサーの人生の転機を横断して、数字で意思決定できるサービスである。

家を買った後に育休を取っても家計が回るか、子どもの教育費と住宅ローンのピークが重ならないか——個別の計算だけでは見えない「複数の決断が重なったときに何が起きるか」を、`/plan` の横断診断（v2）で確認できる。個別に計算したい場合は、これまでどおり各ツール（マンション・物件・車・出産・子育て）を単体で使える。

## 技術構成

- Next.js 16（App Router, Turbopack）+ TypeScript（strict）+ Tailwind CSS v4
- Node.js 22 以上（Windows環境では `C:\Program Files\nodejs\` を PATH に追加して実行する）
- GA4（`@next/third-parties/google`）+ Vercel Analytics
- 状態保存はすべて `localStorage`。サーバー・DBは持たない

```bash
export PATH="/c/Program Files/nodejs:$PATH"   # Windows/Git Bash の場合
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## 主要ルート

### 横断診断（v2）

| URL | 役割 |
|---|---|
| `/plan` | 共通プロフィールの入力（4ステップ） |
| `/plan/result` | 5時点比較・希望プラン/安全プランの比較・条件変更 |

### 個別診断

| URL | 役割 |
|---|---|
| `/` | コンセプト説明・状況選択・横断診断の入口 |
| `/mansion` | マンション購入診断（安全購入価格・金利上昇シミュレーション） |
| `/check` | 気になる物件の坪単価・管理費・修繕積立金チェック |
| `/loan` | 住宅ローン返済額の計算 |
| `/birth` | 出産費用シミュレーター |
| `/birth/checklist` | 出産準備チェックリスト（週数連動） |
| `/child` | 子育て費用試算（進路別・中学受験対応） |
| `/car` | 車の保有方法比較（カーシェア・中古・新車） |
| `/articles` | 30代の決断ノート（記事） |
| `/about` | このサイトについて |

## 計算ロジックの場所

個別ツールの計算式はページコンポーネントから分離し、`lib/` 配下に置いている。

| ファイル | 内容 |
|---|---|
| `lib/calculator.ts` | 住宅購入診断（`diagnose`＝安全価格を算出／`calcPriceMetrics`＝価格から月々の返済額を算出） |
| `lib/childCost.ts` | 出産費用（`calcBirth`）と子育て費用（`calculateCosts`）、支援制度（`calcSubsidies`） |
| `lib/carCost.ts` | 車の保有方法別の月額・10年総額（`/car` から分離） |
| `lib/lifePlan/` | v2 横断診断のロジック一式（下記） |

### `lib/lifePlan/` の構成

```text
lib/lifePlan/
  defaults.ts          共通プロフィール（LifeProfile）の初期値
  storage.ts           localStorage への保存・復元・削除
  housing.ts           lib/calculator.ts を LifeProfile から呼び出すアダプター
  family.ts            lib/childCost.ts（出産・教育費）を LifeProfile から呼び出すアダプター
  scenarios.ts          現在／購入後／育休中／教育費ピーク／金利上昇の5時点を計算する純粋関数
  recommendations.ts   ルールベースの推奨アクション生成（最大3件）
  index.ts             上記の re-export
```

設計方針:

- 計算式は Reactコンポーネント内に書かない。UIは入力と表示に限定する
- 既存の個別計算（`lib/calculator.ts` の `diagnose`・`calcPriceMetrics`、`lib/childCost.ts`）を複製せず、アダプター経由で再利用する
- 金額は既存ロジックに合わせてすべて万円単位

## GA4計測ルール

イベント送信は `lib/analytics.ts` に集約している。新規コードから直接 `sendGAEvent` を呼ばず、`lib/analytics.ts` の型付き関数を経由すること。

**送ってよいもの**: intent種別、ステップ番号、プラン種別、遷移元・遷移先ツール名など「個人を特定できないカテゴリ値」。

**送ってはいけないもの**: 年収額・貯蓄額・住宅価格・年齢・出産予定時期・市区町村など、入力値そのもの、または組み合わせて個人を推定できる情報。既存の一部コンポーネント（`PropertyDiagnosis.tsx` など）には価格帯などカテゴリ化した値のみを送るよう修正済み。新規イベントを追加する際は `lib/analytics.ts` の型定義にパラメータを追加し、具体値を渡せない設計を保つこと。

## v2のデータ保存方針

- 横断診断の入力（`LifeProfile`）は `localStorage` のキー `30lab:life-profile:v1` にのみ保存する
- サーバー送信・DB保存は行わない（ログイン・会員登録もMVPでは実装しない）
- `version` フィールドを持ち、保存形式が変わった場合はバージョン不一致で初期値にフォールバックする
- 結果画面から入力データを削除できる
