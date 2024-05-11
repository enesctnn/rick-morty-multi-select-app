import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement>(({ ...props }, ref) => (
  <input
    {...props}
    ref={ref}
    className="placeholder:text-custom-100 h-6 w-full max-w-full border-none bg-transparent px-1 font-medium text-black outline-none"
    placeholder="Search Characters"
  />
));

export { Input };

