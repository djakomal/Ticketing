<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <main>
        <div class="container-fluid">

            <div class="container">

                <form @submit.prevent="Addmail">
                    <div class="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
                        <h2 class="h5 mb-3 mb-lg-0"><a href="../../pages/admin/customers.html" class="text-muted"><i
                                    class="bi bi-arrow-left-square me-2"></i></a> Create new customer</h2>
                        <div class="hstack gap-3">
                            <button class="btn btn-light btn-sm btn-icon-text"><i class="bi bi-x"></i> <span
                                    class="text">Cancel</span></button>
                            <button class="btn btn-primary btn-sm btn-icon-text"><i class="bi bi-save"></i> <span
                                    class="text">Save</span></button>
                        </div>
                    </div>

                    <!-- Main content -->
                    <div class="row">
                        <!-- Left side -->
                        <div class="col-lg-8">


                            <!-- Basic information -->
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h3 class="h6 mb-4">Event information</h3>

                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">Name</label>
                                                <input type="text" class="form-control" v-model="events.name">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">description</label>
                                                <textarea type="text" class="form-control"
                                                    v-model="events.description"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">Artiste</label>
                                                <input type="text" class="form-control" v-model="events.artiste">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">Budget</label>
                                                <input type="number" class="form-control" v-model="events.budget">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">Categories</label>
                                                <input type="number" class="form-control" v-model="events.categorie">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Address -->
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="mb-3">
                                        <label class="form-label">Invited</label>
                                        <input type="text" class="form-control" v-model="events.invited">
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">Date</label>
                                                <input type="date" class="form-control" v-model="events.date">
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">Jour</label>
                                                <input type="text" class="form-control" v-model="events.jour">
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">Lieu</label>
                                                <input type="text" class="form-control" v-model="events.lieu">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">Mois</label>
                                                <input type="month" class="form-control" v-model="events.mois">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">photo</label>
                                                <input type="file" class="form-control" @change="handleFileUpload"
                                                    accept="image/*">
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Right side -->
                        </div>
                    </div>
                </form>
                <!-- Title -->
            </div>

        </div>
    </main>
</template>

<style lang="css">
body {
    background: #eee;
}

.card {
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, .125);
    border-radius: 1rem;
}

.card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.5rem 1.5rem;
}
</style>
<script lang="js">
import axios from 'axios';
export default {
    name: 'AdEvent',
    components: {

    },
    data() {
        return {
            events: {
                name: '',
                description: '',
                artiste: '',
                budget: '',
                invited: '',
                lieu: '',
                jour: '',
                mois: '',
                photo: '',
                categorie: '',
                date:''

            },
            file: null,
            uploadedImage: null, // URL de l'image uploadée
        }
    },
    methods: {
        Addmail() {
            axios.post('http://localhost:8081/tickets/tickets/add', this.events
                // {
                //     // method:'POST',
                //     // headers:{
                //     //     'Content-Type':'application/json'
                //     // },
                //     // body:JSON.stringify(this.mail)

                // }
            )
                .then(res => {
                    console.log(res)
                    alert("enregistrement avec succes:", res)
                    this.$router.push("ViewEvent")
                })

        }
    },
   


}
</script>