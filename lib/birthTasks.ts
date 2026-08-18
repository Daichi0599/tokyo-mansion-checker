/**
 * 出産準備タスクの定義。
 *
 * 週数は「妊娠週数」で持ち、出産予定日を40週0日として逆算する。
 * 出産後は40週を超えた値で表現する（41週＝産後1週）。記事のような読み物ではなく
 * 「いま何をするか」を出す道具にするため、各タスクは以下を必ず持つ：
 *   - where : どこでやるか（役所／勤務先／自宅で完結、など）
 *   - minutes: だいたいの所要時間
 *   - amount : 落としたときに動く金額（緊急度の判断材料）
 */

export type Phase = "early" | "stable" | "late" | "afterBirth" | "leave";

export const PHASES: { key: Phase; label: string; range: string }[] = [
  { key: "early", label: "妊娠初期", range: "〜15週" },
  { key: "stable", label: "安定期", range: "16〜27週" },
  { key: "late", label: "臨月準備", range: "28〜39週" },
  { key: "afterBirth", label: "出産直後", range: "産後1ヶ月" },
  { key: "leave", label: "育休〜復職", range: "産後2ヶ月〜1歳" },
];

/** 表示を絞り込むための条件。多いと入力が面倒になるので3つに絞っている */
export interface Conditions {
  /** 会社員・公務員か（出産手当金・育児休業給付は雇用形態で扱いが変わる） */
  employee: boolean;
  /** 里帰り出産をするか */
  satogaeri: boolean;
  /** 東京都在住か（018サポートなど都独自の制度） */
  tokyo: boolean;
}

export interface Task {
  id: string;
  phase: Phase;
  /** 表示され始める妊娠週数 */
  fromWeek: number;
  /** これを過ぎると「期限超過」になる妊娠週数 */
  toWeek: number;
  title: string;
  where: string;
  minutes: number;
  /** 動く金額。緊急度の判断に効くので、わかるものは必ず入れる */
  amount?: string;
  /** 遡れない期限がある場合の注意書き */
  deadline?: string;
  /**
   * 時期を過ぎると本当に取り返しがつかないもの。
   * これが無いタスクは、推奨時期を過ぎても「まだやれる」ので警告扱いにしない
   * （いつでも調べられる項目まで赤く出すと、本当の期限が埋もれる）。
   */
  hardDeadline?: true;
  detail: string;
  /** この条件が true のときだけ表示する */
  requires?: keyof Conditions;
}

