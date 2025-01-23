<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <main>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
        <div class="container">
            <div class="row flex-lg-nowrap">
                <div class="col-12 col-lg-auto mb-3" style="width: 200px;">
                    <div class="card p-3">
                        <div class="e-navlist e-navlist--active-bg">
                            <ul class="nav">
                                <li class="nav-item"><a class="nav-link px-2 active" href="#"><i
                                            class="fa fa-fw fa-bar-chart mr-1"></i><span>Overview</span></a></li>
                                <li class="nav-item"><a class="nav-link px-2"
                                        href="https://www.bootdey.com/snippets/view/bs4-crud-users" target="__blank"><i
                                            class="fa fa-fw fa-th mr-1"></i><span>CRUD</span></a></li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="e-tabs mb-3 px-3">
                        <ul class="nav nav-tabs">
                            <li class="nav-item"><a class="nav-link active" href="#">Evenement</a></li>
                        </ul>
                    </div>

                    <div class="row flex-lg-nowrap">
                        <div class="col mb-3">
                            <div class="e-panel card">
                                <div class="card-body">
                                    <div class="card-title">
                                        <h6 class="mr-2"><span>Users</span><small class="px-1">Be a wise leader</small>
                                        </h6>
                                    </div>
                                    <div class="e-table">
                                        <div class="table-responsive table-lg mt-3">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th class="align-top">
                                                            <div
                                                                class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                                                                <input type="checkbox" class="custom-control-input"
                                                                    id="all-items">
                                                                <label class="custom-control-label"
                                                                    for="all-items"></label>
                                                            </div>
                                                        </th>

                                                        <th>Affiche</th>
                                                        <th class="max-width">Evenement</th>
                                                        <th class="max-width">Description</th>
                                                        <th class="max-width">Artiste</th>
                                                        <th class="max-width">Categories</th>
                                                        <th class="max-width">Budget</th>
                                                        <th class="max-width">Invited</th>
                                                        <th class="sortable">Lieu</th>

                                                        <th> </th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="events in eventdetails" v-bind:key="events.id">
                                                        <td class="align-middle">
                                                            {{ events.id }}
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <div class="bg-light d-inline-flex justify-content-center align-items-center align-top"
                                                                style="width: 35px; height: 35px; border-radius: 3px;">
                                                             
                                                                   
                                                               
                                                            </div>
                                                        </td>

                                                        <td class="text-nowrap align-middle">{{ events.name }}</td>

                                                        <td class="text-nowrap align-middle">{{ events.description }}
                                                        </td>
                                                        <td class="text-nowrap align-middle">{{ events.artiste }}</td>
                                                        <td class="text-nowrap align-middle">{{ events.categories }}
                                                        </td>
                                                        <td class="text-nowrap align-middle">{{ events.budget }}</td>
                                                        <td class="text-nowrap align-middle">{{ events.invited }}</td>
                                                        <td class="text-nowrap align-middle">{{ events.lieu }}</td>
                                                        <td class="text-nowrap align-middle"><span>{{ events.jour }} -
                                                                {{ events.mois }}</span>
                                                        </td>

                                                        <td class="text-center align-middle">
                                                            <div class="btn-group align-top">
                                                                <button class="btn btn-sm btn-outline-secondary badge"
                                                                    type="button" data-toggle="modal"
                                                                    data-target="#user-form-modal">Edit</button>
                                                                <button class="btn btn-sm btn-outline-secondary badge"
                                                                    type="button"><i class="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <ul class="pagination mt-3 mb-0">
                                                <li class="disabled page-item"><a href="#" class="page-link">‹</a></li>
                                                <li class="active page-item"><a href="#" class="page-link">1</a></li>
                                                <li class="page-item"><a href="#" class="page-link">2</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-3 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="text-center px-xl-3">
                                        <button class="btn btn-success btn-block" type="button" data-toggle="modal"
                                            data-target="#user-form-modal" @click="rediction">New User</button>
                                    </div>
                                    <hr class="my-3">
                                    Ajout d'un evenement
                                    <hr class="my-3">

                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- User Form Modal -->
                
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="css">
body {
    margin-top: 20px;
    background: #f8f8f8
}
</style>

<script lang="js">

import axios from 'axios';

export default {
    name: 'ViewEvent',
    components: {

    },

    data() {
        return {
            eventdetails: [],
        };
    },
    methods: {

        getMails() {
            axios.get('http://localhost:8081/tickets/tickets')
                // .then(res => res.json())
                .then(res => {
                    this.eventdetails = res.data
                    console.log(this.eventdetails)
                })
        },

        rediction() {
            this.$router.push({ name: "AddView" });
        }
    },
    beforeMount() {
        this.getMails()
    }


};

</script>