import { useState } from "react";
import { Link } from "react-router-dom";

export default function InteractiveButton({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Detect if we're in dark mode
  const isDark = document.documentElement.classList.contains("dark");

  const variants = {
    primary: {
      base: "hover:text-blue-600 dark:hover:text-blue-300 hover:scale-105 relative p-2 sm:p-3 px-4 sm:px-6 m-1 sm:m-2 rounded-2xl border overflow-hidden transition-all duration-300",
      border: "border-gray-400 dark:border-gray-500",
      hoverBg: isDark
        ? `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(229, 231, 235, 0.6), rgba(55, 65, 81, 0.6) 80%)`
        : `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(96, 165, 250, 0.4), rgba(37, 99, 235, 0.8) 80%)`,
      defaultBg: isDark ? "rgba(55, 65, 81, 0.6)" : "rgba(59, 130, 246, 0.8)",
    },
    secondary: {
      base: "hover:text-blue-600 dark:hover:text-blue-300 hover:scale-105 relative p-2 sm:p-3 px-6 sm:px-9 m-1 sm:m-2 rounded-2xl border overflow-hidden transition-all duration-300",
      border: "border-gray-400 dark:border-gray-500",
      hoverBg: isDark
        ? `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(229, 231, 235, 0.6), rgba(55, 65, 81, 0.6) 80%)`
        : `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(156, 163, 175, 0.4), rgba(107, 114, 128, 0.8) 80%)`,
      defaultBg: isDark ? "rgba(55, 65, 81, 0.6)" : "rgba(107, 114, 128, 0.8)",
    },
  };

  const variantStyle = variants[variant] || variants.primary;

  const buttonStyle = {
    background: disabled
      ? "rgba(100, 100, 100, 0.6)"
      : hovered
      ? variantStyle.hoverBg
      : variantStyle.defaultBg,
  };

  const buttonProps = {
    onMouseEnter: () => !disabled && setHovered(true),
    onMouseLeave: () => !disabled && setHovered(false),
    onMouseMove: handleMouseMove,
    className: `${variantStyle.base} ${
      variantStyle.border
    } ${className} text-white font-medium ${
      disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : ""
    }`,
    style: buttonStyle,
    ...props,
  };

  if (to) {
    return (
      <Link to={to} {...buttonProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
