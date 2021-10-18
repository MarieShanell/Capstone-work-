import html from "html-literal";
import nutrition1 from "../images/nutritionpic.jpg"
import nutrition2 from "../images/mealgathering.jpg"
import nutrition3 from "../images/nutrition.jpg"
export default () => html`


  <section id="Nutrition">
    <h2>Why is Healthy Nutrition Important</h2>

    <p>
      Food and nutrition are the way that we get fuel, providing energy for our
      bodies. We need to replace nutrients in our bodies with a new supply every
      day. Water is an important component of nutrition. Fats, proteins, and
      carbohydrates are all required. Maintaining key vitamins and minerals are
      also important to maintaining good health. For pregnant women and adults
      over 50, vitamins such as vitamin D and minerals such as calcium and iron
      are important to consider when choosing foods to eat, as well as possible
      dietary supplements. A healthy diet includes a lot of natural foods. A
      sizeable portion of a healthy diet should consist of fruits and
      vegetables, especially ones that are red, orange, or dark green. Whole
      grains, such as whole wheat and brown rice, should also play a part in
      your diet. For adults, dairy products should be non-fat or low-fat.
      Protein can consist of lean meat and poultry, seafood, eggs, beans,
      legumes, and soy products such as tofu, as well as unsalted seeds and
      nuts. Good nutrition also involves avoiding certain kinds of foods. Sodium
      is used heavily in processed foods and is dangerous for people with high
      blood pressure. The USDA advises adults to consume less than 300
      milligrams (mg) per day of cholesterol (found in meat and full-fat dairy
      products among others). Fried food, solid fats, and trans fats found in
      margarine and processed foods can be harmful to heart health. Refined
      grains (white flour, white rice) and refined sugar (table sugar, high
      fructose corn syrup) are also bad for long-term health, especially in
      people with diabetes. Alcohol can be dangerous to health in amounts more
      than one serving per day for a woman and two per day for a man.


      </p>
    <div class="nutrition-pictures">
      <div><img src="${nutrition1}" alt="vegetable pic"/></div>
      <div><img src="${nutrition2}" alt="meal gathering pic"/></div>
      <div><img src="${nutrition3}" alt="fruit pic"/></div>
</div>
</section>
`;
