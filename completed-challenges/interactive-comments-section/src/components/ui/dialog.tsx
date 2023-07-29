"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

type OverlayElement = React.ElementRef<typeof DialogPrimitive.Overlay>;
type OverlayProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;

type ContentElement = React.ElementRef<typeof DialogPrimitive.Content>;
type ContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;

type TitleElement = React.ElementRef<typeof DialogPrimitive.Title>;
type TitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;

type DescriptionElement = React.ElementRef<typeof DialogPrimitive.Description>;
type DescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

type CloseElement = React.ElementRef<typeof DialogPrimitive.Close>;
type CloseProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>;

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({
  className,
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
      {children}
    </div>
  </DialogPrimitive.Portal>
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<OverlayElement, OverlayProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in fixed inset-0 z-50 bg-[#00000099] backdrop-blur-sm transition-all duration-100",
        className
      )}
      {...props}
    />
  )
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogClose = React.forwardRef<CloseElement, CloseProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Close
      ref={ref}
      className={cn(
        "rounded bg-gray-500 px-8 py-3 text-white transition-colors hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      <span> NO, CANCEL</span>
    </DialogPrimitive.Close>
  )
);
DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogContent = React.forwardRef<ContentElement, ContentProps>(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 fixed z-50 flex w-full flex-col rounded-xl bg-white p-8 shadow-lg sm:rounded-lg",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row  sm:space-x-2", className)}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<TitleElement, TitleProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn("text-2xl font-semibold text-blue-700", className)}
      {...props}
    />
  )
);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  DescriptionElement,
  DescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-gray-300", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
