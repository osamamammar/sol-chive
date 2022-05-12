import { useState } from "react";

const useCopyURL = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyURL = () => {
    const el = document.createElement("input");
    el.value = `${window.location.href}/${email}`;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };
  return [handleCopyURL, copied];
};

export default useCopyURL;
