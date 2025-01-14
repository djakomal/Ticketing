<template>
  <div>
    <!-- <TicketView/> -->
    <DashbordView/>
  </div>
</template>

<script>
// @ is an alias to /src
import DashbordView from './DashbordView.vue';


export default {
  name: 'HomeView',
  components: {
    DashbordView
  }
}
</script>
