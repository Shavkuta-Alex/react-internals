import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface FileEntry {
  file: string;
  description: string;
}

export function FileTable({ files }: { files: FileEntry[] }) {
  return (
    <Table className="my-4 text-[0.82rem]">
      <TableHeader>
        <TableRow>
          <TableHead className="font-[var(--font-content)] font-semibold text-[0.72rem] tracking-wide uppercase text-muted-foreground">
            File
          </TableHead>
          <TableHead className="font-[var(--font-content)] font-semibold text-[0.72rem] tracking-wide uppercase text-muted-foreground">
            What it does
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((f) => (
          <TableRow key={f.file}>
            <TableCell className="align-top font-mono text-[0.78rem] text-primary whitespace-nowrap">
              {f.file}
            </TableCell>
            <TableCell className="align-top text-muted-foreground">
              {f.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
