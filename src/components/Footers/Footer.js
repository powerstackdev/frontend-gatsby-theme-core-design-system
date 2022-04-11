/** @jsx jsx */
import { jsx, Link } from "theme-ui";

export const Footer = () => (
  <footer
    sx={{
      fontSize: 1,
      color: "background",
      bg: "text",
      variant: "styles.footer",
    }}
  >
    <div
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        maxWidth: 768,
        mx: "auto",
        px: 2,
        py: 4,
      }}
    >
      <Link to="/" sx={{ variant: "styles.navlink", p: 2 }}>
        Home
      </Link>
      <Link to="/" sx={{ variant: "styles.navlink", p: 2 }}>
        Blog
      </Link>
      <Link to="/" sx={{ variant: "styles.navlink", p: 2 }}>
        About
      </Link>
      <div sx={{ mx: "auto" }} />
      <div sx={{ p: 2 }}>© {new Date().getFullYear()} Jane Doe</div>
    </div>
  </footer>
);

export default Footer;