export const TASKS: Task[] = [
  // ───────── 妊娠初期 ─────────
  {
    id: "hoken-teiousekkai",
    hardDeadline: true,
    phase: "early",
    fromWeek: 0,
    toWeek: 12,
    title: "いまの医療保険で帝王切開が対象か確認する",
    where: "保険証券・保険会社のアプリ",
    minutes: 10,
    amount: "給付 数万〜数十万円",
    deadline: "妊娠後の新規加入は今回の出産が対象外になりやすい",
    detail:
      "帝王切開は健康保険と高額療養費が使えるので自己負担は跳ね上がりませんが、医療保険から給付が出るかは契約次第です。未加入なら、妊娠後に入っても今回は対象外になるのが一般的なので、ここは早いほど選択肢があります。",
  },
  {
    id: "kenpo-fuka",
    phase: "early",
    fromWeek: 0,
    toWeek: 20,
    title: "健康保険組合の付加給付を調べる",
    where: "自分の健保組合のサイト",
    minutes: 5,
    amount: "＋数万〜十数万円",
    detail:
      "国の出産育児一時金50万円とは別に、勤務先の健保が独自に上乗せしている場合があります。組合によって有無も額も違い、申請が要ることが多い。夫婦それぞれの健保を見比べて、付加給付がある側で申請したほうが得になるケースもあります。",
  },
  {
    id: "kaisha-seido",
    phase: "early",
    fromWeek: 0,
    toWeek: 20,
    title: "会社の制度を洗い出す",
    where: "就業規則・社内ポータル",
    minutes: 15,
    amount: "出産祝金など",
    detail:
      "配偶者出産休暇、育休の社内規定、出産祝金。読めばわかる話ですが、たいてい誰も教えてくれません。育休を取る前提で、いつ誰に言うかの段取りもここで考え始めます。",
    requires: "employee",
  },
  {
    id: "sanin-yoyaku",
    hardDeadline: true,
    phase: "early",
    fromWeek: 5,
    toWeek: 12,
    title: "産院を決めて分娩予約を取る",
    where: "産院（電話・来院）",
    minutes: 60,
    amount: "産院差で 50万円以上",
    deadline: "人気の産院は妊娠判明後すぐ埋まる",
    detail:
      "都内の正常分娩は総額60〜70万円、無痛分娩や人気の産院だと130〜150万円。費用の判断と予約の締切が同時に来ます。先に出産費用シミュレーターで予算の当たりをつけておくと決めやすくなります。",
  },
  {
    id: "boshi-techo",
    phase: "early",
    fromWeek: 6,
    toWeek: 14,
    title: "母子健康手帳と妊婦健診の受診票を受け取る",
    where: "区市町村の窓口",
    minutes: 40,
    amount: "＋10万円分の補助券",
    detail:
      "14回分の健診費補助が受け取れます。あわせて出産・子育て応援ギフト（妊娠届出時の5万円相当）の面談もこのタイミングで案内されることが多いので、一度で済ませられないか確認してください。",
  },

  // ───────── 安定期 ─────────
  {
    id: "ikukyu-kettei",
    hardDeadline: true,
    phase: "stable",
    fromWeek: 16,
    toWeek: 26,
    title: "夫が育休を取るか、いつ取るかを決める",
    where: "夫婦で話す",
    minutes: 30,
    amount: "給付が数十万円変わる",
    deadline: "父親は産後8週以内に取得しないと上乗せの対象外",
    detail:
      "出生後休業支援給付は、夫婦ともに通算14日以上の育休を取ることが条件です。満たすと給付率が67%から80%になり、社会保険料の免除と非課税を合わせて手取り10割相当（最長28日分）。夫が取らなければ、この上乗せは妻の分も含めて発生しません。ここが金額としては最大の分かれ道です。",
    requires: "employee",
  },
  {
    id: "ikukyu-moushide",
    hardDeadline: true,
    phase: "stable",
    fromWeek: 20,
    toWeek: 32,
    title: "育休の意向を会社に伝える",
    where: "上司・人事",
    minutes: 20,
    deadline: "申し出は原則1ヶ月前（産後パパ育休は2週間前）",
    detail:
      "取ると決めたら早めに伝えるほど調整が利きます。引き継ぎの都合で「取れなかった」となるのがいちばんもったいないので、日程は前倒しで押さえておきます。",
    requires: "employee",
  },
  {
    id: "chokusetsu-shiharai",
    hardDeadline: true,
    phase: "stable",
    fromWeek: 20,
    toWeek: 34,
    title: "出産育児一時金の直接支払制度を手続きする",
    where: "産院の窓口",
    minutes: 10,
    amount: "立替 50万円を回避",
    detail:
      "手続きしておくと50万円が産院へ直接支払われ、窓口では差額だけ払えば済みます。やらないと一度全額を立て替えることになります。",
  },
  {
    id: "satogaeri-junbi",
    phase: "stable",
    fromWeek: 20,
    toWeek: 30,
    title: "里帰り先での健診費用の扱いを確認する",
    where: "住んでいる自治体の窓口",
    minutes: 20,
    amount: "健診費の払い戻し",
    detail:
      "里帰り先では住んでいる自治体の補助券がそのまま使えないことがあります。いったん自費で払って後から払い戻す形になるので、領収書の保管方法まで確認しておきます。交通費も予算に入れておくこと。",
    requires: "satogaeri",
  },

  // ───────── 臨月準備 ─────────
  {
    id: "genndogaku",
    hardDeadline: true,
    phase: "late",
    fromWeek: 28,
    toWeek: 38,
    title: "限度額適用認定証を用意する",
    where: "健保組合（オンライン申請可の場合あり）",
    minutes: 15,
    amount: "立替 十数万円を回避",
    detail:
      "帝王切開になった場合、手術は健康保険の対象で高額療養費も使えます。認定証が手元にあれば窓口での支払いが自己負担限度額までで済みます。なくても後から払い戻せますが、その間の立替が発生します。マイナ保険証で代替できる場合もあるので、あわせて確認を。",
  },
  {
    id: "shorui-jizen",
    phase: "late",
    fromWeek: 30,
    toWeek: 39,
    title: "出生届・児童手当・健保加入の書類を先に揃える",
    where: "自宅（役所サイトから印刷）",
    minutes: 30,
    deadline: "産後2週間は動けない前提で",
    detail:
      "用紙の入手と、記入できる欄の記入まで済ませておきます。産後は想像しているより動けません。ここを先にやっておくかどうかで、退院後の負担がまったく違います。",
  },
  {
    id: "jintsu-taxi",
    phase: "late",
    fromWeek: 30,
    toWeek: 38,
    title: "陣痛タクシーに登録する",
    where: "タクシー会社のサイト",
    minutes: 5,
    detail:
      "住所と産院を事前に登録しておくと、当日は連絡するだけで迎えに来てもらえます。深夜や破水時に配車がつかまらないリスクを消せるので、5分でできる保険としては効率がいい部類です。",
  },
  {
    id: "yosan-gaichu",
    phase: "late",
    fromWeek: 28,
    toWeek: 38,
    title: "ベビー用品と、産後の外注予算を決める",
    where: "夫婦で話す",
    minutes: 60,
    amount: "ベビー用品 50万円前後",
    detail:
      "ベビー用品は短期間に集中します。あわせて家事代行・宅配・ミールキットにいくらまで使うかも決めておくと、そのとき揉めません。ここを削ると別のところにコストが出ます。",
  },

  // ───────── 出産直後 ─────────
  {
    id: "shussho-todoke",
    hardDeadline: true,
    phase: "afterBirth",
    fromWeek: 40,
    toWeek: 42,
    title: "出生届を出す",
    where: "区市町村の窓口",
    minutes: 40,
    deadline: "出生日を含めて14日以内",
    detail:
      "児童手当や健保の加入もこのタイミングでまとめて動かすと、役所に行く回数が減ります。夜間窓口でも受け付けている自治体が多いので、事前に確認を。",
  },
  {
    id: "jido-teate",
    hardDeadline: true,
    phase: "afterBirth",
    fromWeek: 40,
    toWeek: 42,
    title: "児童手当を申請する",
    where: "区市町村の窓口",
    minutes: 20,
    amount: "月1〜1.5万円",
    deadline: "出生日の翌日から15日以内。遅れた分は遡れない",
    detail:
      "この期間内に申請すれば出生の翌月分から受け取れます。遅れると申請した月の翌月分からになり、その差は戻ってきません。出生届と同時に出すのが確実です。",
  },
  {
    id: "kenpo-kanyu",
    phase: "afterBirth",
    fromWeek: 40,
    toWeek: 43,
    title: "子どもを健康保険に加入させる",
    where: "勤務先または役所",
    minutes: 20,
    detail:
      "これが済まないと乳幼児医療証が出ません。1ヶ月健診に間に合わせたいので、出生届とセットで動かします。",
  },
  {
    id: "iryosho",
    phase: "afterBirth",
    fromWeek: 40,
    toWeek: 44,
    title: "乳幼児医療証を申請する",
    where: "区市町村の窓口",
    minutes: 15,
    amount: "医療費がほぼ無料に",
    detail: "健保証ができてから申請します。自治体によって対象年齢が違い、高校生まで無料のところもあります。",
  },
  {
    id: "sapo018",
    phase: "afterBirth",
    fromWeek: 40,
    toWeek: 50,
    title: "018サポートを申請する",
    where: "東京都のオンライン申請",
    minutes: 10,
    amount: "18年で 108万円",
    deadline: "年1回の申請制。自動では始まらない",
    detail:
      "0〜18歳に月5,000円、所得制限なし。放っておいても振り込まれません。金額規模としては児童手当に次ぐので、落とすと痛い部類です。",
    requires: "tokyo",
  },
  {
    id: "kyufu-shinsei",
    phase: "afterBirth",
    fromWeek: 40,
    toWeek: 48,
    title: "出産手当金・育児休業給付を申請する",
    where: "勤務先経由",
    minutes: 30,
    amount: "給与の 50〜80%",
    detail: "どちらも勤務先を通して申請します。夫が育休を取った分も忘れずに。",
    requires: "employee",
  },
  {
    id: "ryoshusho",
    phase: "afterBirth",
    fromWeek: 40,
    toWeek: 52,
    title: "医療費控除用に領収書をまとめ始める",
    where: "自宅",
    minutes: 5,
    amount: "還付 数万〜十数万円",
    detail:
      "出産費用は医療費控除の対象です。無痛分娩の費用も含められます。翌年の確定申告で使うので、封筒を1つ決めて放り込んでいくだけで十分です。",
  },

  // ───────── 育休〜復職 ─────────
  {
    id: "hokatsu-joho",
    phase: "leave",
    fromWeek: 44,
    toWeek: 70,
    title: "保活を始める（見学・優先順位づけ）",
    where: "自治体サイト・園見学",
    minutes: 180,
    detail:
      "認可に入れるかどうかで月3万円前後変わるので、これは立派なお金の話です。見学は予約が要る園が多く、まとめて回れません。早めに動き始めるほど選択肢が残ります。",
  },
  {
    id: "hokatsu-moushikomi",
    hardDeadline: true,
    phase: "leave",
    fromWeek: 58,
    toWeek: 80,
    title: "保育園に申し込む",
    where: "区市町村の窓口",
    minutes: 60,
    amount: "認可外との差 月3万円前後",
    deadline: "4月入園は前年の10〜12月が締切",
    detail:
      "生まれ月によって、0歳4月に申し込めるかどうかが決まります。締切を逃すと次のチャンスは1年後か、認可外に頼ることになります。",
  },
  {
    id: "fukushoku-katachi",
    phase: "leave",
    fromWeek: 58,
    toWeek: 88,
    title: "復職の形を決めて、世帯年収を引き直す",
    where: "夫婦で話す",
    minutes: 60,
    amount: "時短なら年収 約8割",
    detail:
      "育休中の給付は最長でも1年前後で終わります。復職後の実際の手取りで家計を組み直しておかないと、給付が切れたところで急に苦しくなります。",
  },
  {
    id: "loan-saiken",
    phase: "leave",
    fromWeek: 58,
    toWeek: 92,
    title: "住宅ローンとの両立を再点検する",
    where: "マンション購入診断",
    minutes: 10,
    detail:
      "購入前に立てた返済計画は、たいてい共働きフルタイムが前提です。働き方が変わるなら、そのタイミングで返済比率を計算し直しておくと、あとで慌てません。",
  },
];

/** 出産予定日（40週0日）から今日の妊娠週数を求める */
export function calcWeek(dueDate: string, today = new Date()): number | null {
  const due = new Date(dueDate + "T00:00:00");
  if (Number.isNaN(due.getTime())) return null;
  const days = Math.floor((due.getTime() - today.getTime()) / 86400000);
  return 40 - Math.floor(days / 7);
}

export function visibleTasks(conditions: Conditions): Task[] {
  return TASKS.filter((t) => !t.requires || conditions[t.requires]);
}
