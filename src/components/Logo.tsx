export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 45L30 15L45 45H15Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M22.5 37.5L30 22.5L37.5 37.5H22.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
