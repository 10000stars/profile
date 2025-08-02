export default function NavBar({ activeSection }) {
  const links = ['home', 'about', 'projects', 'contact'];

  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        z-index: 10;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }


        .nav-list {
          list-style: none;
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding: 1rem;
          margin: 0;
        }

        .nav-list a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .nav-list a.active {
          color: orange;
          text-shadow: 0 2px 6px rgba(255, 165, 0, 0.4);
          font-weight: 700;
        }

        @media (max-width: 800px) {
          .nav-list {
            gap: 1rem;
            padding: 0.75rem;
          }

          .nav-list a {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 600px) {
          .nav-list {
            gap: 0.5rem;
            padding: 0.5rem;
          }

          .nav-list a {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
