import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "このサイトについて｜30Lab",
  description: "30Labは、マンション購入・車・子育て費用などの大きなお金の決断を、数字で整理するための無料ツールサイトです。運営者情報・サイトの目的・免責事項をご説明します。",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">このサイトについて</h1>
          <p className="text-sm text-gray-500 mb-8">最終更新日：2026年3月1日</p>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-8">

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">サイトの目的</h2>
              <p>
                30Labは、<strong>30代が直面する「大きなお金の決断」を、数字で整理するための無料ツールサイト</strong>です。
              </p>
              <p className="mt-3">
                「マンションを買っていいのか」「車はどの選択肢が一番コストが低いか」「子育て費用はいくら必要か」——
                こうした問いに対して、感覚や他人の意見ではなく、<strong>自分の年収・生活費・ライフプランを入力して数字で答えを出す</strong>ことを目指しています。
              </p>
              <p className="mt-3">
                当サイトのツールはすべて<strong>完全無料・匿名・データ保存なし・営業電話なし</strong>で利用できます。
                入力した情報がサーバーに送信されることはなく、あなたのブラウザ上だけで計算が行われます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">運営者情報</h2>
              <div className="bg-gray-50 rounded-xl p-5 space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0">
                    🏠
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base">たろう（運営者）</p>
                    <p className="text-sm text-gray-600 mt-1">大企業勤務・アラサー・都内在住</p>
                    <p className="text-sm text-gray-600 mt-2">
                      「年収はそれなりにある。でも都内マンション、本当に買っていいのか正直わからない」——
                      自分自身がそんな悩みを持ったことがきっかけでこのサイトを作りました。
                      不動産会社の営業トークや「みんな買ってるから大丈夫」という空気感ではなく、
                      純粋に数字で判断できる場所が欲しかったのです。
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      住宅ローン・不動産市況・ファイナンシャルプランニングについて、
                      実際に複数の不動産会社・銀行へのヒアリング・FP相談を重ねた上でコンテンツを作成しています。
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <a href="https://x.com/30lab_jp" target="_blank" rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline">𝕏 @30lab_jp</a>
                      <span className="text-gray-300">|</span>
                      <a href="https://note.com/30lab" target="_blank" rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline">note</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">提供ツール一覧</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🏠</span>
                  <div>
                    <Link href="/mansion" className="font-semibold text-blue-600 hover:underline">マンション購入診断</Link>
                    <p className="text-sm text-gray-600">年収・生活費・金利から「無理なく買える価格」を算出。返済比率・負担率のチェックも可能。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🔍</span>
                  <div>
                    <Link href="/check" className="font-semibold text-blue-600 hover:underline">物件診断</Link>
                    <p className="text-sm text-gray-600">気になる物件の坪単価・管理費・修繕積立金の適正チェック＋10年後の推定売却価格を算出。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🚗</span>
                  <div>
                    <Link href="/car" className="font-semibold text-blue-600 hover:underline">車コスト診断</Link>
                    <p className="text-sm text-gray-600">購入・ローン・カーシェア・リースを10年総コストで比較。都内在住者向けの現実的なコスト計算。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">👶</span>
                  <div>
                    <Link href="/child" className="font-semibold text-blue-600 hover:underline">子育て費用試算</Link>
                    <p className="text-sm text-gray-600">0歳〜22歳の子育て費用を進路パターン別にシミュレーション。</p>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">コンテンツの信頼性について</h2>
              <p>
                当サイトのコラム記事は、以下の情報源をもとに作成しています。
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
                <li>国土交通省・財務省・総務省などの公的統計データ</li>
                <li>日本銀行・主要都市銀行・ネット銀行の公開金利情報</li>
                <li>不動産経済研究所・東日本不動産流通機構（REINS）の市況データ</li>
                <li>実際の不動産会社・FP（ファイナンシャルプランナー）へのヒアリング内容</li>
              </ul>
              <p className="mt-3">
                記事の内容は作成時点の情報に基づいており、金利・税制・市況は変動するため、最新情報は各公式サイトでご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">免責事項</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-sm">
                  当サイトのツール・コラム記事は情報提供を目的としており、<strong>特定の金融商品・不動産物件・ローンの購入・申込みを勧誘するものではありません</strong>。
                </p>
                <p className="text-sm mt-2">
                  診断結果はあくまでも参考値であり、実際の融資審査・物件購入の可否を保証するものではありません。
                  具体的な購入判断・ローン選定については、銀行・不動産会社・ファイナンシャルプランナーなどの専門家にご相談ください。
                </p>
                <p className="text-sm mt-2">
                  当サイトの情報を利用した結果生じたいかなる損害についても、運営者は一切の責任を負いかねます。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">お問い合わせ</h2>
              <p>
                サイトに関するお問い合わせ・ご意見は下記メールアドレスまでお送りください。
              </p>
              <p className="mt-2 font-mono text-sm bg-gray-50 px-3 py-2 rounded-lg inline-block">
                tokyo.mansion.explore@gmail.com
              </p>
            </section>

          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <Link href="/" className="text-sm text-blue-600 hover:underline">← トップページへ戻る</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
