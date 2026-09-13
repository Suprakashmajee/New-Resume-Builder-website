export default function Logo({ className = "h-10 lg:h-[52px]" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 248 60"
      className={className}
      aria-label="AiResumeDraft"
    >
      <rect width="60" height="60" fill="#F6F6F9" rx="8" />
      <path
        fill="url(#logoA)"
        d="M26.31 45.44c-1.588.883-2.117 2.824-1.235 4.412.883 1.589 2.824 2.118 4.412 1.236l7.412-4.236v-.176l-3.353-5.647-7.235 4.412z"
      />
      <path
        fill="url(#logoB)"
        d="M40.605 22.677l-12.706 7.235h-.176l-.706-1.06v-.175l16.94-9.706c.53-.353.707-1.06.354-1.412L38.487 7.5h-.176L15.899 20.382c-3.176 1.941-4.412 6-2.47 9.353l11.823 20.47c-.882-1.588-.176-3.529 1.235-4.411l7.589-4.412c5.647-3.353 6.882-3.883 12-6.883.529-.352.706-1.058.352-1.411-1.235-2.294-4.235-7.412-5.823-10.235z"
      />
      <rect width="59.9" height="59.9" x="0.05" y="0.05" stroke="#000" strokeOpacity="0.33" strokeWidth="0.1" rx="7.95" />
      <text x="72" y="38" fill="#2B0B3C" fontFamily="DM Sans, sans-serif" fontSize="22" fontWeight="700" letterSpacing="-0.6">
        airesumedraft
      </text>
      <defs>
        <linearGradient id="logoA" x1="21.7" x2="40.4" y1="44.2" y2="48.7" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4E037A" />
          <stop offset="0.351" stopColor="#2B0B3C" />
          <stop offset="1" stopColor="#9400D3" />
        </linearGradient>
        <linearGradient id="logoB" x1="17.6" x2="46.1" y1="36.9" y2="20.4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F857A6" />
          <stop offset="1" stopColor="#FF5858" />
        </linearGradient>
      </defs>
    </svg>
  );
}
