"use client"

import { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/navLink';


const session = true;
const isAdmin = true;


const Links = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <div>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.href} />
        ))}{
          session ? (
            <>
              {
                isAdmin &&
                <NavLink item={{ href: '/admin', label: 'Admin' }} />
              }
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink item={{ href: '/login', label: 'Login' }} />
          )
        }
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.href} />
          ))}
        </div>
      )}
    </div>
  )
};

export default Links;
