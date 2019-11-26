import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Hi from the Resume</h1>
    <p>Welcome to Resume</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume

/*
Vue.component('Experience', {
  data () {
    return {
      positions: [
        {
          title: 'Staff Engineer, Fullstack',
          company:'Knotel',
          location: 'New York, NY',
          timeline: 'July 2018 &mdash; Present',
          description: `Revolutionizing the GraphQL implementations that not only push the technology forward through use in the CRE and Arch industry, but as all engineering as a whole. Lead development of several applications, systems architecture, patterns, as well as our design system. Stack is React, Node, Apollo, AWS, Github Actions, Kubernetes.`
        },
        {
          title:'Javascript Engineer / Consultant',
          company:'SmartNode, LLC',
          location: 'Brooklyn, NY',
          timeline: 'January 2015 &mdash; Present',
          description: `Full-stack Javascript application development and project management. 
            Typical stack consists of Node APIs on Angular / React / Vue Frontends.`
        },
        {
          title:'Lead Frontend Engineer',
          company:'Capsule8, Inc',
          location: 'Brooklyn, NY',
          timeline: 'June 2017 &mdash; December 2017',
          description: `Architected Capsule8’s Security dashboard console. Helped hire developers and built both the UI and UX teams within this smart and stealthy startup. Led Junior level developers as well as oversaw contract partnerships.`
        },
        {
          title:'Senior UI Engineer / Consultant',
          company:'Cake &amp; Arrow <small>(formerly Alexander Interactive)</small>',
          location: 'New York, NY',
          timeline: 'October 2013 &mdash; January 2015',
          description: `Developed proprietary software for a Fortune 50 client utilizing AngularJS with a team under the agile methodology. Similiarly sharing knowledge throughout the company crossing between the development and design teams.`
        },
        {
          title:'UX / UI Development Consultant',
          company:'Legs Media, Milk Studios, Layerframe',
          location: 'New York, NY',
          timeline: 'May 2013 &mdash; December 2013',
          description: `Lead development and oversaw teams on several high-end digital/web projects including those with Nickelodeon, Spotify, Budweiser, Theory and more.`
        },        
        {
          title:'Mobile Developer: Custom Builds',
          company:'Celtra',
          location: 'New York, NY',
          timeline: 'January 2013 &mdash; May 2013',
          description: `Created custom mobile advertising campaigns on a prototypical inheritance design pattern built from Celtra’s Ad Creator product and MongoDB/MySQL.
Clients include McDonalds, Burberry, Jeep, SuperCell, and several more.`
        },{
          title:'Creative Technologist',
          company:'Medialets',
          location: 'New York, NY',
          timeline: 'October 2010 &mdash; October 2012',
          description: `Lead Developer in the Rich Media Mobile Advertising space. Direct communication of best practices with creative, technical, and agency partners. Award Winning Innovation in the mobile space utilizing HTML5 elements, CSS animations, touch events, and js frameworks.`
        },
        {
          title:'Interactive Developer',
          company:'Warschawski',
          location: 'Baltimore, MD',
          timeline: 'August 2009 &mdash; October 2010',
          description: 'Created interactive solutions for clients in need of online branding. A custom content management system was created in order to give customers control of their content without need to be onboarded into a complex system. Logo creation, wireframing, and branding solutions were also part of this creative role.'
        },
        {
          title:'Front-End Developer',
          company:'Inside Lacrosse',
          location: 'Baltimore, MD',
          timeline: 'December 2008 &mdash; August 2009',
          description: 'Redeveloped InsideLacrosse.com onto the Drupal6 Platform while creating smaller applications for custom polls, magazine revenue'
        },
        {
          title:'Web Applications Developer',
          company:'no|inc',
          location: 'Baltimore, MD',
          timeline: 'August 2008 &mdash; December 2008',
        },
        {
          title:'Web Applications Developer',
          company:'CSD Architects',
          location: 'Baltimore, MD',
          timeline: 'June 2007 &mdash; August 2008',
        },
      ]
    }
  },
  template: `
    <div>
      <h3>Experience</h3>
      <article class="item" v-for="pos in positions">
        <div class="flex">
          <div class="align-left">
            <h4 v-html="pos.title"></h4>
            <h5 v-html="pos.company"></h5>
          </div>

          <div class="align-right"> 
            <small v-html="pos.timeline"></small>
            <address v-html="pos.location"></address>
          </div>
        </div>
        <p>
          {{pos.description}}
        </p>
      </article>
    </div>
  `
})
Vue.component('Awards', {
  data () {
    return {
      awards: [
        {
          title: 'Speaker, VueNYC',
          date: 'October 2017'
        },
        {
          title: 'Best iPad/Tablet Advertising, Digiday Mobi Awards',
          date: '2012'
        },
        {
          title: 'Best Mobile Branding, Digiday Mobi Awards',
          date: '2012'
        },
         {
          title: 'Mobile Mentor, Startup Weekend NYC',
          date: '2011'
        },
        {
          title: 'Javascript Instructor, General Assembly',
          date: '2010 &mdash; 2012'
        },
        {
          title: 'Co-Founder, Refresh Baltimore',
          date: '2008'
        },
      ]
    }
  },
  template: `
    <div>
      <h3>Awards &amp; Accolades</h3>
        <ul class="awards" v-for="award in awards">
          <li>
            <strong v-html="award.title"></strong> 
            <small v-html="award.date"></small>
          </li>
        <ul>
    </div>
  `
})
Vue.component('Skillset', {
  props: ['source'],
  created(){
    this.sourceset = this.source === 'skillset' ? this.skillset.sort() : this.tools.sort()
  },
  data(){
    return {
      skillset: [ 'AngularJS','Vue','React','Redux','Expo','React Native','Apollo','GraphQL','Node.JS','Express','Passport','TypeScript','Babel ','ESLint','D3','Lodash','Bootstrap','HTML5','CSS3','Javascript','ES5(6)','SASS','Compass','Styled-Components','Styled-System','PostgreSQL','SQLite','MongoDB','Firebase','REST','SVG','Icon Development','Interface Design','Debian Linux','OSX','Agile Methodologies'],
      tools: ['Git','Github', 'Heroku','AWS','Docker','Now','Kubernetes','Photoshop','Illustrator','Sketch','Figma','NPM','Yarn','Webpack','Parcel','Vim','VSCode','Gatsby','Next.JS'],
      sourceset: null
    }
  },
  ready(){
    sourceset = skills
  },
  template: `
  <div>
    <h3>{{source}}</h3>
    <div class="skills" v-for="s in sourceset">
      <label>{{s}}</label>
    </div>
  </div>
`
})       
Vue.component('Education', {
  data(){
    return {
      university:{
        name: 'Salisbury University',
        date: 'August 2002 &ndash; May 2007',
        location: 'Salisbury, MD'
      },
      degrees:[
        {
          type: 'Bachelors of Science',
          major: 'Computer Science',
          minor: 'Mathematics'
        },
        {
          type: 'Bachelors of Arts',
          major: 'Art',
          concentration: 'Graphic Design'
        },
      ]
    }
  },
  template: `
    <div>
        <h3>Education</h3>
        <strong v-html="university.name"></strong><br>
        <small v-html="university.date"></small><br>
        <address v-html="university.location"></address><br>
        ${degress.map(degree => (
          `<i>{{degree.type}}</i><br>
          <label>Major:</label> {{degree.major}} <br>
          <label>Minor:</label> {{degree.minor}}<br>
          <br>`
        ))}
    </div>
  `
})
new Vue({
  el: '#resume'
})
*/
