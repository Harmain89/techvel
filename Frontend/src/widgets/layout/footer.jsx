import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6 bg-[#0a0606]">
      <div className="container mx-auto">
        <div className="flex flex-wrap flex-row justify-between items-start pt-6 text-left">
          <div className="w-full lg:w-4/12 px-4 flex flex-col justify-center">
            <Typography variant="h4" className="mb-4" color="white">
              {title}
            </Typography>
            <Typography className="font-normal text-white lg:w-full">
              {description}
            </Typography>
            <div className="mt-6 mb-8 flex gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full shadow-none bg-transparent">
                    <Typography color="white">
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-8/12 flex flex-row justify-between mt-12 lg:mt-0">
            {menus.map(({ name, items }, index) => (
              <div
                key={name}
                className={`px-4 ${index >= menus.length - 2 ? 'ml-auto' : ''}`}
              >
                <Typography
                  variant="small"
                  color="white"
                  className="mb-2 ps-1 font-bold block uppercase text-[#C41E3A]"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        key={item?.name}
                        as="a"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-white hover:text-[#C41E3A] transition-colors"
                      >
                        <Link
                          to={item?.path}
                          className="flex items-center gap-1 p-1 font-bold hover:text-[#C41E3A] transition duration-200"
                        >
                          {item?.name}
                        </Link>
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-white"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Techvel Solutions",
  description:
    "Fueling innovation through cutting-edge technology, Techvel Solutions helps you transform ideas into impactful digital experiences that stand the test of time.",
  socials: [
    {
      color: "gray",
      name: "instagram",
      path: "https://www.instagram.com/techvelsolutions/",
    },
    {
      color: "gray",
      name: "linkedin",
      path: "https://www.linkedin.com/company/techvel-solutions/about/",
    },
  ],
  menus: [
    {
      name: "Pages",
      items: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Portfolio", path: "/portfolio" },
      ],
    },
    {
      name: "other resources",
      items: [
        { name: "Gen Ai", path: "/gen-ai" },
        { name: "Services", path: "/services" },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} {" "}
      <span className="font-bold">
        Techvel {" "}
      </span>
      by{" "}
      <a
        href="#"
        className="text-white transition-colors hover:text-[#C41E3A]"
      >
        <span className="font-bold">
          {"</>"} Developers
        </span>
      </a>
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
