import { cn } from "@/lib/utils/cn";
import Link from "next/link";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  variant: keyof typeof ButtonVariants;
}

const ButtonVariants = {
  primary: "bg-primary-600 hover:bg-primary-700 text-white",
  secondary: "border border-gray-100 hover:text-text-50 text-text-100",
};

function Button(props: ButtonProps) {
  return (
    <Link
      className={cn(
        "block rounded-full font-inter text-button px-5 py-2.5 h-fit w-fit transition",
        ButtonVariants[props.variant],
        props.className
      )}
      href={props.href}
    >
      {props.children}
    </Link>
  );
}

export default Button;
