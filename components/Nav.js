import html from "html-literal";
export default links => html`
  <nav class="navbar">
  <div class="logo_header">
        <a href="#" class="logo">OPTIMAL HEALTH</a>
        <button class="navbar_toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>
<ul class="main_nav">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" class="nav_links" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;
