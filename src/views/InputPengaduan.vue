<template>
    <div>
        <!-- Header -->
    <header id="header" class="ex-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Pengaduan</h1>
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
                    <h2>Masukkan Laporan</h2>
                    <ul class="list-unstyled li-space-lg">
                        <li class="address">Perhatikan Cara Menyampaikan Pengaduan Yang Baik dan Benar</li>
                    </ul>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="row">
                <div class="col-lg-12">
                    
                    <!-- Contact Form -->
                    <form v-on:submit.prevent="Save" id="contactForm" data-toggle="validator" data-focus="false">
                        <!-- <div class="form-group">
                            <label for="nama_kategori" class="col-form-label">Kategori</label>
                            <b-form-select id="id_kategori" v-model="id_kategori" required>
                                <option v-for="item in kategori" :value="item.id_kategori" :key="item.id_kategori">
                                    {{item.nama_kategori}}
                                </option>
                            </b-form-select>
                        </div> -->
                        <!-- <div class="form-group">
                            <label for="id_kategori" class="col-form-label">Kategori</label>
                            <b-form-select id="id_kategori" v-model="id_kategori" :options="kategori"></b-form-select>
                      </div> -->
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
                            <label for="isi_laporan" class="col-form-label">Isi Laporan</label>
                            <b-form-input type="text" v-model="isi_laporan" placeholder="Isi Laporan"></b-form-input>
                        </div>
                        <div class="form-group">
                            <label for="tgl_pengaduan" class="col-form-label">Tgl Pengaduan</label>
                            <b-form-input type="date" v-model="tgl_pengaduan"></b-form-input>
                        </div>
                        <div class="form-group">
                            <label for="foto" class="col-form-label">Foto</label>
                            <b-form-file id="foto" class="mb-1" ></b-form-file>
                        </div>
                        <br>
                        <div class="form-group">
                            <button type="submit" class="form-control-submit-button">SUBMIT MESSAGE</button>
                        </div>
                    </form>
                    </div>
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
      id_pengaduan: "",
      id_user: "",
      id_kategori: "",
      tgl_pengaduan: "",
      isi_laporan: "",
      foto: "",
      status: "",
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
      this.tgl_pengaduan = "";
      this.id_kategori = "";
      this.isi_laporan = "";
      this.foto = "";
      document.getElementById("foto").value = null;

    },

    Save : function(){
      let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
      this.$bvToast.show("loadingToast");
        let form = new FormData();
        form.append("tgl_pengaduan", this.tgl_pengaduan);
        form.append("id_kategori", this.id_kategori);
        form.append("isi_laporan", this.isi_laporan);
        form.append("foto", document.getElementById("foto").files[0]);

        this.axios.post("/masyarakat/pengaduan/", form, conf)
        .then(() => this.$router.push("/getpengaduan"))
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
