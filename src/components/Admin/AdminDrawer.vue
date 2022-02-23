<template>
  <div>
    <v-app class="position-relative">
      <!-- Chevron Icon -->
      <v-navigation-drawer
        app
        v-model="drawer"
        disable-route-watcher
        permanent
        >
        <v-card
          width="256"
          class="rounded-0 h-120 overflow-hidden"
        >
          <!-- Moody Logo -->
          <div
            class="d-flex justify-center align-center"
            style="height: 70px"
          >
            <img
              v-if="getSidebarMini"
              src="../../assets/download (1).png"
              height="120px"
              width="120px"
             
              alt="logo"
            />
            <img
              v-if="!getSidebarMini"
              height="40px"
              width="100px"
            
              alt="moody"
              class="mx-15"
            />
          </div>
          <!------Render Left Pannel List---->
          <div
            id="sidebar-list"
            class="mt-10 pointer y-scroll"
            style="height: 82vh"
            v-if="links != ''"
          >
           <v-list>
        <v-divider
        ></v-divider>
            <v-list-item
              class="d-flex align-center pl-4 nav-hover"
              :class="titleName == link.tabName ? 'selected-route' : ''"
              id="left-nav-listitem"
              v-for="(link, i) in links"
              :key="i"
              router
              :to="link.route"
            >
              <!-- Sidebar Icons -->
              <div :id="link.icon">
                <v-icon
                  class="mr-7 py-4"
                  :color="titleName == link.tabName ? 'blue' : 'black'"
                  v-text="link.icon"
                  size="25"
                ></v-icon>
              </div>
              <!-- Sidebar Text -->
              <div v-show="!getSidebarMini || drawer" id="left-nav-list-text">
                <span
                  class="text-capitalize body-2 font-weight-bold"
                  :class="titleName == link.tabName ? 'selected-tab': ''"
                  v-if="link.text != 'Logout'"
                >
                  {{ link.text }}
                    <v-chip v-if="link.tabName=='Performance'" class="ml-5" x-small color="primary">
                      New
                </v-chip>
              
                    <v-chip v-if="link.tabName=='LocalLaws'" class="ml-5" x-small color="primary">
                      Beta
                </v-chip>
                </span>
              </div>
              <v-spacer> </v-spacer>
            </v-list-item>
               <v-divider ></v-divider>
           </v-list>

            <!-- Logout -->
          </div>
        </v-card>
      </v-navigation-drawer>

      <v-app-bar
        appcd dcd 
        class="app-bar elevation-0 border-bottom"
        :class="isMapModalSet ? 'shadow-app-bar' : ''"
      >
        <!-- Hamburger menu (for xs-screens only)-->
        <v-app-bar-nav-icon
          id="admin-hameburger-icon"
          class="black--text"
          @click="drawer = !drawer"
          v-if="$vuetify.breakpoint.xs"
        ></v-app-bar-nav-icon>
        <v-icon
          size="30"
          color="black"
          class="mr-1"
          v-if="$route.path == '/MessageArea'"
          >mdi-headset-dock</v-icon
        >
        <v-toolbar-title id="admin-rightpannel-header-title">{{
          
        }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="mb-0 pb-0">
          <v-icon class="mr-3">mdi-bell</v-icon>
          <span>My Account</span><v-icon class="ml-1 mr-5">mdi-chevron-down</v-icon>
          Help<v-icon class="ml-1 mr-5">mdi-chevron-down</v-icon>
        </div>
      </v-app-bar>
      <v-main id="admin-right-pannel">
        <v-container >
          <!-- If using vue-router -->
          <router-view :key="$route.fullPath"></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { eventBus } from "@/main";
export default {
  components: {
   
  },
  data() {
    return {
      isMapModalSet: false,
      mini_variant: this.$vuetify.breakpoint.xs ? false : true,
      showable_links: [],
      loggedInUserDetail: JSON.parse(
        localStorage.getItem("loggedInUserDetail")
      ),
      titleName: "",
      drawer:
        this.$vuetify.breakpoint.name == "md" ||
        this.$vuetify.breakpoint.name == "sm" ||
        this.$vuetify.breakpoint.name == "xs"
          ? false
          : true,
      links: [
        {
          icon: "mdi-camera-timer",
          text: "Dashboard",
          tabName: "Dashboard",
          route: "/",
          color: "black",
        },
        {
          icon: "mdi-email-outline",
          text: "Inbox",
          tabName: "Inbox",
          route: "/Inbox",
          color: "black",
        },
        {
          icon: "mdi-calendar-text",
          text: "Calender",
          tabName: "Calender",
          route: "/Calender",
          color: "black",
        },
        {
          icon: "mdi-chart-line-stacked",
          text: "MarketMaker",
          tabName: "MarketMaker",
          route: "/MarketMaker",
          color: "black",
        },
        {
          icon: "mdi-content-save",
          text: "Reservation manager",
          tabName: "ReservationManager",
          route: "/ReservationManager",
          color: "black",
        },
        {
          icon: "mdi-chart-bar",
          text: "Performance",
          tabName: "Performance",
          route: "/Performance",
          color: "black",
        },
        {
          icon: "mdi-home",
          text: "Property",
          tabName: "Property",
          route: "/Property",
          color: "black",
        },
        {
          icon: "mdi-gavel",
          text: "Local laws",
          tabName: "LocalLaws",
          route: "/LocalLaws",
          color: "black",
        },
  
      ],
    };
  },
  computed: {
    ...mapGetters([
      "getSidebarMini",
      
    ]),
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
  created() {
  },
  watch: {
    breakpoint(value) {
      if (value == "md" || value == "sm" || value == "xs") {
        this.mini = true;
        this.$store.commit("setSidebarMini", true);
      }
    },
  },
  updated() {
    for (let i in this.links) {
        if(this.$route.name == 'Admin'){
         this.titleName = 'Dashboard'
      }
      if (this.links[i].route == "/" + this.$route.name) {
        this.titleName = this.links[i].tabName;
      }
    }
     //if internet is not connected
    if (navigator.onLine === false) {
      eventBus.$emit("snackbarMsg", {
        message: "No internet connection",
        color: "red",
      });
    }
  },
  methods: {
    /**
     * @Description
     * this function is used to toogle sidebar
     * @param format
     * @return void
     */
    toggleMini() {
      this.mini_variant = !this.mini_variant;
      this.$store.commit("setSidebarMini", this.mini_variant);
    },
    /**
     * @Description
     * this function is used to selected the color in sidebar
     * @param (link, titleName, index)
     * @return void
     */
    getColor(link, titleName, index) {
      return titleName == link.tabName
        ? (this.links[index].color = "#215549")
        : (this.links[index].color = "black");
    },
    /**
     * @Description
     * this function is used to show only those tabs which users have permissions
     * @param (link, titleName, index)
     * @return void
     */
    
    
    /**
     * @Description
     * this function is used to show the name in top app bar
     * @param none
     * @return void
     */
    detailsPageName() {
      let temp;
      if (this.$route.path == "/MessageArea") {
        temp = "/" + this.getConversation.request_page;
      } else temp = this.$route.path;
      let link = this.links.find((item) => {
        return item.route == temp;
      });
      if (link) {
        this.titleName = link.text;
        link.color = "white";
      } else if (this.$route.path.includes("Tasks")) {
        this.titleName = "Task Detail";
      } else if (this.$route.path.includes("Taskers")) {
        this.titleName = "Tasker Details";
      } else if (this.$route.path.includes("Posters")) {
        this.titleName = "Customer Details";
      } else if (this.$route.path.includes("AdminDashboard")) {
        this.titleName = "Admin Dashboard";
      } else if (this.$route.path.includes("Conversation")) {
        this.titleName = "Closed Ticket Conversation";
      } else if (this.$route.path.includes("Inventory")) {
        this.titleName = "Inventory";
      } else if (this.$route.path.includes("Payable")) {
        this.titleName = "Payable Taskers";
      } else if (this.$route.path.includes("Latency")) {
        this.titleName = "Latency Taskers";
      }
    },
  },
  mounted() {
    this.titleName = window.location.href.substr(
      window.location.href.lastIndexOf("/") + 1
    );
    this.detailsPageName();
    this.$store.commit("setSidebarMini", true);
  },
};
</script>
<style scoped>
.toggler {
  position: absolute !important;
  top: 72px;
  z-index: 9999;
  background-color: black !important;
  /* border: solid white 2px; */
  height: 30px;
  width: 30px;
}
.toggler-expanded {
  left: 242px !important;
}
.toggler-collapsed {
  left: 40px !important;
}
.border-bottom {
  border-bottom: 1px solid rgb(200, 200, 200);
  background-color: transparent !important;
}
.shadow-app-bar {
  background-color: rgb(0 0 0 / 75%) !important;
}
.selected-tab{
  color: #2196F3 !important;
}
.selected-route{
  border-left: 5px solid #2196F3;
}
</style>