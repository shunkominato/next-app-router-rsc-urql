import { ReactNode } from 'react';

type Props = {
  textRight?: boolean;
  textCenter?: boolean;
  marginTop?: string;
  className?: string;
  children: ReactNode;
};

export function FormRow({
  textRight = false,
  textCenter = false,
  marginTop = 'mt-4',
  className,
  children,
}: Props) {
  let style = marginTop;
  if (textRight) style = `${style} text-right`;
  if (textCenter) style = `${style} text-center`;
  if (className) style = `${style} ${className}`;

  return <div className={style}>{children}</div>;
}
