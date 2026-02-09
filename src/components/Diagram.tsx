import { Card, CardContent } from "@/components/ui/card";

interface DiagramProps {
  content: string;
}

export function Diagram({ content }: DiagramProps) {
  return (
    <Card className="shadow-none py-0 my-5 bg-[#F7F6F3] border-[var(--code-border)]">
      <CardContent
        className="px-6 py-5 overflow-x-auto font-mono text-[0.72rem] leading-[1.7] text-[#5A5A52] whitespace-pre"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Card>
  );
}
