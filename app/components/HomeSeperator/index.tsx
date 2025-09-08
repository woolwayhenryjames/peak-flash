export const HomeSeparator = () => {
  // Generate dots configuration
  const dots = Array.from({ length: 12 }, (_, i) => ({
    id: `dot-${i}-${Math.random().toString(36).substr(2, 9)}`, // Unique ID
    cx: 50 + i * 30 + Math.random() * 20, // Spread across width with some randomness
    r: 0.8 + Math.random() * 0.8, // Random size between 0.8 and 1.6
    color: ['#A8A3FF', '#6366f1', '#8b5cf6', '#a855f7'][
      Math.floor(Math.random() * 4)
    ],
    duration: 3 + Math.random() * 3, // Random duration between 3-6 seconds
    delay: Math.random() * 4, // Random delay up to 4 seconds
    opacity: 0.4 + Math.random() * 0.4, // Random opacity between 0.4-0.8
  }));

  return (
    <div className="relative w-full">
      <svg
        className="w-full"
        viewBox="0 0 390 184"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Home Separator</title>
        <g>
          <path
            d="M0 0h390v178H0z"
            fill="url(#prefix__paint0_linear_175_1707)"
          />
          {/* Animated dots flying upward - positioned under the bottom path */}
          <g>
            {dots.map((dot) => (
              <circle
                cx={dot.cx}
                cy="180"
                fill={dot.color}
                key={dot.id}
                opacity="0"
                r={dot.r}
              >
                <animate
                  attributeName="cy"
                  begin={`${dot.delay}s`}
                  dur={`${dot.duration}s`}
                  repeatCount="indefinite"
                  values="180;-10"
                />
                <animate
                  attributeName="opacity"
                  begin={`${dot.delay}s`}
                  dur={`${dot.duration}s`}
                  repeatCount="indefinite"
                  values={`0;${dot.opacity};${dot.opacity * 0.5};0`}
                />
              </circle>
            ))}
          </g>
          <path
            d="M69.295 56H-4v127.5h398V63.09c0 20.51-66.202 25.637-99.303 25.637H153.624c-2.276-.453-2.786-1.073-3.153-2.181V81.09c-.762-1.297-1.442-1.785-3.152-2.182h-30.737c-2.464.067-3.205.595-3.94 2.182v6c-.503 1.358-1.239 1.656-3.153 1.636H75.6c-2.3-.474-3.084-1.018-3.152-2.727V58.727c-.123-1.57-.68-2.225-3.153-2.727z"
            fill="#0C0C14"
            stroke="url(#prefix__paint1_linear_175_1707)"
            strokeWidth=".5"
          />
          <path
            d="M0 178h391v1110H0z"
            fill="url(#prefix__paint2_linear_175_1707)"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="prefix__paint0_linear_175_1707"
            x1="195"
            x2="195"
            y1="0"
            y2="89"
          >
            <stop />
            <stop offset="1" stopColor="#161628" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="prefix__paint1_linear_175_1707"
            x1="157"
            x2="187"
            y1="149.5"
            y2="88.5"
          >
            <stop stopColor="#171342" />
            <stop offset="1" stopColor="#A8A3FF" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="prefix__paint2_linear_175_1707"
            x1="195.5"
            x2="195.5"
            y1="178"
            y2="1288"
          >
            <stop stopColor="#0C0C14" />
            <stop offset=".563" stopColor="#0F0F1D" />
            <stop offset=".697" stopColor="#0D0D15" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
