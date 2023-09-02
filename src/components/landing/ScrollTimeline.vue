<template>
  <div>
    <NavbarPage  @go-section="goToSection" />
    <div>
      <ul class="timeline" ref="timeline">
        <li class="bar" :style="{ height: barHeight, top: barTop }"></li>
      </ul>
    </div>
    <div ref="container" class="container">
      <section data-name="About" ref="about" class="section">
        <AboutSection/>
      </section>
      <section data-name="Works" ref="works" class="section">
        <WorkSection/>
      </section>
      <section data-name="Education" ref="education" class="section">
        <EducationSection/>
      </section>
      <section data-name="Skills" ref="skills" class="section">
        <SkillsSection/>
      </section>
      <section data-name="Projects" ref="projects" class="section">
        <ProjectsSection/>
      </section>
      <section data-name="Contact" ref="contact" class="section">
        <ContactSection/>
      </section>
    </div>
  </div>
</template>

<script>
import WorkSection from "@/components/sections/WorkSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import EducationSection from "@/components/sections/EducationSection.vue";
import SkillsSection from "@/components/sections/SkillsSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import NavbarPage from "@/components/landing/Navbar.vue";

export default {
  components: {NavbarPage, ContactSection, ProjectsSection, SkillsSection, EducationSection, AboutSection, WorkSection},

  data() {
    return {
      barTop: 0,
      barHeight: 0,
      sectionMinHeight: 0,
      sections: [
        {name: 'Section 1'},
        {name: 'Section 2'},
      ],
    };
  },

  mounted() {

    window.addEventListener("scroll", () => {
      let top = (window.scrollY / this.sumSection()) * 100;
      document.querySelector(".bar").style.top = top + "%";
    })

    window.addEventListener('resize', () => {
      this.setSection();
      this.arrangeNodes();
      this.setDimensionBar();
    })

    this.$nextTick(() => {
      this.setSection()
      this.arrangeNodes()
      this.setDimensionBar()
    })
  },

  methods: {

    goToSection(event, value) {
      let element = this.$refs[(event, value)];
      let top = element?.offsetTop;
      window.scrollTo(0, top);
    },

    sumSection() {
      return document.querySelector(".container").offsetHeight
    },

    setDimensionBar() {
      const barElement = document.querySelector(".bar");
      const windowHeight = window.innerHeight;
      const sumSectionValue = this.sumSection()

      if (barElement) {
        barElement.style.height = (windowHeight / sumSectionValue) * 100 + "%";
      }

    },

    setSection() {
      const nodes = document.querySelectorAll(".node");
      nodes.forEach(node => node.remove());

      const sections = document.querySelectorAll("section");
      const timeline = document.querySelector(".timeline");

      sections.forEach((element) => {
        let name = element.getAttribute("data-name");
        let node = document.createElement("li");
        node.className = "node";
        node.innerHTML = "<span>" + name + "</span>";
        timeline.appendChild(node);

        let timelineHeight = timeline.clientHeight;
        let documentHeight = document.body.clientHeight;
        let elementOffsetTop = element.getBoundingClientRect().top;

        node.style.top = (timelineHeight / documentHeight) * elementOffsetTop + "px";
      });

    },

    addBehaviours() {
      const sections = this.$el.querySelectorAll('.section');
      const nodes = this.$el.querySelectorAll('.node');

      nodes.forEach((node, i) => {
        node.addEventListener('click', (e) => {
          e.preventDefault();
          const scroll = sections[i]?.offsetTop;
          window.scrollTo({
            top: scroll,
            behavior: 'smooth',
          });
        });
      });
    },

    arrangeNodes() {
      const nodes = document.querySelectorAll(".node");
      nodes.forEach(node => node.remove());

      const sections = document.querySelectorAll("section");
      sections.forEach((element) => {
        const name = element.getAttribute("data-name");
        const node = document.createElement("li");
        node.classList.add("node");
        node.innerHTML = `<span>${name}</span>`;
        document.querySelector(".timeline").appendChild(node);

        const timelineHeight = document.querySelector(".timeline").clientHeight;
        const topValue = (timelineHeight / this.sumSection()) * element.getBoundingClientRect().top;

        node.style.top = `${topValue}px`;
      });
      console.log(document.querySelectorAll(".node"))
      this.addBehaviours();
    }
  }

}
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,400,900')

a.white-mode, a.white-mode:link, a.white-mode:visited, a.white-mode:active
  position: fixed
  font-family: "Montserrat", serif
  transform: rotate(-90deg)
  transform-origin: 0 0
  left: 40px
  bottom: 0
  font-size: 12px
  text-decoration: none
  background: #f7f7f7
  padding: 4px 8px
  z-index: 10
  color: #3B425A

  &:hover
    background: #7B46FE
    color: #FDFA75

body
  color: white

h1
  font-size: 56px
  font-weight: 400
  color: #7045ff
  position: relative

  &:after
    content: ""
    padding-bottom: 30px
    display: block
    border-bottom: 1px solid rgba(70, 76, 99, 1)
    width: 60%

h2
  font-size: 36px
  font-weight: 100
  color: #83ffe1
  position: relative

img
  max-width: 100%

.timeline
  margin: 0
  padding: 0
  list-style: none
  position: fixed
  left: 100px
  top: 10%
  width: 1px
  height: 90%
  background: rgba(70, 76, 99, 1)

  .bar
    position: absolute
    width: 1px
    background-color: #fcf769
    top: 0
    left: 0
    z-index: 0

.container
  padding-left: 200px

section
  padding: 20px
  font-size: 16px
  font-weight: 200
  font-family: "Montserrat", serif

p
  line-height: 2

.node
  position: absolute
  width: 3px
  height: 3px
  background: #FFF
  left: -1px
  z-index: 1
  cursor: pointer
  border-radius: 3px

  &:hover
    background: #46ffdd

    span
      opacity: 1


  &:before
    content: ""
    position: absolute
    width: 9px
    height: 9px
    left: -3px
    top: -3px

  span
    transition: all .4s ease-out
    text-transform: uppercase
    right: 4px
    top: -16px
    color: #FFFFFF
    position: absolute
    padding: 10px
    white-space: nowrap
    font-size: 10px
    font-weight: 200
    font-family: "Montserrat", serif
    opacity: 0

</style>