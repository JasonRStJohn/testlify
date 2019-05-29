<template>
  <header>
    <a :href="url">
      <img class="main-logo" :alt="logo_alt" :src="logo_src()" />
    </a>
    <section id="site-info">
      <h1>{{company_name}}</h1>
      <h2>{{tag_line}}</h2>
    </section>
    <nav>
      <ul>
        <li v-for="link in links">
          <a :href="link.url">
            {{link.name}}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'InfiniteHeader',
  data: function() {
    return {
      logo: "igLogo.jpg",
      company_name: "Infinity Graphics",
      tag_line: "Hand Crafted Graphic Design And Web Development",
      url: "https://jasonobject.tk",
      links: [
        {
          name:"About Us/ Portfolio",
          url:"/our-team",
        },
        {
          name:"Pricing & Services",
          url:"/services",
        },
        {
          name:"Contact Us",
          url:"/contact",
        }
      ]
    }
  },
  computed: {
    logo_alt: function() {
      return this.company_name + " Logo";
    },
  },
  methods: {
    logo_src: function(){
      return require("../assets/" + this.logo);
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width:100%;
  display:flex;
  justify-content: space-around;
  flex-direction:column;
}
header * {
  flex:1;
  margin: 1em auto;
  display:block;
}
h1{
  font-family: 'Arapey', serif;
  font-size: 2em;
}
h2 {
  font-family: 'Montserrat', sans-serif;
  font-size:1em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main-logo {
  max-width: 50%;
}
#site-info {
  text-align:center;
}
</style>
