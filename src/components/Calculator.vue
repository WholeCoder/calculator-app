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
                                                <v-col :cols="6">Enter Number:</v-col>
                                                <v-col :cols="6">
                                                    <v-text-field
                                                            v-model="numInDisplay"
                                                            class="right-input"/>
                                                </v-col>
                                            </v-row>
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
                                                    <v-btn @click="clickNumber(1)">1</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber(2)">2</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber(3)">3</v-btn>
                                                </v-col>
                                            </v-row>
                                            <v-row no-gutters>

                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickOperator('+')">+</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickOperator('-')">-</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickOperator('*')">*</v-btn>
                                                </v-col>
                                            </v-row>
                                            <v-row no-gutters>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickOperator('/')">/</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickOperator('.')">.</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickEquals()">=</v-btn>
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
        data() {
            return {
                firstNumber: 0,
                secondNumber: 0,
                operator: '',
                decimalPressed: false,
                decimalMultiplier: .1,
                clickedNumber: false,
                isSecondNumber: false,
                numInDisplay: 0
            }
        },
        methods: {
            clickNumber(num) {
                if (!this.decimalPressed) {
                    this.numInDisplay = this.numInDisplay * 10 + num;
                } else {
                    this.numInDisplay = this.numInDisplay + num * this.decimalMultiplier;
                    this.decimalMultiplier /= 10;
                }
                if (!this.isSecondNumber) {
                    this.firstNumber = this.numInDisplay;
                } else {
                    this.secondNumber = this.numInDisplay;
                }
            },
            clickEquals() {
                if (this.operator === '-') {
                    this.numInDisplay = this.firstNumber - this.secondNumber;
                } else if (this.operator === '+') {
                    this.numInDisplay = this.firstNumber + this.secondNumber;
                } else if (this.operator === '*') {
                    this.numInDisplay = this.firstNumber * this.secondNumber;
                } else if (this.operator === '/') {
                    this.numInDisplay = this.firstNumber / this.secondNumber;
                }
                this.isSecondNumber = true;
                this.firstNumber = this.numInDisplay;
                this.decimalMultiplier = 0.1;
                this.decimalPressed = false;
            },
            clickOperator(operator) {
                this.operator = operator;
                if (this.operator === '.') {
                    this.decimalPressed = true;
                } else {
                    this.operator = operator;
                    this.isSecondNumber = true;
                    this.numInDisplay = 0;
                }
            }
        }
    }
</script>

<style scoped>
    .right-input >>> input {
        text-align: right;
    }
</style>