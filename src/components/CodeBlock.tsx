import { useCallback, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CodeBlockProps {
  code: string;
  label?: string;
}

export function CodeBlock({ code, label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleCopy = useCallback(() => {
    // Strip HTML tags to get plain text
    const tmp = document.createElement("div");
    tmp.innerHTML = code;
    const text = tmp.textContent ?? "";

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1500);
    });
  }, [code]);

  return (
    <pre className="group bg-[#F7F6F3] text-[#3B3B37] rounded-md px-5 py-4 overflow-x-auto my-4 text-[0.78rem] leading-[1.75] border border-[var(--code-border)] relative">
      <code dangerouslySetInnerHTML={{ __html: code }} />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={handleCopy}
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#B0AFA8] hover:text-[#3B3B37] hover:bg-[#E2E1DC]"
              aria-label={copied ? "Copied" : "Copy code"}
            >
              {copied ? (
                <Check className="size-3.5" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            {copied ? "Copied!" : "Copy"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {label && (
        <span className="absolute top-2.5 right-10 font-mono text-[0.6rem] text-[#B0AFA8] tracking-wide uppercase pointer-events-none">
          {label}
        </span>
      )}
    </pre>
  );
}
