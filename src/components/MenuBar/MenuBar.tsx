import Link from "next/link";

const MenuBar = ({ className }: { className: string }) => {
  const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Portfolio",
      link: "/projects",
    },
    {
      title: "About",
      link: "/about",
    },
  ];

  return (
    <nav>
      <ul
        className={`flex flex-col md:flex-row text-center gap-6 md:gap-0 ${className}`}
      >
        {menuItems.map(({ title, link }, i) => (
          <li className="" key={i}>
            <Link
              href={link}
              className="border rounded-full px-4 py-2 md:py-3 hover:bg-white hover:text-[#1c1c1c] transition-all"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
