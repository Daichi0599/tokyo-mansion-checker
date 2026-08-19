import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "このサイトについて｜30Lab",
  description:
    "30Labは、家・車・子どものことを「決める側」に回った30代が、そのつど調べたことを備忘としてメモしていったサイトです。運営者情報・免責事項。",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8">
          <h1 className="text-2xl font-bold text-white mb-2">このサイトについて</h1>
          <p className="text-sm text-slate-400 mb-8">最終更新日：2026年8月19日</p>

          <div className="prose prose-sm max-w-none text-slate-200 space-y-8">

            <section>
              <h2 className="text-lg font-bold text-white mb-3">決めるのは、だいたい自分だった</h2>
              <p>
                30代に入ってから、決めないと進まないことが急に増えた。
                家を買うのか借り続けるのか。車を持つのか。育休をいつ取るのか。子どもの費用をどう見ておくのか。
              </p>
              <p className="mt-3">
                やってみてわかったのは、<strong>この手のことは最後に必ず自分のところに戻ってくる</strong>ということだった。
                相談はできる。でも相談した相手が代わりに決めてくれるわけじゃない。
                数字を出して、責任を持って「これでいく」と言う役は、こっちに回ってくる。
              </p>
              <p className="mt-3">
                しかも調べる時間はない。平日は仕事があるし、調べ方も教わっていない。
                それでも期限だけは勝手に来る。ローンの審査、育休の申し出、保育園の申し込み。
                <strong>わからないまま決めるのが、いちばん怖かった。</strong>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">だから、調べたことをメモに残した</h2>
              <p>
                誰かに読ませるつもりはなかった。次に同じことを聞かれたときに、また一から調べ直したくなかっただけだ。
                自分の年収でいくらまでなら無理がないのか。都内で車を持つと10年でいくら出ていくのか。
                この手当はいつまでに出さないと遡れないのか。
              </p>
              <p className="mt-3">
                そうやって溜めたメモを、あとから自分で使える形にしたのがこのサイトです。
                だから読み物というより、<strong>ほとんどが入力して答えが出る道具</strong>の形をしています。
                読んで感心しても、自分の数字が出ないと決められないので。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">家の次に来たのが、子どものことだった</h2>
              <p>
                出産まわりを足したのは、ここが同じ構造になっていたからです。
                産む側は体調に波があるし、健診のたびに説明を受けているぶん「知っている前提」で話が進む。
                結果として、<strong>制度を調べて期限を管理する役は、たいてい男側に回ってくる</strong>。
              </p>
              <p className="mt-3">
                そのわりに、この立場向けの情報がほとんどない。
                出てくるのは産む側に向けたものか、「パパも協力しましょう」くらいの一般論で、
                当日どこに電話するのか、退院日に何が要るのか、産後の体に何が起きているのかは、どこにも書いていない。
                知らないまま当日を迎えると、その場で立ち尽くすことになります。
              </p>
              <p className="mt-3">
                <Link href="/birth/checklist" className="text-blue-400 hover:underline font-semibold">
                  出産準備チェックリスト
                </Link>
                には、「夫が動くことだけ表示する」という絞り込みを付けてあります。
                手続きの一覧ではなく、自分が手を動かす分だけを見たいときのためのものです。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">書いている人</h2>
              <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                    🏠
                  </div>
                  <div>
                    <p className="font-bold text-white text-base">たろう（運営者）</p>
                    <p className="text-sm text-slate-300 mt-1">会社員・30代・都内在住</p>
                    <p className="text-sm text-slate-300 mt-2">
                      不動産やお金の専門家ではありません。自分の番が来て、そのつど調べた人間です。
                      なので専門家として正解を配るのではなく、
                      <strong>自分が何を調べて、どこで判断が変わったか</strong>を残しています。
                    </p>
                    <p className="text-sm text-slate-300 mt-2">
                      自分の作った診断ツールが年収7.7倍を「安全」と表示していたことに後から気づいて直した、
                      みたいな話も含めて書いています。そのほうが役に立つと思うので。
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <a href="https://x.com/30lab_jp" target="_blank" rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:underline">𝕏 @30lab_jp</a>
                      <span className="text-slate-500">|</span>
                      <a href="https://note.com/30lab" target="_blank" rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:underline">note</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">置いてある道具</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🏠</span>
                  <div>
                    <Link href="/mansion" className="font-semibold text-blue-400 hover:underline">マンション購入診断</Link>
                    <p className="text-sm text-slate-300">年収・頭金・金利から「無理なく買える価格」を出す。年収倍率の上限と、金利が上がったときの返済額も一緒に見る。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🔍</span>
                  <div>
                    <Link href="/check" className="font-semibold text-blue-400 hover:underline">物件診断</Link>
                    <p className="text-sm text-slate-300">気になっている物件の坪単価・管理費・修繕積立金が相場から外れていないかを見る。最大5件まで並べて比較。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🚗</span>
                  <div>
                    <Link href="/car" className="font-semibold text-blue-400 hover:underline">車コスト診断</Link>
                    <p className="text-sm text-slate-300">購入・ローン・カーシェア・リースを10年の総額で比べる。都内は駐車場代が効くので、そこを込みで計算する。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🤰</span>
                  <div>
                    <Link href="/birth" className="font-semibold text-blue-400 hover:underline">出産費用シミュレーター</Link>
                    <p className="text-sm text-slate-300">無痛分娩を含めた総額から、一時金や給付を引いた「実際に自分が払う額」を出す。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <div>
                    <Link href="/birth/checklist" className="font-semibold text-blue-400 hover:underline">出産準備チェックリスト</Link>
                    <p className="text-sm text-slate-300">予定日を入れると、いまの週で必要なものだけが出る。夫が手を動かす分だけに絞ることもできる。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">👶</span>
                  <div>
                    <Link href="/child" className="font-semibold text-blue-400 hover:underline">子育て費用試算</Link>
                    <p className="text-sm text-slate-300">0歳〜22歳を進路別に試算。中学受験や、018サポートのような「もらえる側」も入れて計算する。</p>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">数字の出どころ</h2>
              <p>
                制度や相場の数字は、次のような一次情報を見て書いています。
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
                <li>厚生労働省・こども家庭庁などの制度案内（育児休業給付、出産育児一時金、児童手当など）</li>
                <li>東京都・各区市町村の公式ページ（018サポート、保育園の入園案内、選考指数）</li>
                <li>日本銀行・各金融機関が公開している金利</li>
                <li>国土交通省・不動産流通機構などの市況データ</li>
              </ul>
              <p className="mt-3">
                ただし制度は変わるし、健康保険組合の付加給付や自治体の独自制度は加入先・お住まいで違います。
                最後は必ず、自分の健保と自分の役所のページで確認してください。ここに書いてあるのは、
                <strong>そこを見に行くための地図</strong>くらいの位置づけです。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">免責事項</h2>
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
                <p className="text-sm">
                  当サイトのツール・記事は情報提供を目的としており、<strong>特定の金融商品・不動産物件・ローンの購入や申込みを勧誘するものではありません</strong>。
                </p>
                <p className="text-sm mt-2">
                  診断結果は参考値であり、実際の融資審査や物件購入の可否を保証するものではありません。
                  医療・出産に関する記載も一般的な情報であり、診断や治療の判断は必ず医師・助産師にご相談ください。
                </p>
                <p className="text-sm mt-2">
                  当サイトの情報を利用した結果生じたいかなる損害についても、運営者は責任を負いかねます。
                </p>
                <p className="text-sm mt-2">
                  一部のリンクにはアフィリエイトプログラムを利用したものが含まれます。該当箇所にはPR表記を付けています。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">連絡先</h2>
              <p>
                「ここ間違ってる」「この項目が抜けている」という指摘がいちばんありがたいです。
              </p>
              <p className="mt-2 font-mono text-sm bg-slate-900 border border-slate-700 px-3 py-2 rounded-lg inline-block">
                tokyo.mansion.explore@gmail.com
              </p>
            </section>

          </div>

          <div className="mt-10 pt-6 border-t border-slate-700">
            <Link href="/" className="text-sm text-blue-400 hover:underline">← トップページへ戻る</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
