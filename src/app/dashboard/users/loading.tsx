export default function Loading() {
  return (
    <div className="p-8 bg-gray-50">
      <div className="h-8 w-48 bg-gray-200 rounded mb-6 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className="rounded-lg bg-white shadow-sm overflow-hidden"
          >
            <div className="h-52 bg-gray-200 animate-pulse" />
            <div className="p-6">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
