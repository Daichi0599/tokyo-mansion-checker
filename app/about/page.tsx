import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "このサイトについて｜30Lab",
  description:
    "30Labは、家を買おうとして転職で止まり、そのタイミングで子どもができた30代が、調べたことをメモしていったサイトです。運営者情報・免責事項。",
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
              <h2 className="text-lg font-bold text-white mb-3">結局、まだ家を買っていません</h2>
              <p>
                都内でマンションを買うつもりで、ずっと調べていました。このサイトの診断ツールも、もとは自分用に作ったものです。
                で、結局まだ買っていません。転職することにしたからで、住宅ローンは勤続年数を見られるぶん、
                転職直後だとまず通らない。<strong>順番を間違えました。</strong>
              </p>
              <p className="mt-3">
                ちょうど同じころに妻の妊娠がわかって、子どもは来年の初めに生まれます。
                いまは有休消化中、来月から新しい職場です。
                なので家はまだだし車も持っていませんが、ローンが組めるようになったらどちらも買いたいと思っています。
                その前に子どもが生まれる、という順番になりました。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">調べる係は、だいたい自分に回ってくる</h2>
              <p>
                家のときもそうでしたが、子どものことも結局同じでした。
                妻は健診のたびに説明を受けているぶん「知っている前提」で話が進むし、体調に波もあるので、
                制度を調べて期限を管理するのは自分の役になります。
                そのわりにこの立場向けの情報がなくて、出てくるのは産む側に向けたものか、
                「パパも協力しましょう」みたいな話ばかり。
                当日どこに電話するのか、退院日に何が要るのかは、どこにも書いていない。
              </p>
              <p className="mt-3">
                しかも見落とすと戻れないものがあります。
                うちは冬に生まれるので、0歳4月入園の申し込みが妊娠中の10〜12月に来る。
                産まれてから考え始めると次のチャンスは1年後で、これに気づいたのがつい最近でした。正直あせった。
                そういうものを忘れないように書き出したのが
                <Link href="/birth/checklist" className="text-blue-400 hover:underline font-semibold">
                  出産準備チェックリスト
                </Link>
                で、「夫が動くことだけ表示する」を押すと自分が手を動かす分だけに絞れます。
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
                    <p className="text-sm text-slate-300 mt-1">30代・都内在住・来月から新しい職場</p>
                    <p className="text-sm text-slate-300 mt-2">
                      不動産やお金の専門家ではありません。自分の番が回ってきて、そのつど調べているだけです。
                      なので「正解はこれです」とは書けません。書いているのは、
                      <strong>何を調べて、どこで判断が変わったか</strong>のほうです。
                    </p>
                    <p className="text-sm text-slate-300 mt-2">
                      自分で作った診断ツールが年収7.7倍を「安全」と出していたのに後から気づいて直した、
                      みたいな話も書いています。まだ途中なので、そういうことが普通に起きます。
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
