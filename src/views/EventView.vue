<template>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <main>
        <div class="container" v-for="events in eventdetails" v-bind:key="events.id">
   
            <div class="row align-items-center event-block no-gutters margin-40px-bottom">
                <div class="col-lg-7 order-2 order-lg-1">
                    <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                        <h5
                            class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                            <a :href="`/all`" class="text-theme-color">{{ events.name }}</a></h5>
                        <ul class="event-time margin-10px-bottom md-margin-5px-bottom">
                            <li><i class="far fa-clock margin-10px-right"></i> {{events.date  }}</li>
                            <li><i class="fas fa-user margin-5px-right"></i> Invited : {{ events.invited }}</li>
                        </ul>
                        <p>{{ events.description }}</p>
                        <a class="butn small margin-10px-top md-no-margin-top" :href="`/details/${events.id}`">Read Mors <i
                                class="fas fa-long-arrow-alt-right margin-10px-left"></i></a>
                    </div>
                </div>
                <div class="col-lg-5 order-1 order-lg-2">
                    <div class="position-relative">
                        <img src="https://www.bootdey.com/image/450x280/87CEFA/000000" alt="">
                        <div class="events-date">
                            <div class="font-size28">25</div>
                            <div class="font-size14">Feb</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end event block -->

            <!-- start event block -->
            
            <!-- end event block -->

            <!-- start event block -->
            
            <!-- end event block -->

            <!-- start event block -->
            <div class="row align-items-center event-block no-gutters">
                <div class="col-lg-5 col-sm-12">
                    <div class="position-relative">
                        <img src="https://www.bootdey.com/image/450x280/FF0000/000000" alt="">
                        <div class="events-date">
                            <div class="font-size28">10</div>
                            <div class="font-size14">Oct</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-sm-12">
                    <div class="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                        <h5
                            class="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                            <a :href="`/all`" class="text-theme-color">{{ events.name }}</a></h5>
                        <ul class="event-time margin-10px-bottom md-margin-5px-bottom">
                            <li><i class="far fa-clock margin-10px-right"></i>{{ events.date }}</li>
                            <li><i class="fas fa-map-marker-alt margin-5px-right"></i> Invited :{{ events.invited }} </li>
                        </ul>
                        <p>{{ events.description }}</p>
                        <a class="butn small margin-10px-top md-no-margin-top" :href="`/details/${events.id}`">Read Mors <i
                                class="fas fa-long-arrow-alt-right margin-10px-left"></i></a>
                    </div>
                </div>
            </div>
            <!-- end event block -->

        </div>
    </main>
</template>
<style lang="css">
body {
    background: #f5f5f5;
    margin-top: 20px;
}

.events-date {
    text-align: center;
    position: absolute;
    right: 30px;
    top: 30px;
    background-color: rgba(25, 47, 89, 0.9);
    color: #fff;
    padding: 12px 20px 8px 20px;
    text-transform: uppercase
}

.event-time li {
    display: inline-block;
    margin-right: 20px
}

.event-time li:last-child {
    margin-right: 0
}

.event-time li i {
    color: #59c17a
}

.event-block {
    box-shadow: 0px 0px 16px 0px rgba(187, 187, 187, 0.48)
}

.event-block ul li i {
    color: #59c17a
}

@media screen and (max-width: 1199px) {
    .event-date {
        padding: 10px 18px 6px 18px
    }
}

@media screen and (max-width: 575px) {
    .event-date {
        padding: 8px 15px 4px 15px
    }

    .events-date {
        padding: 10px 15px 6px 15px
    }
}

.position-relative {
    position: relative !important;
}

.margin-40px-bottom {
    margin-bottom: 40px;
}

.padding-60px-lr {
    padding-left: 60px;
    padding-right: 60px;
}

.margin-15px-bottom {
    margin-bottom: 15px;
}

.font-weight-500 {
    font-weight: 500;
}

.font-size22 {
    font-size: 22px;
}

.text-theme-color {
    color: #192f59;
}

.margin-10px-bottom {
    margin-bottom: 10px;
}

.margin-10px-right {
    margin-right: 10px;
}
</style>

<script>
import axios from 'axios';
export default {
    name:'EventView',
    components:{
        
    },

  data() {
    return {
        eventdetails:[],
    };
  },
  methods:{

getMails() {
        axios.get('http://localhost:8081/tickets/tickets')
            // .then(res => res.json())
            .then(res => {
                this.eventdetails= res.data
                console.log(this.eventdetails)
            })
    }
 
},
beforeMount() {
    this.getMails()
}


};
  
</script>