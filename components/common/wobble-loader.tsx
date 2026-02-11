/**
 * Wobble loader component using the movement animation from globals.css
 * Displays 3 dots that bounce up and down
 */
export function WobbleLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-1 py-8 ${className}`}>
      <div
        className="w-2 h-2 bg-gray-400 rounded-full"
        style={{
          animation: "movement 1.4s ease-in-out infinite",
          animationDelay: "0s",
        }}
      />
      <div
        className="w-2 h-2 bg-gray-400 rounded-full"
        style={{
          animation: "movement 1.4s ease-in-out infinite",
          animationDelay: "0.2s",
        }}
      />
      <div
        className="w-2 h-2 bg-gray-400 rounded-full"
        style={{
          animation: "movement 1.4s ease-in-out infinite",
          animationDelay: "0.4s",
        }}
      />
    </div>
  );
}
