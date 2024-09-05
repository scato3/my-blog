"use client";

import { useEffect } from "react";

interface UtterancesProps {
  repo: string;
  issueTerm: string;
  label: string;
  theme: string;
}

export default function UtterancesComments({
  repo,
  issueTerm,
  label,
  theme,
}: UtterancesProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", repo);
    script.setAttribute("issue-term", issueTerm);
    script.setAttribute("label", label);
    script.setAttribute("theme", theme);
    script.setAttribute("crossorigin", "anonymous");

    document.getElementById("comments")?.appendChild(script);

    return () => {
      // cleanup function to remove script
      const commentSection = document.getElementById("comments");
      if (commentSection) {
        commentSection.innerHTML = "";
      }
    };
  }, [repo, issueTerm, label, theme]);

  return <div id="comments" className="mt-8"></div>;
}
