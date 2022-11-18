import React from 'react';

function Faq(){
return(
<section className="home5">
<div className="container">
<div className="row">
<div className="col-md-12">
  <h6>FAQS</h6>
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <div className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What are your specialities in design services?</button>
    </div>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"><p>We work on a variety of UX/UI and web design projects, from creating new products to reworking current mobile apps, websites, and business software. User research, product strategy, user interface, user experience design, usability testing, prototyping, web design, and development are just a few of the services we offer to help you create a successful digital product. Our web design clients are frequently the same firms who employ us for UX/UI design projects, which makes sense since who better describes a product than the people who built it? We're a web design firm that thinks a great website should effectively convert visitors to customers while offering a pleasant web experience consistent with the brand. Higher conversion rates are associated with the excellent UX/UI of a digital product or website. That's why, unlike other design firms, we have UX/UI designers working alongside developers on all projects.</p></div>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What distinguishes DotOxygen's development from other leading software development service providers?</button>
    </div>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"><p>We use best practice procedures and development techniques as a base for the quick development of cutting-edge technological solutions in a planned and systematic manner. DotOxygen offers full-cycle software development services that seamlessly adapt to your project objectives and business demands, from IT strategy advice and thorough technology roadmaps through the end-to-end implementation of scalable solutions.</p></div>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Do you offer branding services, or do I need to seek out a different branding firm?</button>
    </div>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"><p>We integrate creative and product expertise under one roof and on the same project, unlike most traditional digital solution providers and user experience designers. Imagine a branding firm collaborating with an IT firm—that's us.</p></div>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How much does hiring you for a UI/UX design project cost?</button>
    </div>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body"><p>The project scope, timeline, deliverables, and team composition all influence our pricing. When the scope isn't set in stone or the project is fluid, we like to work on a time-and-materials basis, where you pay us for the time we spend on the project. The majority of our UX/UI engagements, however, are fixed-price contracts. In this scenario, after learning as much as possible about your project, we'll provide you with a complete proposal. All estimates are based on hourly rates and the estimated number of hours the task will take.</p><p>For example, a typical project might take 10 weeks and cost $150k to $200k. We would build a specific rate card for you based on the team composition for time and materials engagements. We also provide discounted prices to qualified startups. To receive a quote, please send us an email.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Do you have any experience working with start-ups?</button>
    </div>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>We partner with startups big and small all the time as software solution providers in Pakistan. What could be more rewarding than assisting innovators in bringing new ideas to life? We thrive in a fast-paced workplace that tests our abilities and processes. For us, the pinnacle of achievement is witnessing our startup clients thrive and conquer the world. For startups that we believe in. To learn more, send an email to us.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" id="headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Are you able to assist us with the redevelopment of our vintage enterprise/B2B software?</button>
    </div>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body"><p>Yes, we're up for the task. We're one of the few user experience organizations specializing in enterprise design and legacy business software digital transition. Over the years, we've refined our process by updating digital platforms for Fortune 100 organizations, including ADP, Amazon, and Facebook. Each new corporate project begins with a thorough exploration and research phase to completely immerse ourselves in the industry and project details.</p><p>Our services range from user research and information architecture to design, prototyping, and user testing, as well as full-stack development and integrating systems. Our company works as a stand-alone entity, avoiding the bureaucracy of a major corporation and frequently collaborating with innovation labs and in-house teams.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">What should I expect from your process? </button>
    </div>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body"><p>It's no coincidence that our clients refer to us as "process nerds."</p><p>For us, a project is more than simply a job; it is a responsibility to provide the finest possible solution and meet all of the client's desires. and we'll walk you through a step-by-step process to get there.</p><p>The process has its own five basic pillars, from which an idea passes to get its visual identity and become an oxidized product.</p>
      <p><strong>BRAINSTORMING</strong></p>
      <p>Through brief interactions with the client about their needs, one or more persons will mull over ideas to define or solve an issue.</p>
      <p><strong>DEFINE</strong></p>
      <p>Every product has a unique identity, so the major purpose is to bring in all the inquiries required to achieve the goal and satisfy all the requirements.</p>
      <p><strong>DESIGN</strong></p>
      <p>When we have a solid understanding of our clients' and users' demands, we can create a solution that meets those needs.</p>
      <p><strong>TESTING</strong></p>
      <p>To make sure the product is up to par and free of revisions until the very last second, we put it through several tests.</p>
      <p><strong>LAUNCHING</strong></p>
      <p>Our brand is what we create, and we release it in a way that nobody can.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      What is the best way to acquire a proposal for my project?
      </button>
    </div>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Please send us an email first with a concise explanation of your project or an RFI/RFP if you're searching for a software solution provider. We normally respond within 24 hours to set up an initial call and to answer any pressing inquiries. We'll ask a few questions about the project goals, audience, timetable, and other important factors during our initial contact. We can sign an NDA if necessary, but all client communications are treated as private. to evaluate goals and project approaches.</p>
        <p>We'll send you a proposal via email, and we can set up a meeting to go through it. A full description of our project methodology, project phases, activities, deliverables, design team makeup, and relevant case studies will be included in DotOXygen's proposal.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      What if I am not satisfied with your service?
      </button>
    </div>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>A customer's level of satisfaction with a good, service, or experience.</p><p>Customer happiness is crucial since it shows that your audience approves of your business practices. According to research, excellent customer satisfaction increases customer retention, lifetime value, and brand reputation.</p><p>However, low customer satisfaction ratings are also significant. They can highlight client annoyances and offer data-supported insights on how to enhance your offering in terms of both services and overall customer satisfaction.</p><p>DotOxygen works on this agenda and goals to satisfy every client.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" id="headingTen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">Do I have to be local to work with you?</button>
    </div>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>No, we provide services around the globe. We are aware of all the requirements for your business, whether you are in Karachi or somewhere else on the planet, and we know how to make you laugh with our first-rate digital design and bespoke services. We assist you across the board, and some of the services we offer include personalised user experience, website design and development, e-commerce, mobile applications, branding, and digital marketing services.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" id="headingEleven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">How long does a website redesign take?</button>
    </div>
    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Depending on the complexity of the project and the demands the website must satisfy, a website redesign may take 45 to 90 days or longer. A complete redesign may seem like a big task because web design may occasionally appear to be a mysterious art. We begin with a detailed discussion to go through your requirements and provide us with the initial raw materials on which to develop your plan. We will assign homework, based on the discussion, and once we complete your project, we may schedule a meeting—or perhaps two—to check in. Normally, this procedure takes a few weeks. According to our partners at Blend B2B, a comprehensive research approach is essential to gaining customers and developing the firm's identity.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" id="headingTwelve">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">Can you handle ongoing maintenance?</button>
    </div>
    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>For any business, developing a new digital product and introducing it to the public is an exciting milestone. Your product's development and launch involve many steps, such as the actual design and coding, licensing schemes, advertising, and more. Any outstanding product must, however, be able to update with the times. DotOxygen knows it well and have hands on to make your product addaptive to the requirements for the enhancements, maintenance that is corrective, preventative, risk-based, and condition-based.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" id="headingThirteen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">Do you offer to consultation?</button>
    </div>
    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>DotOxygen is also an experienced information technology consultant with a demonstrated history of working in the information technology and services industry. Skilled in UX/UI design, Software as a Service (SaaS), Project Coordination, and Branding. We have strong information technology professionals, with a Microsoft Certified Professional focused on information technology.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header" id="headingFourteen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">What sort of support do you offer?</button>
    </div>
    <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>We assist initiatives, start-ups, small and midsize businesses, and enterprises in developing creative concepts and fostering websites, digital products, applications, and branding.</p>
        <p>A project's delivery does not mark its conclusion. Demand management is necessary when it rises. Therefore, after delivery, our adventure with you does not end; it keeps on.</p>
        <ul>
        <li>You have the confidence required to maintain your project.</li>
        <li>Anytime assistance from DotOxygen without having to wait days for a response.</li>
        <li>As a result of feedback, restructuring features to your current offering.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
);
}
export default Faq;