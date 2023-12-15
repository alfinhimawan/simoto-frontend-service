<template>
  <div
    class="collapse navbar-collapse w-auto h-auto h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <!-- Admin Sidebar -->
      <template v-if="isUserAdmin()">
        <sidenav-item
          url="/Admin/dashboard-admin-default"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Dashboard'"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>

        <!-- Tambahkan sidenav-item untuk admin di sini -->
        <sidenav-item
          url="/Admin/user"
          :class="getRoute() === 'user' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'User'"
        >
          <template v-slot:icon>
            <i
              class="fas fa-user text-info text-sm opacity-10"
              style="margin-left: 1px; height: 28px"
            ></i>
          </template>
        </sidenav-item>

        <sidenav-item
          url="/Admin/vehicle"
          :class="getRoute() === 'vehicle' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Vehicle'"
        >
          <template v-slot:icon>
            <i
              class="fas fa-car text-dark text-sm opacity-10"
              style="margin-left: 1px; height: 28px"
            ></i>
          </template>
        </sidenav-item>

        <sidenav-item
          url="/Admin/service"
          :class="getRoute() === 'service' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Service'"
        >
          <template v-slot:icon>
            <i
              class="fas fa-tools text-danger text-sm opacity-10"
              style="margin-left: 1px; height: 28px"
            ></i>
          </template>
        </sidenav-item>

        <sidenav-item
          url="/Admin/penggunaan"
          :class="getRoute() === 'penggunaan' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Penggunaan'"
        >
          <template v-slot:icon>
            <i
              class="fas fa-wrench text-warning text-sm opacity-10"
              style="margin-left: 1px; height: 28px"
            ></i>
          </template>
        </sidenav-item>

        <sidenav-item
          url="/Admin/logout"
          :class="getRoute() === 'logout' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'تسجيل الخروج' : 'Logout'"
          to="/signin"
        >
          <template v-slot:icon>
            <i
              class="fas fa-sign-out-alt text-success text-sm opacity-10"
              style="margin-left: 1px; height: 28px"
            ></i>
          </template>
        </sidenav-item>
      </template>

      <!-- Validator Sidebar -->
      <template v-else-if="isUserValidator()">
        <sidenav-item
          url="/Validator/dashboard-validator-default"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Dashboard'"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>

        <!-- Tambahkan sidenav-item untuk validator di sini -->
        <sidenav-item
          url="/Validator/penggunaan"
          :class="getRoute() === 'penggunaan' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Penggunaan'"
        >
          <template v-slot:icon>
            <i
              class="fas fa-wrench text-warning text-sm opacity-10"
              style="margin-left: 1px; height: 28px"
            ></i>
          </template>
        </sidenav-item>

        <sidenav-item
          url="/Validator/logout"
          :class="getRoute() === 'logout' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'تسجيل الخروج' : 'Logout'"
          to="/signin"
        >
          >
          <template v-slot:icon>
            <i
              class="fas fa-sign-out-alt text-success text-sm opacity-10"
              style="margin-left: 1px; height: 28px"
            ></i>
          </template>
        </sidenav-item>
      </template>

      <!-- User Sidebar -->
      <template v-else-if="isUserUser()">
        <sidenav-item
          url="/User/dashboard-user-default"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Dashboard'"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>

        <sidenav-item
          url="/User/vehicle"
          :class="getRoute() === 'vehicle' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Vehicle'"
        >
          <template v-slot:icon>
            <i
              class="fas fa-car text-dark text-sm opacity-10"
              style="margin-left: 1px; height: 28px"
            ></i>
          </template>
        </sidenav-item>

        <!-- Tambahkan sidenav-item untuk user di sini -->
        <sidenav-item
          url="/User/penggunaan"
          :class="getRoute() === 'penggunaan' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Penggunaan'"
        >
          <template v-slot:icon>
            <i
              class="fas fa-wrench text-warning text-sm opacity-10"
              style="margin-left: 1px; height: 28px"
            ></i>
          </template>
        </sidenav-item>

        <sidenav-item
          url="/Validator/logout"
          :class="getRoute() === 'logout' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'تسجيل الخروج' : 'Logout'"
          to="/signin"
        >
          >
          <template v-slot:icon>
            <i
              class="fas fa-sign-out-alt text-success text-sm opacity-10"
              style="margin-left: 1px; height: 28px"
            ></i>
          </template>
        </sidenav-item>
      </template>
    </ul>
  </div>
  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <sidenav-card
      :class="cardBg"
      textPrimary="Need Help?"
      textSecondary="Please check our docs"
    />
  </div>
</template>

<script>
import SidenavItem from "./SidenavItem.vue";
import SidenavCard from "./SidenavCard.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Argon Dashboard 2",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    SidenavItem,
    SidenavCard,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
    isUserAdmin() {
      return this.$route.path.startsWith("/Admin");
    },
    isUserValidator() {
      return this.$route.path.startsWith("/Validator");
    },
    isUserUser() {
      return this.$route.path.startsWith("/User");
    },
  },
};
</script>
