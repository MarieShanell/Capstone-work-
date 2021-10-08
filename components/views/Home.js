import html from "html-literal";
import img1 from "../images/capstone-pic.jpeg";
export default () => html`

  <section id="homeinfo">
    <h1>OPTIMAL HEALTH AND WELL-BEING</h1>
    <p>
      Optimal health is a holistic focus with the aim of attaining the best
      possible health outcomes by promoting healthier behaviors and not merely
      the absence of disease: ... regardless of current health status
    </p>

    <h2>6 CORE PILLARS FOR A HEALTHY LIFE</h2>
    <li>
      MEDICAL: Establishing and maintaining a primary care physician is
      important. Establishing a relationship with a primary care physician will
      help understand possible medical risk and will also evaluate your overall
      state of health
    </li>
    <li>
      FITNESS: Exercising regularly helps keeps your body mass index -BMI- at a
      healthy range which will decrease the risk of diabetes or heart disease.
      Regular exercise is a major component in managing joint and muscle
      diseases. Exercising is also a key component with managing stress levels.
    </li>
    <li>
      SLEEP: Sleeping serves as the main support for the immune system. Sleep
      also serves a n essential purpose for the mind, body , and soul .
      According to statistics, the average individual normally gets about 6.8
      hours of sleep
    </li>
    <li>NUTRITION</li>
    <li>MINDFULNESS</li>
    <li>SOCIAL WELLNESS</li>

    <img src="${img1}" alt="a picture" />
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

