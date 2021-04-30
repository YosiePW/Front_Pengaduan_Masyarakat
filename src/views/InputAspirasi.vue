<template>
    <div>
        <!-- Header -->
    <header id="header" class="ex-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Aspirasi</h1>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </header> <!-- end of ex-header -->
    <!-- end of header -->



    <!-- Contact -->
    <div id="contact" class="form-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Masukkan Aspirasi</h2>
                    <ul class="list-unstyled li-space-lg">
                        <li class="address">Perhatikan Cara Menyampaikan Aspirasi Yang Baik dan Benar</li>
                    </ul>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="row">
                <div class="col-lg-12">
                    
                    <!-- Contact Form -->
                    <form v-on:submit.prevent="Save" id="contactForm" data-toggle="validator" data-focus="false">
                        <div class="form-group">
                          <label for="nama" class="col-form-label">Id Kategori</label>
                            <select class="form-control" name="id_kategori" id="id_kategori" v-model="id_kategori">
                            <option value="1" checked>Pembangunan</option>
                            <option value="2">Ekonomi</option>
                            <option value="3">Pendidikan</option>
                            <option value="4">Kesehatan</option>
                            <option value="6">Sosial dan kesejahteraan</option>
                            <option value="8">Kehidupan</option>
                          </select>
                        </div>
                        <div class="form-group">
                            <label for="isi_aspirasi" class="col-form-label">Isi Aspirasi</label>
                            <b-form-input type="text" v-model="isi_aspirasi" placeholder="Isi Aspirasi"></b-form-input>
                        </div>
                        <br>
                        <div class="form-group">
                            <button type="submit" class="form-control-submit-button">SUBMIT MESSAGE</button>
                        </div>
                    </form>
                    <!-- end of contact form -->

                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of form-2 -->
    <!-- end of contact -->
    </div>
</template>

<script>
module.exports = {
  data : function(){
    return {
      search: "",
      id_aspirasi: "",
      id_user: "",
      id_kategori: "",
      isi_aspirasi: "",
      action: "",
      message: "",
      currentPage: 1,
      rows: 0,
      perPage: 10,
      key: "",
    }
  },

  methods: {

    Add : function(){
      this.action = "insert";
      this.id_kategori = "";
      this.isi_aspirasi = "";

    },

    Save : function(){
      let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
      this.$bvToast.show("loadingToast");
        let form = new FormData();
        form.append("id_aspirasi", this.id_aspirasi);
        form.append("id_kategori", this.id_kategori);
        form.append("isi_aspirasi", this.isi_aspirasi);

        this.axios.post("/masyarakat/aspirasi/", form, conf)
        .then(() => this.$router.push("/getaspirasi"))
        .catch(error => {
          console.log(error);
        });
    },
  },
  mounted(){
    this.key = localStorage.getItem("Authorization");
  }
}
</script>