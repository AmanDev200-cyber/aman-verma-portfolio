/**
 * Minimal utility to merge class names conditionally.
 * Replaces functionality of clsx + tailwind-merge for basic usage.
 */
export function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(" ");
}
