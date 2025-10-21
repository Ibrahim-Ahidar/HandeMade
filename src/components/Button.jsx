import { Tw } from "../theme/Theme";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary: Tw.btn,
    secondary:
      "inline-flex items-center justify-center rounded-xl px-6 py-3 " +
      "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white font-medium transition-all " +
      "hover:bg-gray-400 dark:hover:bg-gray-600 hover:scale-105 active:scale-[.98] " +
      "border border-gray-400 dark:border-gray-600",
    outline:
      "inline-flex items-center justify-center rounded-xl px-6 py-3 border-2 " +
      "border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium transition-all " +
      "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white hover:scale-105 active:scale-[.98]",
  };

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
