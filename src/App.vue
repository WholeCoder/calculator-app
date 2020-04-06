<template>
    <div id="app">
        <v-app id="inspire">

            <v-app-bar
                    :clipped-left="$vuetify.breakpoint.lgAndUp"
                    app
                    color="blue darken-3"
                    dark
            >
                <v-toolbar-title
                        style="width: 300px"
                        class="ml-0 pl-3"
                >
                    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <span class="hidden-sm-and-down"><a href="/" style="color: white;text-decoration: none">Weight Tracking Application</a></span>
                </v-toolbar-title>
                <v-text-field
                        flat
                        solo-inverted
                        hide-details
                        prepend-inner-icon="search"
                        label="Search"
                        class="hidden-sm-and-down"
                ></v-text-field>
                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>notifications</v-icon>
                </v-btn>
                <v-btn
                        icon
                        large
                >
                    <v-avatar
                            size="32px"
                            item
                    >
                        <v-img
                                src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                                alt="Vuetify"
                        >
                        </v-img>
                    </v-avatar>
                </v-btn>
                <v-btn icon v-on:click="logOut">
                    <v-icon>power_settings_new</v-icon>
                </v-btn>
            </v-app-bar>
            <v-content>

                <v-container
                        fluid
                >

                    <v-layout
                            align-center
                            justify-center
                    >


                        <v-row no-gutters style="height: 500px;">
                            <v-col
                            >
                                <v-card
                                        class="pa-2"
                                        tile
                                        outlined
                                >
                                    <transition name="component-fade" mode="out-in">
                                        <div>

                                            <router-view></router-view>
                                            <calculator  ref="childComponent"/>
<!--                                            <component :is="currentView" v-on:goToPosts="goToNextScreen"/>-->
                                        </div>
                                    </transition>
                                </v-card>
                            </v-col>
                        </v-row>


                        <br/><br/>
                        <v-tooltip right>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        :href="source"
                                        icon
                                        large
                                        target="_blank"
                                        v-on="on"
                                >

                                </v-btn>
                            </template>

                        </v-tooltip>

                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    import Calculator from './components/Calculator'
    import {store} from './components/UserStore'

    export default {
        store,
        data: () => ({
            // currentView: Calculator,
        }),
        components: {
            Calculator
        },
        watch: {
            // eslint-disable-next-line no-unused-vars
            '$route'(to, from) {
            }
        },
        mounted: function () {
        },
        props: {
            source: String
        },
        methods: {
            goToNextScreen(screen) {
                this.currentView = screen
            },
            logOut() {
                this.$refs.childComponent.setValue("0");
                // if (this.currentView !== SelectUser) {
                //     this.goToNextScreen(SelectUser)
                //     this.$store.dispatch("deleteUser", {});
                // }
                // this.goToNextScreen(EnterWeightForm);
            }
        }

    }
</script>

<style>
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity 0.2s ease;
    }

    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }
</style>