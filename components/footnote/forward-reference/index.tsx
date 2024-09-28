"use client";

import "@/components/footnote/styles.css";

interface Props extends React.HTMLProps<HTMLDivElement> {
  href: string;
}

function FootnoteForwardReference({ href, children }: Props): JSX.Element {
  const scroll = () => {
    const footnote = document.querySelector(`[id="${href.replace("fn-", "fnref-")}"]`);

    if (footnote) {
      window.scrollTo({
        top: footnote.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      id={href}
      type="button"
      onClick={(e) => {
        e.preventDefault();
        scroll();
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          scroll();
        }
      }}
      className="footnote-superscript"
    >
      {children}
    </button>
  );
}

export default FootnoteForwardReference;
