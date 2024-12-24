interface HeadSecProps {
  header: string;
}
export default function HeadSec({ header }: HeadSecProps) {
  return (
    <>
      <div className="text-center">
        <div className="my-3 text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text font-bold">
          {header}
        </div>
      </div>
    </>
  );
}
