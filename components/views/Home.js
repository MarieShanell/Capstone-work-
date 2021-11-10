import html from "html-literal";
import img1 from "../images/capstone-pic.jpeg";
import img2 from "../images/soothingpic.jpeg"
import img3 from "../images/selfcare.jpeg"


export default (st) => html`




  <section id="homeinfo">
  <div class="weather">
    <H1>Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
    like ${kelvinToFahrenheit(st.weather.feelsLike)}F</H1>
</div>
<h1>OPTIMAL HEALTH AND WELL-BEING</h1>
    <p>
      Optimal health is a holistic focus with the aim of attaining the best
      possible health outcomes by promoting healthier behaviors and not merely
      the absence of disease: ... regardless of current health status
    </p>

    <h2> CORE PILLARS FOR A HEALTHY LIFE</h2>
    <p>
      MEDICAL: Establishing and maintaining a primary care physician is
      important. Establishing a relationship with a primary care physician will
      help understand possible medical risk and will also evaluate your overall
      state of health
</p>
    <p>
      FITNESS: Exercising regularly helps keeps your body mass index -BMI- at a
      healthy range which will decrease the risk of diabetes or heart disease.
      Regular exercise is a major component in managing joint and muscle
      diseases. Exercising is also a key component with managing stress levels.
    </p>
    <p>
      RESTORATIVE SLEEP: Sleeping serves as the main support for the immune system. Sleep
      also serves an essential purpose for the mind, body , and soul .
      According to statistics, the average individual normally gets about 6.8
      hours of sleep
    </p>

    <p>NUTRITION
      obtaining a healthy nutrition is an essential role in maintaining a healthy lifestyle
    </p>

    <p>MINDFULNESS: This is the simple act of recognizing what’s going on inside of ourselves and what’s going on around us, in the present moment and without judgement. Mindfulness is a tool that helps us manage thoughts and emotions, notice more of what’s happening in a situation, and immerse ourselves in the present moment as it unfolds.</p>
    <p>SOCIAL WELLNESS</p>

    <p>
We also see the word wellness related with health. Wellness is defined as: the quality or state of being in good health especially as an actively sought goal. Today, healthy individuals are on a constant pursuit for optimal wellness. It’s not sufficient to be free from disease or pain, people want to be healthier in other areas of life. Why is that? Living healthy is personal and relative to feeling good, mentally, emotionally and physically, and this is the most basic understanding we have of our health.  But feeling good is a personal definition.</p>

<div class="home-images">
    <div><img src="${img1}" alt="meditation pic"/></div>
   <div><img src="${img3}" alt="selfcare"/></div>
   <div><img src="${img2}" alt="soothing pic"/></div>
</div>


  </section>
`;
const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);


