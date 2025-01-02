export default function CardLoader() {
  return (
    <div className="flex w-2/3 mx-auto h-screen flex-col gap-4 mt-8">
      <div className="skeleton h-40 w-full bg-gray-300 rounded-md animate-pulse"></div>
      <div className="skeleton h-12 w-40 bg-gray-300 rounded-md animate-pulse"></div>
      <div className="skeleton h-12 w-40 bg-gray-300 rounded-md animate-pulse"></div>
      <div className="skeleton h-28 w-full bg-gray-300 rounded-md animate-pulse"></div>
    </div>
  );
}
