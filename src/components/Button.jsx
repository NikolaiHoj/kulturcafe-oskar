import React from "react";
import clsx from "clsx";

const sizes = {
	xs: "px-3 py-[3px] text-sm rounded font-medium leading-4",
	sm: "px-3 py-1.5 text-sm rounded-md font-normal",
	md: "px-5 py-3 rounded-xl text-base font-medium",
	lg: "px-8 py-4 leading-6 rounded-xl text-base font-semibold",
};

const colors = {
	solidBlue:
		"bg-blue-500 text-white disabled:bg-blue-500 disabled:opacity-50 highlight-white/25",
	solidGreen:
		"bg-green-500 text-white disabled:bg-neutral-500 disabled:opacity-50",
	outlineGreen:
		"bg-transparent text-green-500 border border-green-300 hover:bg-green-300/20",
	outlineOrange:
		"bg-transparent text-neutral-100 border border-orange-500 hover:bg-orange-300/20",
	solidWhite: "bg-white text-green-500",
	outlineWhite: "bg-transparent text-white border border-white",
};

export function Button({
	children,
	as: Tag = "button",
	color = "solidGreen",
	size = "md",
	className,
	loading,
	...props
}) {
	return (
		<Tag
			className={clsx(
				"text-center inline-flex items-center justify-center transition-colors",
				sizes[size],
				colors[color],
				className
			)}
			{...props}
		>
			{children}
		</Tag>
	);
}
