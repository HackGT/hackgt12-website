import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-101 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  imageSrc,
  paddingX,
  isVertical = false,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  imageSrc: string;
  paddingX: number;
  isVertical?: boolean;
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "relative bg-transparent p-0 border-none shadow-none overflow-hidden fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-101 focus:outline-none",
          isVertical
            ? "max-h-[72vh] w-auto"
            : "w-full max-w-[calc(100%-2rem)] sm:max-w-xl",
          className
        )}
        {...props}
      >
        {/* Background Image */}
        <img
          src={imageSrc}
          alt="Dialog Background"
          className={cn(
            "pointer-events-none border-none",
            isVertical
              ? "max-h-[72vh] w-auto h-auto object-contain"
              : "w-full h-full object-contain"
          )}
        />
        {/* Layered Content */}
        <div 
          style={{
            paddingLeft: `${paddingX}%`,
            paddingRight: `${paddingX}%`,
          }}
          className={cn(
            "absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10 text-center",
            isVertical ? "mt-8" : ""
          )}
        >
          {children}
        </div>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center text-brown-dark", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-2xl sm:text-4xl leading-none font-bold font-seasons", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-brown-dark font-poppins text-base sm:text-lg", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
