import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function FooterWhite({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6 bg-transparent">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="white">
              {title}
            </Typography>
            <Typography className="font-normal text-white lg:w-2/5">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
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
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-white hover:text-[#f92628] transition-colors"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
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

FooterWhite.defaultProps = {
  title: "Techvel Solutions",
  description:
    "Fueling innovation through cutting-edge technology, Techvel Solutions helps you transform ideas into impactful digital experiences that stand the test of time.",
  socials: [
    {
      color: "gray",
      name: "linkedin",
      path: "https://www.linkedin.com/company/techvel-solutions/about/",
    },
    {
      color: "gray",
      name: "facebook",
      path: "#",
    },
  ],
  menus: [
    {
      name: "Pages",
      items: [
        { name: "About Us", path: "#" },
        { name: "Blog", path: "#" },
        {
          name: "Services",
          path: "#",
        },
      ],
    },
    {
      name: "other resources",
      items: [
        {
          name: "Portfolio",
          path: "/portfolio",
        },
        {
          name: "Projetcs",
          path: "#",
        },
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
        className="text-white transition-colors hover:text-[#f92628]"
      >
        <span className="font-bold">
          {"</>"} Developers
        </span>
      </a>
    </>
  ),
};

FooterWhite.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

FooterWhite.displayName = "/src/widgets/layout/FooterWhite.jsx";

export default FooterWhite; 