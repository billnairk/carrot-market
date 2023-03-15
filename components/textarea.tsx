interface TextareaProps {
  rows: number;
  placeholder?: string;
}

export default function Textarea({ rows, placeholder }: TextareaProps) {
  return (
    <div>
      <label className="text-sm text-gray-500 font-bold">Description</label>
      <textarea
        className="shadow-md w-full rounded-md border-gray-400 focus:ring-purple-300 focus:outline-none focus:border-purple-300"
        rows={rows}
        placeholder={placeholder}
      />
    </div>
  );
}
