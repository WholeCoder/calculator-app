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
                                                    <v-btn @click="clickNumber('7')">7</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber('8')">8</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber('9')">9</v-btn>
                                                </v-col>
                                            </v-row>
                                            <v-row no-gutters>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber('4')">4</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber('5')">5</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber('6')">6</v-btn>
                                                </v-col>
                                            </v-row>
                                            <v-row no-gutters>

                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber('1')">1</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber('2')">2</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber('3')">3</v-btn>
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
                                                    <v-btn @click="clickDecimal()">.</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickEquals()">=</v-btn>
                                                </v-col>
                                            </v-row>
                                            <v-row no-gutters>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNumber(0)">0</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickNegateNumberInDisplay()">(-)</v-btn>
                                                </v-col>
                                                <v-col :cols="4" align="center">
                                                    <v-btn @click="clickBack()">&lt;-</v-btn>
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
                isSecondNumber: false,
                numInDisplay: "0",
                eInNumInDisplay: false
            }
        },
        methods: {
            setValue: function (value) {
                // This function is called from the parent component to reset
                // the calculator's values.
                this.numInDisplay = value;
                this.firstNumber = this.secondNumber = 0;
                this.operator = '';
                this.decimalPressed = false;
                this.isSecondNumber = false;
            },
            clickNegateNumberInDisplay() {
                this.numInDisplay = "-" + this.numInDisplay;
            },
            clickBack() {
                const rex = /(?<integerportion>[0-9]+)e?(?<epart>[-+])?(?<decimalpoint>\.)?(?<decimalorexponent>[0-9]+)?/i
                const mtch = rex.exec(this.numInDisplay);
                if (this.numInDisplay.trim() === "") {
                    this.numInDisplay = "0";
                } else if (mtch.groups['decimalpoint'] === '.') {
                    if (this.numInDisplay.indexOf('.') === this.numInDisplay.length - 1) {
                        this.numInDisplay = this.numInDisplay.substring(0, this.numInDisplay.length - 1);
                        this.decimalPressed = false;
                    } else if (this.numInDisplay.indexOf('.') === this.numInDisplay.length - 2) {
                        this.numInDisplay = this.numInDisplay.substring(0, this.numInDisplay.length - 2);
                        if (this.numInDisplay.trim() === "") {
                            this.numInDisplay = "0";
                        }
                        this.decimalPressed = false;
                    } else {// normal deletion
                        this.numInDisplay = this.numInDisplay.substring(0, this.numInDisplay.length - 1);
                    }
                } else if (mtch.groups['epart'] !== undefined) {
                    alert("implement scientific notation!");
                } else if (this.numInDisplay !== '0') {// normal deletion
                    this.numInDisplay = this.numInDisplay.substring(0, this.numInDisplay.length - 1);
                }

                if (this.numInDisplay.trim() === "") {
                    this.numInDisplay = '0';
                }
            },
            clickNumber(num) {
                if (this.numInDisplay === "0") {
                    this.numInDisplay = num;
                } else {
                    this.numInDisplay += num;
                }
                if (!this.isSecondNumber) {
                    this.firstNumber = parseFloat(this.numInDisplay);
                } else {
                    this.secondNumber = parseFloat(this.numInDisplay);
                }
            },
            clickEquals() {
                if (this.operator === '-') {
                    this.numInDisplay = (this.firstNumber - this.secondNumber).toString();
                } else if (this.operator === '+') {
                    this.numInDisplay = (this.firstNumber + this.secondNumber).toString();
                } else if (this.operator === '*') {
                    this.numInDisplay = (this.firstNumber * this.secondNumber).toString();
                } else if (this.operator === '/') {
                    this.numInDisplay = (this.firstNumber / this.secondNumber).toString();
                }
                this.isSecondNumber = false;
                this.firstNumber = parseFloat(this.numInDisplay);
                this.decimalPressed = this.numInDisplay.indexOf(".") > 0;

                if (!this.isSecondNumber) {
                    this.firstNumber = parseFloat(this.numInDisplay);
                } else {
                    this.secondNumber = parseFloat(this.numInDisplay);
                }
            },
            clickDecimal() {
                const rex = /(?<integerportion>[0-9]+)e?(?<epart>[-+])?(?<decimalpoint>\.)?(?<decimalorexponent>[0-9]+)?/i
                const mtch = rex.exec(this.numInDisplay);

                if (mtch.groups['decimalpoint'] !== '.') {
                    this.numInDisplay += '.';
                    this.decimalPressed = true;
                }

            },
            clickOperator(operator) {
                this.operator = operator;
                this.isSecondNumber = true;
                this.numInDisplay = "0";
                this.decimalPressed = false;
            }
        }
    }
</script>

<style scoped>
    .right-input >>> input {
        text-align: right;
    }
</style>