export default function LogoIcon({ 
  className = "w-24 h-auto", 
  ...props 
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 374 313"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M247 181L237.5 236.5L373.5 313L247 181Z" fill="currentColor" />
      <path d="M187.5 0L154 209L173.5 195L237.5 83L187.5 0Z" fill="currentColor" />
      <path 
        d="M373.5 313L253.761 110.5L197.5 195L237.5 181L212.5 222L0 313H187.5L237.5 236.5L247 181L373.5 313Z" 
        fill="currentColor" 
      />
      <path d="M187.5 0L0 313L154 209L187.5 0Z" fill="currentColor" />
    </svg>
  );
}