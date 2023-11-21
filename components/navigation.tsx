import Link from 'next/link';

export async function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__wrapper">
        <Link href="/" className="navigation__link">
          Floema
        </Link>
      </div>
      <ul className="navigation__list">
        <li className="navigation__list__item">
          <Link href="/about" className="navigation__list__link">
            About
          </Link>
        </li>
        <li className="navigation__list__item">
          <Link href="/collections" className="navigation__list__link">
            Collections
          </Link>
        </li>
      </ul>
    </nav>
  );
}
