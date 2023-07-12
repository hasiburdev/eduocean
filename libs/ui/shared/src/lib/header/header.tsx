// import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className={''}>
      <h1>{title ?? 'Welcome to EduOcean! The ocean of knowledge'}</h1>
    </div>
  );
}

export default Header;
