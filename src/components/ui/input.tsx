import { forwardRef } from 'react';

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ ...props }, ref) => (
  <input
    {...props}
    ref={ref}
    className="h-6 w-full max-w-full border-none bg-transparent px-1 font-medium text-black outline-none placeholder:text-custom-100"
    placeholder="Search Characters"
  />
));

export { Input };
