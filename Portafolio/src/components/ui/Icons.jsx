const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function ArrowRight({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function ArrowUpRight({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Download({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
    </svg>
  );
}
