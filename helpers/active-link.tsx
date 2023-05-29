import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActiveLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={classNames(
        'text-gray-7',
        href === pathname &&
          'text-primary font-bold underline underline-offset-8'
      )}
    >
      {children}
    </Link>
  );
};
export default ActiveLink;
