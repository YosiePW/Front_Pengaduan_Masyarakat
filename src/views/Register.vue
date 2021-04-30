<template>
    <div class="container">
			<div class="row1 justify-content-center">
				<div class="col-md-7 col-lg-5">
					<div class="login-wrap p-4 p-md-5">
		      	<div class="icon d-flex align-items-center justify-content-center">
		      		<span class="fa fa-user-o"></span>
		      	</div>
		      	<h3 class="text-center mb-4">Sign Up</h3>
				<form method="post" action="#" v-on:submit.prevent="Register" class="login-form">
		      		<div class="form-group">
		      			<input v-model="nik" type="text" class="form-control rounded-left" placeholder="Nik" required>
		      		</div>
                      <div class="form-group">
                        <input v-model="nama" type="text" class="form-control rounded-left" placeholder="Nama" required>
                    </div>
                    <div class="form-group">
                        <input v-model="username" type="text" class="form-control rounded-left" placeholder="Username" required>
                    </div>
	            <div class="form-group d-flex">
	              <input v-model="password" type="password" class="form-control rounded-left" placeholder="Password" required>
	            </div>
                <div class="form-group">
                    <input v-model="telp" type="text" class="form-control rounded-left" placeholder="Telepon" required>
                </div>
	            <div class="form-group">
	            	<button type="submit" name="submit" class="form-control btn btn-primary rounded submit px-3">Sign Up</button>
	            </div>
	            <div class="form-group d-md-flex">
	            	<div class="w-50">
	            		<label class="checkbox-wrap checkbox-primary">I agree all statements
									  <input type="checkbox" checked>
									  <span class="checkmark"></span>
									</label>
								</div>
								<div class="w-50 text-md-right">
									<a href="#">Have an account</a>
								</div>
	            </div>
	          </form>
	        </div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
  data() {
    return {
      nik: "",
      nama: "",
      username: "",
      password: "",
      telp: "",
    };
  },
  methods: {
        Register: function () {
      let conf = { headers: { Authorization: "Bearer " + this.key } };
      this.$bvToast.show("loadingToast");
      let form = new FormData();
      form.append("id", this.id);
      form.append("nik", this.nik);
      form.append("nama", this.nama);
      form.append("username", this.username);
      form.append("password", this.password);
      form.append("telp", this.telp);
      this.axios
        .post("/register", form, conf)
        .then(() => this.$router.push("/login"))
        .catch((error) => {
          console.log(error);
        });
    },
    },
};
</script>
