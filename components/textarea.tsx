interface TextareaProps {
  rows: number;
  placeholder?: string;
}

export default function Textarea({ rows, placeholder }: TextareaProps) {
  return (
    <div>
      <textarea
        className="shadow-md my-1 w-full rounded-md border-gray-400 focus:ring-purple-300 focus:outline-none focus:border-purple-300"
        rows={rows}
        placeholder={placeholder}
      />
    </div>
  );
}
