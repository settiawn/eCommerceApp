interface Tag {
  tag: string;
}
export function Tag({ tag }: Tag) {
  return <div className="bg-red-500 rounded-lg p-1 px-2">{tag}</div>;
}
