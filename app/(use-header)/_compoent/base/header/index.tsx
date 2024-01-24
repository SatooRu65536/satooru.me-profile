'use client';

import { useDisclosure } from '@mantine/hooks';
import styles from './index.module.scss';

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  const navigation = [
    { name: 'top', href: '/#top' },
    { name: 'about', href: '/#about' },
    { name: 'main-skills', href: '/#main-skills' },
    { name: 'skills', href: '#skills' },
    { name: 'awards', href: '/#awards' },
    { name: 'experiences', href: '/#experiences' },
    { name: 'works', href: '/#works' },
    { name: 'recent-posts', href: '/#recent-posts' },
    { name: 'products', href: '/#products' },
    { name: 'products', href: '/#product' },
    { name: 'active-projects', href: '/#projects' },
    { name: 'posts', href: '/blogs/1' },
  ];

  function trigle() {
    if (opened) close();
    else open();
  }

  return (
    <>
      <div className={styles.drawer} data-opend={opened}>
        <ul className={styles.navArea}>
          {navigation.map((nav) => (
            <li key={nav.name}>
              <a href={nav.href} onClick={close}>
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <header className={styles.header}>
        <a href="/">
          <h1 className={styles.title}>SatooRu&apos;s Profile</h1>
        </a>

        <div className={styles.hamburger} onClick={trigle} data-opend={opened}>
          <div style={{ ['--i' as string]: 0 }} />
          <div style={{ ['--i' as string]: 1 }} />
          <div style={{ ['--i' as string]: 2 }} />
        </div>
      </header>
    </>
  );
}
