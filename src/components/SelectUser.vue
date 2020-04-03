<template>
    <v-row no-gutters style="height: 500px;">
        <v-col :cols="5">
            <v-row no-gutters style="height: 300px"></v-row>
        </v-col>
        <v-col :cols="4">
            <v-card
                    class="pa-2"
                    tile
                    outlined
            >
                <div>


                    <v-card
                            max-width="1450"
                            class="mx-auto"
                    >
                        <v-toolbar
                                color="cyan"
                                dark
                        >
                            <v-app-bar-nav-icon></v-app-bar-nav-icon>

                            <v-toolbar-title>Enter New User to Track Their Weight</v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon>mdi-magnify</v-icon>
                            </v-btn>
                        </v-toolbar>

                        <v-list three-line>
                            <template>


                                <v-divider

                                ></v-divider>

                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <v-text-field
                                                    label="User Name"
                                                    v-model.trim="username"
                                                    required
                                            ></v-text-field>
                                        </v-list-item-title>

                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content>
                                        <v-btn @click="submit">Save New User</v-btn>

                                    </v-list-item-content>

                                </v-list-item>
                            </template>

                        </v-list>

                    </v-card>


                </div>
            </v-card>
        </v-col>
        <v-col :cols="3"
        >


            <v-row no-gutters style="height: 500px;">

                <v-col :cols="12">
                    <v-card
                            class="pa-2"
                            tile
                            outlined
                    >
                        <div>


                            <v-card
                                    max-width="450"
                                    class="mx-auto"
                            >
                                <v-toolbar
                                        color="cyan"
                                        dark
                                >

                                    <v-toolbar-title>Select a User To Manage Their Weight</v-toolbar-title>

                                    <v-spacer></v-spacer>

                                </v-toolbar>

                                <v-list three-line>
                                    <template>


                                        <v-divider

                                        ></v-divider>

                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    <v-row no-gutters v-for="item in this.users" :key="item.index">
                                                        <v-col :cols="6">
                                                            <a v-on:click="clickUser(item.id)">{{item.username}}</a>
                                                        </v-col>
                                                        <v-col :cols="6">

                                                        </v-col>
                                                    </v-row>
                                                </v-list-item-title>

                                            </v-list-item-content>
                                        </v-list-item>
                                    </template>

                                </v-list>

                            </v-card>


                        </div>
                    </v-card>
                </v-col>

            </v-row>


        </v-col>
    </v-row>
</template>

<script>
    import {store} from "./UserStore";
    import EnterWeightForm from "./EnterWeightForm"

    export default {
        name: "SelectUser",
        computed: {
            users() {
                return this.$store.getters.users;
            }
        },
        store,
        mounted: function () {
            this.$store.dispatch('getAllUsers');
        },
        components: {},

        data() {
            return {
                username: ''
            }
        },
        methods: {
            submit() {
                this.$store.dispatch('addUser', {'username': this.username});
            },
            // eslint-disable-next-line no-unused-vars
            clickUser(id) {
                this.$store.dispatch('getUser', {'id': id});
            }
        },
        watch: {
            // eslint-disable-next-line no-unused-vars
            '$store.state.user': function (from, to) {
                this.$emit('goToPosts', EnterWeightForm);
            }
        }
    }
</script>

<style scoped>

</style>