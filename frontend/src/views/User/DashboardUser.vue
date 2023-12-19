<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.money.title"
              :value="stats.money.value"
              :percentage="stats.money.percentage"
              :iconClass="stats.money.iconClass"
              :iconBackground="stats.money.iconBackground"
              :detail="stats.money.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.users.title"
              :value="stats.users.value"
              :percentage="stats.users.percentage"
              :iconClass="stats.users.iconClass"
              :iconBackground="stats.users.iconBackground"
              :detail="stats.users.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.clients.title"
              :value="stats.clients.value"
              :percentage="stats.clients.percentage"
              :iconClass="stats.clients.iconClass"
              :iconBackground="stats.clients.iconBackground"
              :percentageColor="stats.clients.percentageColor"
              :detail="stats.clients.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.sales.title"
              :value="stats.sales.value"
              :percentage="stats.sales.percentage"
              :iconClass="stats.sales.iconClass"
              :iconBackground="stats.sales.iconBackground"
              :detail="stats.sales.detail"
              directionReverse
            ></card>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-12">
            <div class="card">
              <div class="p-3 pb-0 card-header">
                <div class="d-flex flex-column align-items-center">
                  <h6 class="mb-2">Welcome to Simoto Budi As User</h6>
                  <!-- <img
                    src="https://source.unsplash.com/500x500/?admin"
                    alt="Admin Image"
                    class="admin-image"
                  /> -->
                  <img src="../../../src/assets/img/image_login.jpg" alt="User Image" class="user-image" />
                </div>
              </div>
              <div class="card-body text-center">
                <p class="text-muted">
                  Thank you for choosing Simoto! We're excited to have you on
                  board. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/examples/Cards/Card.vue";

export default {
  name: "dashboard-user-default",
  data() {
    return {
      stats: {
        money: {
          title: "Number of Admins",
          value: "$53,000",
          percentage: "+55%",
          iconClass: "fas fa-user-tie", 
          detail: "since yesterday",
          iconBackground: "bg-gradient-primary",
        },
        users: {
          title: "Number of Validators",
          value: "2,300",
          percentage: "+3%",
          iconClass: "fas fa-user-check",
          iconBackground: "bg-gradient-danger",
          detail: "since last week",
        },
        clients: {
          title: "Number of Users",
          value: "+3,462",
          percentage: "-2%",
          iconClass: "fas fa-user", 
          percentageColor: "text-danger",
          iconBackground: "bg-gradient-success",
          detail: "since last quarter",
        },
        sales: {
          title: "Loan Amount",
          value: "$103,430",
          percentage: "+5%",
          iconClass: "fas fa-car", 
          iconBackground: "bg-gradient-warning",
          detail: "than last month",
        },
      },
    };
  },

  components: {
    Card,
  },
};
</script>

<style scoped>
.user-image {
  width: 40%;
  height: auto; 
  margin-top: 10px; 
  border-radius: 10%;
}
</style>
