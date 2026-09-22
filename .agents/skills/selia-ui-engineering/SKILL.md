---
name: selia-ui-engineering
description: Architectural guidelines and coding patterns derived from Nauval Azhar's Selia UI library (selia.earth). Enforces @base-ui/react headless primitives, data-slot DOM targeting, modern Tailwind v4 descendant selectors, typed CVA variants, composable compound components, and zero-boilerplate React.ComponentProps interfaces.
---

# Selia UI Engineering Directive

## 1. Overview & Philosophy
**Selia** is an opinionated, cohesive, developer-first React UI architecture pioneered by **Nauval Azhar** ([github.com/nauvalazhar/selia](https://github.com/nauvalazhar/selia), [selia.earth](https://selia.earth)).

This protocol enforces building frontend components that are:
1. **Accessible & Unstyled at Root**: Built upon **`@base-ui/react`** (MUI's unstyled headless primitive library) rather than reinventing accessibility or relying on bulky runtime wrappers.
2. **Slot-Driven**: Every element exposes an explicit semantic `data-slot="..."` attribute.
3. **Styling Without Prop-Drilling**: Styling adapts automatically using modern Tailwind CSS descendant and child selectors (`*:data-[slot=...]`, `has-[[data-slot=...]]`) rather than passing boolean flags.
4. **Clean & Modern TypeScript**: Uses `React.ComponentProps<'element'>` directly without boilerplate `forwardRef` or manual interface bloating.
5. **Composable Compound Architecture**: Complex components are broken down into intuitive sub-components (`Header`, `Title`, `Body`, `Footer`, `Action`).

---

## 2. The 6 Core Rules of Selia Architecture

### Rule 1: Base UI as the Headless Primitive Layer
Interactive elements that involve state, focus management, ARIA roles, or popups (Buttons, Dialogs, Tooltips, Tabs, Switches, Menus, Popovers) must wrap **`@base-ui/react`**:
```tsx
import { Button as BaseButton } from '@base-ui/react/button';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
```

### Rule 2: Mandatory `data-slot` on Every DOM Node
Every element rendered by a primitive or compound component MUST declare an explicit semantic `data-slot`:
- Root container: `data-slot="card"`, `data-slot="section"`, `data-slot="button"`
- Header / Title / Description: `data-slot="card-header"`, `data-slot="card-title"`, `data-slot="card-description"`
- Actions: `data-slot="card-header-action"`, `data-slot="section-action"`
- Body / Content: `data-slot="card-body"`, `data-slot="section-content"`
- Footer: `data-slot="card-footer"`

### Rule 3: Slot-Targeted Tailwind Selectors
Instead of adding boolean props (e.g. `hasIcon={true}`, `alignActions="right"`), configure parent styling to coordinate children using CSS slot selectors:
- Descendant slot targeting: `*:data-[slot=card-description]:row-start-2`
- Presence-based styling: `has-[[data-slot=iconbox]]:*:data-[slot=card-description]:col-start-2`
- Sibling conditional: `*:[[data-slot=card-title]:not(:has(+[data-slot=card-description]))]:row-span-2`
- Nested icon scaling: `[&>svg:not([class*=size-])]:size-4`
- Descendant padding reset: `p-6 **:data-[slot=item]:px-6`

### Rule 4: CVA (`class-variance-authority`) with Array Syntax
Define component variants using `cva` with arrays of strings for base styles:
```tsx
export const buttonVariants = cva(
  [
    'relative font-medium select-none cursor-pointer',
    'inline-flex justify-center items-center gap-2 transition-colors',
    'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2',
    'data-disabled:cursor-not-allowed data-disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: '...',
        secondary: '...',
        outline: '...',
        ghost: '...',
      },
      size: {
        sm: 'h-8 px-3 text-xs gap-1.5 rounded-md',
        md: 'h-9 px-4 text-sm gap-2 rounded-lg',
        lg: 'h-10 px-5 text-sm gap-2.5 rounded-lg',
        icon: 'size-9 p-0 rounded-lg justify-center',
        'icon-sm': 'size-8 p-0 rounded-md justify-center',
      },
      pill: {
        true: 'rounded-full',
      },
      block: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);
```

### Rule 5: Zero-Boilerplate Type Signatures
In React 19 and modern TypeScript, avoid manual `React.forwardRef` wrapping and boilerplate interface declarations. Use clean intersection types:
```tsx
// Clean primitive:
export function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn('rounded-xl border bg-card text-card-foreground', className)}
      {...props}
    />
  );
}

// Primitive with CVA variants:
export function Button({
  variant,
  size,
  pill,
  block,
  className,
  ...props
}: React.ComponentProps<typeof BaseButton> & VariantProps<typeof buttonVariants>) {
  return (
    <BaseButton
      data-slot="button"
      data-size={size}
      {...props}
      className={cn(buttonVariants({ variant, size, pill, block, className }))}
    />
  );
}
```

### Rule 6: Selia Naming Conventions
- Prefer **`CardBody`** over `CardContent` (provide `export const CardContent = CardBody;` for backward compatibility).
- Provide **`CardHeaderAction`** for trailing actions in card headers.
- Use **`pill?: boolean`** for rounded-full modifiers.
- Use **`block?: boolean`** for full-width components.
- Use semantic token names: `bg-card`, `border-card-separator`, `ring-card-border`, `text-muted`.

---

## 3. Blueprint Implementations

### Blueprint A: Card Component Suite (`card.tsx`)
```tsx
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn('rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs transition-colors', className)}
      {...props}
    />
  );
}

export const cardHeaderVariants = cva(
  ['p-5 sm:p-6 border-b border-neutral-100 dark:border-neutral-800/60 flex flex-col gap-1.5'],
  {
    variants: {
      align: {
        default: 'items-start',
        center: 'items-center text-center',
        right: 'items-end text-right',
      },
    },
    defaultVariants: { align: 'default' },
  },
);

export function CardHeader({
  align,
  className,
  ...props
}: React.ComponentProps<'header'> & VariantProps<typeof cardHeaderVariants>) {
  return (
    <header
      data-slot="card-header"
      className={cn(cardHeaderVariants({ align }), className)}
      {...props}
    />
  );
}

export function CardHeaderAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header-action"
      className={cn('ml-auto flex items-center gap-2', className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      data-slot="card-title"
      className={cn('font-semibold text-base sm:text-lg tracking-tight', className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="card-description"
      className={cn('text-xs sm:text-sm text-neutral-500 leading-relaxed', className)}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-body"
      className={cn('p-5 sm:p-6', className)}
      {...props}
    />
  );
}

export const CardContent = CardBody;

export function CardFooter({ className, ...props }: React.ComponentProps<'footer'>) {
  return (
    <footer
      data-slot="card-footer"
      className={cn('flex items-center justify-between p-5 sm:p-6 pt-0 border-t border-neutral-100 dark:border-neutral-800/60 mt-auto', className)}
      {...props}
    />
  );
}
```

### Blueprint B: Section Component Suite (`section.tsx`)
```tsx
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const sectionVariants = cva('mb-9 print:mb-4', {
  variants: {
    spacing: {
      default: 'mb-9 print:mb-4',
      tight: 'mb-6 print:mb-3',
      loose: 'mb-12 print:mb-6',
    },
  },
  defaultVariants: { spacing: 'default' },
});

export interface SectionProps
  extends React.ComponentProps<'section'>,
    VariantProps<typeof sectionVariants> {
  title?: string;
}

export function Section({
  spacing,
  className,
  title,
  id,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      id={id}
      className={cn(sectionVariants({ spacing }), className)}
      {...props}
    >
      {title ? (
        <>
          <SectionHeader>
            <SectionTitle>{title}</SectionTitle>
          </SectionHeader>
          <SectionContent>{children}</SectionContent>
        </>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionHeader({ className, ...props }: React.ComponentProps<'header'>) {
  return (
    <header
      data-slot="section-header"
      className={cn('pb-2 mb-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between', className)}
      {...props}
    />
  );
}

export function SectionTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      data-slot="section-title"
      className={cn('text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900 dark:text-neutral-100', className)}
      {...props}
    />
  );
}

export function SectionAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="section-action"
      className={cn('text-xs font-mono text-neutral-500 flex items-center gap-1.5', className)}
      {...props}
    />
  );
}

export function SectionContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="section-content"
      className={cn('space-y-5 print:space-y-3', className)}
      {...props}
    />
  );
}
```

---

## 4. Anti-Patterns to Ban

| Banned Anti-Pattern | Required Selia Pattern |
|---|---|
| Monolithic components with 10+ boolean flags (`hasIcon`, `hasDescription`, `isCentered`) | Break into compound components (`CardTitle`, `CardDescription`, `CardHeaderAction`). |
| Missing `data-slot` on rendered tags | Every tag in a primitive must have `data-slot="[name]"`. |
| Wrapping simple functional components in `React.forwardRef` | Use `React.ComponentProps<'tag'>` directly in React 19. |
| Inflexible string template classes: `` `px-4 ${className}` `` | Always use `cn()` (`clsx` + `tailwind-merge`). |
| Building interactive custom state from raw `<div>` | Wrap `@base-ui/react` primitives (`Button`, `Dialog`, `Tabs`, etc.). |
| Renaming standard slots arbitrarily | Maintain standard slot names (`card`, `card-header`, `card-body`, `card-footer`). |
