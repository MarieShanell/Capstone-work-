import html from "html-literal";
export default () => html`

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
