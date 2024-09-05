import { getTzDay } from "@/util/days";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-28 gap-3">
      <div className="flex items-center justify-center gap-3">
        <Link href="https://github.com/scato3" target="_blank">
          <GithubIcon size={20} className="text-slate-500" />
        </Link>
      </div>
      <span className="text-xs text-slate-500">
        Copyright © {getTzDay(new Date()).get("year")} Hyunsu Shin
      </span>
    </footer>
  );
}
