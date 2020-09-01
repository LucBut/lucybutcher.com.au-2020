import React from 'react';
import { Container, Divider, Header, Image } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <Container text style={{ marginTop: '50px', marginBottom: '150px' }}>
      {/* <Image src="/images/Circle_FINAL-1200px.png" centered size="huge" /> */}

      <Image src="/images/Lucy Butcher_hi-res square.png" centered size="huge" />

      {/* <Header as="h2">Lucy Butcher</Header> */}

      <Divider />

      <Header as="h2">What am I?</Header>
      <p>
      Freelance copy editor / proofreader
      </p>
      <p> Specialising in health and medicine (but all subjects welcome)</p>
      <p>Science graduate / AWARD School graduate</p>

      <Divider />
      <Header as="h2">Where am I?</Header>
      <p>Canberra</p>
      <p>Efficient, long-time remote worker</p>

      <Divider />
      <Header as="h2">Why me?</Header>
      <p>Science and word nerd / deep thinker</p>
      <p>Thorough / enemy of typos</p>
      <p>Creative / imaginative</p>
      <p>Diligent researcher / fact checker</p>
      <p>Experienced, but not jaded</p>
      <Divider />
      <Header as="h2">Contact</Header>

      <a href="mailto:lb@lucybutcher.com.au">lb@lucybutcher.com.au</a>
      <Divider />
      <Header as="h2">A bit more about me</Header>

      <p>
        <b>I’m an experienced writer.</b> But I’ve realised that I prefer editing. Improving a document’s accuracy and readability makes me strangely happy. So for now this is my focus.
      </p>
      <p>
        <b>I like what I do.</b> I’m always learning and this keeps me curious.
      </p>
      <p>
        <b>I don’t say yes to every project.</b> Having a manageable workload
        means I can do my best for each client.
      </p>
      <p>
        <b>When I'm working on your project it has my full attention.</b> I sit in a quiet home office, not an open-plan workplace with Spotify blaring. I can really concentrate.
      </p>
      <p>
        <b>Work-life balance is important.</b> This is why I freelance. I don't
        do crazy hours or weekends. But I do get up <i>really</i> early, so I've
        often done a day's work by lunch. This tends to keep tight deadlines
        ticking along nicely.
      </p>

      <p>
        <b>I don’t email my portfolio.</b> I respect client confidentiality and Rx communications regulations. But I’m always happy to chat about my experience.
      </p>
      <p>
        <b>I believe in science-based medicine and critical thinking.</b> I loathe Instagram influencers and their unreferenced health claims. I
        don’t work on anything dodgy or with flimsy evidence. You know who you
        are. You probably use words like ‘natural’, ‘organic’ or ‘chemical free’
        in your marketing (for more information, see{' '}
        <a href="https://isitchemicalfree.com">isitchemicalfree.com</a>). You
        may even subscribe to the religious health teachings of people like Pete Evans
        or Andrew Wakefield. Either way, I’m not the freelancer for you.
      </p>

      <Divider />
      <Header as="h2">Testimonials</Header>
      <Image src="/images/testimonials_2018_nat.png" centered size="huge" />
      <Image src="/images/testimonials_2018_lesley.png" centered size="huge" />
      <Image src="/images/testimonials_2018_hannah.png" centered size="huge" />
      <Image src="/images/testimonials_2018_kath.png" centered size="huge" />
      <Image src="/images/testimonials_2018_scott.png" centered size="huge" />
      <Divider />
      <p>
        <i>
          “In the face of overwhelming odds, I’m faced with only one option -
          I’m going to have to science the shit out of this.”
        </i>
      </p>
      <p>Mark Watney, The Martian.</p>
    </Container>
  );
};

export default App;
