<template>
  <div class="container">
    <div class="title">
      <h1>License</h1>
    </div>
    <div class="license">
      <v-row>
        <v-col :key="1">
          <div class="name">
            {{ license.getLicenseName() }}
          </div>
        </v-col>
        <v-col :key="2">
          <div class="until">
            expires: {{ license.getActivationTimestamp() == -1 ? "never" : new Date(license.getActivationTimestamp()+(license.getDurationDays() * 24 * 60 * 60 * 1000)) }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col :key="1">
          <div class="description">
            {{ license.getLicenseDescription() }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col :key="1">
          <div class="perks">
            Perks
            <v-row>
              <v-col :key="1">
                <div class="name">
                  Logging: Messages per channel
                </div>
                <div class="value">
                  {{ license.getPerkChannelLogging() }}
                </div>
              </v-col>
              <v-col :key="2">
                <div class="name">
                  VRoles: Total number
                </div>
                <div class="value">
                  {{ license.getPerkGuildRoles() }}
                </div>
              </v-col>
              <v-col :key="3">
                <div class="name">
                  ChatBot: Learning channels
                </div>
                <div class="value">
                  {{ license.getPerkChannelD43z1SelfLearning() }}
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col :key="1">
                <div class="name">
                  Tags: Total number
                </div>
                <div class="value">
                  {{ license.getPerkMiscTags() }}
                </div>
              </v-col>
              <v-col :key="2">
                <div class="name">
                  Notifications: Total number
                </div>
                <div class="value">
                  {{ license.getPerkMiscNotifications() }}
                </div>
              </v-col>
              <v-col :key="3">
                <div class="name">
                  Twitch Notifications: Total number:
                </div>
                <div class="value">
                  {{ license.getPerkMiscTwitchNotifications() }}
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col :key="1">
                <TextInput v-model="license_key" default_content="License key"/>
              </v-col>
              <v-col :key="2">
                <v-btn
                    elevation="2"
                    dark
                    rounded
                    @click="save"
                >Update</v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import API from "@/xbd_api/xbd_api";
import License from "@/xbd_api/objects/License";
import TextInput from "@/components/settings/inputs/TextInput";
import Guild from "@/xbd_api/objects/Guild";

export default {
  name: "LicenseSettings",
  components: {TextInput},

  props: {
    guild: {
      required: true,
      type: Guild,
    },
    license: {
      required: true,
      type: License,
    },
  },

  data() {
    return {
      license_key: null,
    }
  },

  methods: {
    save(){
      API.updateGuildLicense(this.guild, this.license_key).then(
          () => {
            this.$emit("notify", "info", "Updated! Reloading page...");
            setTimeout(function() {
              location.reload();
            }, 2000);
          },
          (error) => {
            if(error.error === 403){
              this.$emit("notify", "warning", "You are not allowed to view and edit those things. Reloading page...");
            }else{
              this.$emit("notify", "warning", "Failed to update data \"license\". Reloading page... :"+error.error+": "+error.msg);
            }
            setTimeout(function() {
              location.reload();
            }, 2000);
          }
      )
    }
  },
}
</script>

<style scoped lang="scss">
.container {
  min-width: 97vw;
  background-color: #111111;
  font-size: 21px;
  color: white;
  font-family: "Lato", sans-serif;
  padding-left: 1%;
  margin-top: 1%;
  .title {
    h1{
      font-size: 32px;
    }
  }
  .license {
    .name {
      color: gray;
    }
    .description {
      font-size: 18px;
      color: gray;
    }
    .until {
      color: gray;
    }
    .perks {
      font-size: 24px;
      .name {
        font-size: 20px;
        color: white;
      }
      .value {
        font-size: 20px;
        color: gray;
      }
    }
  }
}
</style>