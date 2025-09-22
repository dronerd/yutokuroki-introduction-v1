"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function Banner() {
  const pathname = usePathname();
  const [previousPage, setPreviousPage] = useState("/");


  const target = pathname === "/extra" ? previousPage : "/extra";
  const label = pathname === "/extra" ? "← Project Fluence代表 黒木勇人のプロファイル (Yuto Kuroki's Profile)" : "～あなたの未来に、英語の力を～ Project Fluenceについて →";

  return (
    <div className="w-full bg-blue-600 text-white text-center py-3">
      <Link href={target} className="text-lg font-medium hover:underline">
        {label}
      </Link>
    </div>
  );
}