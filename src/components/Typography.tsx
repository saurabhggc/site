import clsx from 'clsx'

const Text = <E extends Element = 'h2'>({
  as,
  children,
  size = 'medium',
  className,
  ...rest
}: HProps<E>) => {
  const Component = as || 'h2'

  return (
    <Component className={clsx(styles[size], className)} {...rest}>
      {children}
    </Component>
  )
}

export default Text

type Element = React.ElementType

type HOwnProps<E extends Element> = {
  /** @default 'h2' */
  as?: E
  /** @default 'medium' */
  size?: keyof typeof styles
  className?: string
  children: React.ReactNode
}

export type HProps<E extends Element> = HOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof HOwnProps<E>>

const styles = {
  'x-large': 'md:text-7xl text-5xl tracking-tighter',
  large: 'md:text-5xl text-4xl tracking-tight',
  medium: 'md:text-3xl text-2xl tracking-tight',
  small: 'md:text-2xl text-xl',
  text: 'md:text-xl text-lg',
  'text-small': 'md:text-lg text-base',
}
