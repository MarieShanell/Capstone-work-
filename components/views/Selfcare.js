import html from "html-literal";
import selfcare1 from "../images/bath.jpeg"
import selfcare2 from "../images/namaste.jpeg"
import selfcare3 from "../images/reading.jpeg"
import selfcare4 from "../images/cozy.jpeg"
import selfcare5 from "../images/rocks.jpeg"
import selfcare6 from "../images/yogameditation.jpeg"
import selfcare7 from "../images/music.jpeg"
export default () => html`


<div class="Selfcareclass"> <section id="selfcare"></section>
<h1> SELF CARE  </h1>

<p>We tend to think that self-care is a waste of time. The American way is that a successful person is one who is always accomplishing. If we were taught that sitting in the park and relaxing for two hours was praiseworthy, we would be proud of taking care of ourselves in that way. However, our culture is working against us, and we feel guilty for doing what we should be doing. We need to give ourselves permission to do less. We’ll never have serenity if our task list is so long that it does not allow for a little downtime. A lack of self-care causes stress. People, unfortunately, feel unworthy of self-care and many people are proud that they don’t “need self-care”. To take care of ourselves is restorative. People who take care of themselves are happier and have more stamina to get more accomplished.</p>

<p>When you feel stressed and need a calm mind, try focusing on the sensations around you—sights, smells, sounds, tastes, touch. This will help you focus on the present moment, giving you a break from your worries.

Breathe in fresh air.
Snuggle under a cozy blanket.
Listen to running water.
Sit outdoors by a fire pit, watching the flames and listening to the night sounds.
Take a hot shower or a warm bath.
Get a massage.
Cuddle with a pet.
Pay attention to your breathing.
Burn a scented candle.
Wiggle your bare feet in overgrown grass.
Stare up at the sky.
Lie down where the afternoon sun streams in a window.
Listen to music.</p>
</div>


<div class="selfcarepics">
<div><img src="${selfcare1}" alt="reading bath pic"/></div>
<div><img src="${selfcare2}" alt="namaste pic"/></div>
<div><img src="${selfcare3}" alt="sitting in floating chair"/></div>
<div><img src="${selfcare4}" alt="cozy pic"/></div>
<div><img src="${selfcare5}" alt="rocks"/></div>
<div><img src="${selfcare6}" alt="yoga meditation"/></div>
<div><img src="${selfcare7}" alt="listening to music"/></div>
</div>


<form action="">
  <label for="question">What did you do to take care of yourself today?</label>
  <input type="text" name="question">
</form>

</section>


`;


