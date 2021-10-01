import html from "html-literal";
import img1 from "../images/capstone-pic.jpeg";
export default () => html`
  <img src="${img1}" alt="a picture" />
  <section id="homeinfo">
    <h1>OPTIMAL HEALTH AND WELL-BEING</h1>
    <p>
      Optimal health is a holistic focus with the aim of attaining the best
      possible health outcomes by promoting healthier behaviors and not merely
      the absence of disease: ... regardless of current health status
    </p>
  </section>

  <!-- FORMSPREE -->
  <!-- modify this form HTML and place wherever you want your form -->
  <form action="https://formspree.io/f/xoqyrbjr" method="POST">
    <label>
      Your email:
      <input type="email" name="_replyto" />
    </label>
    <label>
      Your message:
      <textarea name="message"></textarea>
    </label>
    <!-- your other form fields go here -->
    <button type="submit">Send</button>
  </form>

  <!-- LINK FONT AWESOME (fonts) -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
    rel="stylesheet"
  />
`;
