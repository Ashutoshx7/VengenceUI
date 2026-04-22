import React, { SVGProps } from 'react';

interface TailwindIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const TailwindIcon: React.FC<TailwindIconProps> = ({
  className = "",
  ...props
}) => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8 0C5.86662 0 4.53375 1.06625 4 3.19963C4.79975 2.13325 5.73337 1.73338 6.79975 2C7.40862 2.15175 7.84375 2.59325 8.32563 3.0825C9.10988 3.87838 10.0176 4.79975 12 4.79975C14.1332 4.79975 15.4663 3.73337 16 1.5995C15.2 2.66642 14.2667 3.0665 13.2001 2.79975C12.5914 2.64788 12.1568 2.2065 11.6743 1.71725C10.8905 0.921375 9.983 0 8 0ZM4 4.79975C1.86675 4.79975 0.53375 5.86613 0 8C0.799917 6.93308 1.73317 6.533 2.79975 6.79975C3.40863 6.95163 3.84375 7.393 4.32562 7.88225C5.10987 8.67813 6.01762 9.5995 8 9.5995C10.1332 9.5995 11.4663 8.53325 12 6.39988C11.2 7.46629 10.2667 7.86617 9.20013 7.5995C8.59138 7.44775 8.15675 7.00625 7.67425 6.517C6.8905 5.72113 5.983 4.79975 4 4.79975Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TailwindIcon;