<template>
    <div class="container-scroller">
        <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <!-- Text Logo - Use this if you don't have a graphic logo -->
        <!-- <a class="navbar-brand logo-text page-scroll" href="index.html">Evolo</a> -->

        <!-- Image Logo -->
        <a class="navbar-brand logo-image" href="/"><img src="images/logoesambat.svg" alt="alternative"></a>
        
        <!-- Mobile Menu Toggle Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-awesome fas fa-bars"></span>
            <span class="navbar-toggler-awesome fas fa-times"></span>
        </button>
        <!-- end of mobile menu toggle button -->

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
                <li v-if="level == 'masyarakat'" class="nav-item">
                    <a class="nav-link page-scroll" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li v-if="level == 'masyarakat'" class="nav-item">
                    <a class="nav-link page-scroll" href="/pengaduan">Pengaduan</a>
                </li>
                <li v-if="level == 'masyarakat'" class="nav-item">
                    <a class="nav-link page-scroll" href="/aspirasi">Aspirasi</a>
                </li>
                <!-- Dropdown Menu -->          
                <li v-if="level == 'masyarakat'" class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Data Saya</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/getpengaduan"><span class="item-text">Pengaduan Saya</span></a>
                        <div class="dropdown-items-divide-hr"></div>
                        <a class="dropdown-item" href="/getaspirasi"><span class="item-text">Aspirasi Saya</span></a>
                    </div>
                </li>
                <li v-if="level == 'masyarakat'" class="nav-item">
                    <a class="nav-link page-scroll" @click="logout">Logout</a>
                </li>
            </ul>
        </div>
    </nav> <!-- end of navbar -->
    </div>
</template>

<script>
export default {
  data : function(){
    return {
    level: "",
    }
  },
    name: 'navbar',
    computed : {
        isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods:{
      logout:function(){
          let conf = { headers : {"Authorization" : "Bearer " + localStorage.getItem("Authorization")} };
          // let form = new FormData();
          this.axios.post('/logout', conf).then(response => {
            if (response.data.success === false || response.data.status === 0) {
                this.$store.commit('logout')
                localStorage.removeItem("Authorization")
                this.$router.push({name: 'login'})
            }
          }).catch(error => {

        });
      },

      getData : function(){
      this.level = localStorage.getItem("userLevel");
    },

  },

  mounted() {
  this.getData();
  console.log(this.level);
}
}
</script>