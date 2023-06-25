import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEventHandler } from 'react';

const ActiveLink = ({
  children,
  href,
  className,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) => {
  const pathname = usePathname();

  const branchName =
    pathname === '/branch/ekbatan' ||
    pathname === '/branch/chaloos' ||
    pathname === '/branch/aghdasieh' ||
    pathname === '/branch/vanak';

  return (
    <Link
      href={href}
      onClick={onClick}
      className={classNames(
        'text-gray-7',
        href === pathname && 'text-primary font-bold underline',
        branchName && 'text-primary font-bold underline',
        className
      )}
    >
      {children}
    </Link>
  );
};
export default ActiveLink;
