<template>
  <div>
    <div id="parallax" class="bg-home">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 banner-text">
            <div class="banner-content">
              <h1>Hola!<br>I'm Yashwanth</h1>
              <h3>
                I'm a web designer and developer based in India
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="intro-text">
      <div class="container">
        <div class="row intro-text-row">
          <div class="col-sm-12 text-center">
            <h4><i>It all started with a passion for the Internet and Web Technologies</i></h4>
          </div>
        </div>
        <div class="row intro-text-row">
          <div class="col-sm-12 col-md-4 intro-text-col">
            <div class="card hvr-border-fade">
              <img src="/img/programmer.png" alt="" class="card-img-top">
              <div class="card-body text-center">
                <h5 class="card-title">
                  Self-taught Programmer
                </h5>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 intro-text-col">
            <div class="card hvr-border-fade">
              <img src="/img/full_stack_dev.png" alt="" class="card-img-top">
              <div class="card-body text-center">
                <h5 class="card-title">
                  Full-stack Web Developer
                </h5>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 intro-text-col">
            <div class="card hvr-border-fade">
              <img src="/img/dev_ops.png" alt="" class="card-img-top">
              <div class="card-body text-center">
                <h5 class="card-title">
                  Dev-Ops Enthusiast
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="skills-text">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 offset-md-3 text-center">
            <h3>SKILLS ON OFFER</h3>
            <hr class="custom-style" data-aos="zoom-in" data-aos-easing="ease">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 text-center">
            <img src="/img/ui_ux.png" alt="">
          </div>
          <div class="col-sm-12 col-md-6">
            <h4>FRONT END DEVELOPMENT</h4>
            <p>I specialize in crafting beautiful websites in React and Vue, and I am a huge fan of two-way data flow and Redux-like architectures.</p>
            <p>My skills in front-end include:</p>
            <ul>
              <li>Lead JavaScript development: Add a ton of functionality using React and Vue which give a ready-made structure to the application.</li>
              <li>Control each step of the build process using plugins and loaders like Webpack and Browserify.</li>
              <li>Experience in many JavaScript frameworks/libraries like JQuery, Backbone, React, Redux, Vue, Vuex, Lodash/Underscore, Ionic and whatever else was needed.</li>
              <li>Experience in using CSS frameworks like Bootstrap, Material, and Skeleton CSS.</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 offset-md-3 text-center">
            <hr class="custom-style" data-aos="zoom-in" data-aos-easing="ease">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h4>BACK END DEVELOPMENT</h4>
            <p>I script the architecture of the applications to communicate the database information to the browser. My tech stack involves NodeJS and MeteorJS and alternatively PHP (Laravel).</p>
            <p>My skills in back-end include:</p>
            <ul>
              <li>Developing web services or REST API for consumption in the front-end applications.</li>
              <li>Storing data and also ensuring that it is displayed to that user who are supposed to have access to it.</li>
              <li>Use different types of databases like MySQL, MongoDB, PostgreSQL, and ElasticSearch.</li>
              <li>Integrating payment processing systems like PayPal, Dwolla, CCAvenue, and more.</li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-6 text-center">
            <img src="/img/server.png" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 offset-md-3 text-center">
            <hr class="custom-style" data-aos="zoom-in" data-aos-easing="ease">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 text-center">
            <img src="/img/dev-ops.png" alt="">
          </div>
          <div class="col-sm-12 col-md-6">
            <h4>WHAT ABOUT DEV-OPS?</h4>
            <p>I love using command line interfaces and I am pretty good at Linux scripting. I believe that coding the back-end and front-end is not the only important thing, but also to take care of other things needed in successful web application.</p>
            <p>My skills, tools and technologies include:</p>
            <ul>
              <li>Source control tools like Git and SVN.</li>
              <li>Continuous integrations using Jenkins.</li>
              <li>Infrastructure automation using Puppet.</li>
              <li>Code deployment automation and orchestration using Jenkins.</li>
              <li>Experience in using cloud platforms like Docker, AWS, Google Compute Engine, DigitalOcean and Microsoft Azure.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Home | Yashwanth Sagar',
      meta: [
        { hid: 'og:title', name: 'og:title', content: 'Home | Yashwanth Sagar' },
        { hid: 'og:image', name: 'og:image', content: '/img/Logo.png' },
        { hid: 'og:site_name', name: 'og:site_name', content: 'Yashwanth Sagar' },
        { hid: 'description', name: 'description', content: 'Full Stack Web Developer with expertise in Node.JS, Meteor.JS, React.JS, Vue.JS and frameworks/libraries around them.' },
        { hid: 'og:description', name: 'og:description', content: 'Full Stack Web Developer with expertise in Node.JS, Meteor.JS, React.JS, Vue.JS and frameworks/libraries around them.' }
      ]
    }
  }
}
</script>
