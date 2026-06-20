import * as React from "react";
import { cn } from "@/lib/utils";

function Card({
  className,
  size = "default",
  ...props
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        `
        group/card
        flex flex-col
        overflow-hidden
        rounded-2xl
        bg-[#1A1D29]/95
        backdrop-blur-md
        border border-white/10
        shadow-2xl
        text-white
        transition-all
        duration-300
        hover:border-pink-500/50
        hover:shadow-pink-500/10
        py-4
        `,
        className
      )}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "px-6 pt-6 pb-2 flex flex-col gap-1",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-2xl font-bold text-white",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-sm text-slate-400",
        className
      )}
      {...props}
    />
  );
}

function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-6 py-4",
        className
      )}
      {...props}
    />
  );
}

function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        `
        flex items-center
        px-6 py-4
        border-t border-white/10
        bg-white/5
        `,
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};