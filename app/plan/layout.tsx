import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "家・出産・車をまとめて試算｜30代のライフプラン診断",
  description:
    "家を買う、子どもを迎える、車を持つ。30代に重なりやすい予定を選び、毎月の余力と負担が大きくなる時期を無料・匿名で試算できます。",
  alternates: { canonical: "/plan" },
  openGraph: {
    title: "家・出産・車をまとめて試算｜30Lab",
    description: "30代に重なりやすい大きな予定を、選んだテーマだけまとめて試算。",
    type: "website",
  },
};

export default function PlanLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
