"use client";

export default function AboutError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1>Something Went Wrong! Please try again.</h1>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}
