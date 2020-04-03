<template>

    <v-row no-gutters style="height: 500px;">
        <v-col :cols="5">
            <v-row no-gutters style="height: 300px"></v-row>
            <pure-vue-chart
                    :points="this.pnts"
                    :show-y-axis="true"
                    :show-x-axis="true"
                    :width="400"
                    :height="200"
                    :show-values="true"
                    :show-trend-line="true"
                    :trend-line-width="2"
                    trend-line-color="lightblue"

            />
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

                            <v-toolbar-title>Enter Weight and Date</v-toolbar-title>

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
                                                    label="Weight"
                                                    v-model.number="currentWeight"
                                                    required
                                            ></v-text-field>
                                        </v-list-item-title>

                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-date-picker style="column-width: fit-content"
                                                       v-model='myDate'/>

                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-btn @click="submit">Save New Weight</v-btn>

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

                                    <v-toolbar-title>{{this.$store.getters.user.username }}'s Weight History</v-toolbar-title>

                                    <v-spacer></v-spacer>

                                </v-toolbar>

                                <v-list three-line>
                                    <template>


                                        <v-divider

                                        ></v-divider>

                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    <v-row no-gutters v-for="item in this.weights" :key="item.index">
                                                        <v-col :cols="6">
                                                            {{item.weight}} lbs
                                                        </v-col>
                                                        <v-col :cols="6">
                                                            {{item.date}}
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
    import PureVueChart from 'pure-vue-chart';

    export default {
        computed: {
            weights() {
                var weightRay = [];
                for (const v in this.$store.getters.weights) {
                    weightRay.push(this.$store.getters.weights[v])
                }
                weightRay.sort(function (a, b) {
                    return new Date(a.date) - new Date(b.date)
                });

                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.pnts = [];
                for (var x in weightRay) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.pnts.push(weightRay[x].weight);
                }

                return this.$store.getters.weights;
            }
        },
        name: "EnterWeightForm",
        store,
        mounted: function () {
            this.$store.dispatch('getAllWeights');
        },
        components: {
            PureVueChart
        },

        data() {
            return {
                currentWeight: "",
                pnts: [],
                myDate: null
            }
        },
        methods: {
            submit() {
                this.$store.dispatch('addWeight', {
                    'currentWeight': this.currentWeight,
                    'myDate': this.myDate,
                    'user_id': this.$store.getters.user.id
                });
            }
        },
        watch: {}
    }
</script>

<style scoped>

</style>