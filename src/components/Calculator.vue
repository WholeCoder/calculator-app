<template>
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

                            <v-toolbar-title>Calculator</v-toolbar-title>

                            <v-spacer></v-spacer>

                        </v-toolbar>

                        <v-list three-line>
                            <template>


                                <v-divider

                                ></v-divider>

                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <v-row no-gutters>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber(7)">7</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber(8)">8</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber(9)">9</v-btn>
                                                </v-col>
                                            </v-row>
                                            <v-row no-gutters>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber(4)">4</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber(5)">5</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber(6)">6</v-btn>
                                                </v-col>
                                            </v-row>
                                            <v-row no-gutters>

                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber()">1</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber()">2</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber()">3</v-btn>
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

</template>

<script>
    export default {
        name: "Calculator",
        methods: {
            clickNumber(num) {
                alert("number clicked!  " + num);
            }
        }
    }
</script>

<style scoped>

</style>