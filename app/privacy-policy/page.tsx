import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜30Lab",
  description: "30Labのプライバシーポリシーです。個人情報の取り扱い、Cookieの使用、Google Analytics・Google AdSenseの利用について説明します。",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">プライバシーポリシー</h1>
          <p className="text-sm text-gray-500 mb-8">最終更新日：2026年3月1日</p>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-8">

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">1. 基本方針</h2>
              <p>
                30Lab（以下「当サイト」）は、ユーザーの個人情報の保護を重要事項と認識し、個人情報の保護に関する法律（個人情報保護法）および関連法令を遵守します。
                当サイトが提供するマンション購入診断・物件診断・車コスト診断・子育て費用試算などのツールは、<strong>完全無料・匿名・データ保存なし</strong>で利用できます。
                入力された診断データはサーバーに送信されず、お使いのブラウザ上のみで処理されます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">2. 収集する情報</h2>
              <h3 className="font-semibold text-gray-800 mb-2">（1）診断ツールへの入力情報</h3>
              <p>
                当サイトの診断ツールに入力された年収・物件価格・家族構成などの情報は、<strong>お使いのブラウザ内でのみ処理</strong>され、当サイトのサーバーには一切送信・保存されません。
              </p>
              <h3 className="font-semibold text-gray-800 mt-4 mb-2">（2）アクセス解析情報</h3>
              <p>
                当サイトはGoogle Analytics（Googleアナリティクス）を使用してアクセス情報を収集しています。収集する情報には、ページビュー数・滞在時間・使用デバイス・地域情報などが含まれます。
                これらの情報は個人を特定するものではなく、サービス改善目的にのみ使用します。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">3. Cookieの使用</h2>
              <p>
                当サイトでは、以下の目的でCookieを使用しています。
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Google Analytics：</strong>サイトの利用状況を分析するため</li>
                <li><strong>Google AdSense：</strong>ユーザーの興味・関心に基づいた広告を表示するため</li>
              </ul>
              <p className="mt-3">
                ブラウザの設定からCookieを無効にすることができますが、その場合、当サイトの一部機能が正常に動作しない場合があります。
                Cookieの管理方法については、ご使用のブラウザのヘルプをご参照ください。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">4. Google Analytics について</h2>
              <p>
                当サイトはGoogle LLCが提供するアクセス解析ツール「Google Analytics」を使用しています。
                Google Analyticsはトラフィックデータの収集のためにCookieを使用しています。
                このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
                この機能はCookieを無効にすることで収集を拒否することができます。
              </p>
              <p className="mt-2">
                Google Analyticsの利用規約については
                <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">こちら</a>
                をご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">5. Google AdSense について</h2>
              <p>
                当サイトは、Google LLCが提供する広告配信サービス「Google AdSense」を利用しています。
                Google AdSenseは、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
                Cookieを使用することで、Googleおよびそのパートナーはユーザーへの広告を最適化します。
              </p>
              <p className="mt-2">
                ユーザーはGoogleの広告設定ページ（
                <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://adssettings.google.com/</a>
                ）でパーソナライズ広告を無効にすることができます。
                詳細はGoogleの
                <a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">プライバシーポリシー</a>
                をご参照ください。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">6. アフィリエイトプログラムについて</h2>
              <p>
                当サイトは、A8.netを通じてアフィリエイトプログラムに参加しています。
                当サイトのリンクを経由して商品・サービスを申し込んだ場合、当サイトに報酬が発生することがあります。
                紹介しているサービスの評価・内容は当サイトの独自見解であり、広告主の意向を反映したものではありません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">7. 個人情報の第三者提供</h2>
              <p>
                当サイトは、法令に基づく場合を除き、収集した個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">8. プライバシーポリシーの変更</h2>
              <p>
                当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。
                変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じます。
                重要な変更がある場合は、サイト上でお知らせします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">9. お問い合わせ</h2>
              <p>
                本プライバシーポリシーに関するお問い合わせは、下記のメールアドレスまでご連絡ください。
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
