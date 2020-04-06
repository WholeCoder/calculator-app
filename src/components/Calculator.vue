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
                decimalMultiplier: .1,
                isSecondNumber: false,
                numInDisplay: 0
            }
        },
        methods: {
            setValue: function(value) {
                // This function is called from the parent class to reset
                // the calculator's values.
                this.numInDisplay = value;
                this.firstNumber = this.secondNumber = 0;
                this.operator = '';
                this.decimalPressed = false;
                this.decimalMultiplier = .1;
                this.isSecondNumber = false;
            },
            clickNegateNumberInDisplay() {
              this.numInDisplay = "-" + this.numInDisplay;
            },
            clickBack() {
                // if (this.decimalPressed){
                //     this.decimalMultiplier *= 10;
                //     alert("decimal pressed = "+this.decimalMultiplier);
                // }
                let there = this;
                function removeLastDigit(num) {
                    let numAsString = num;
                    // alert("num = "+num);
                    let indexOfDecimal = numAsString.indexOf(".");
                    if (indexOfDecimal > -1) {

                        numAsString = numAsString.substr(0,numAsString.length-1);
                    } else {
                        numAsString = numAsString.substr(0,numAsString.length-1);

                    }
                    if(numAsString.indexOf(".") === numAsString.length-1) {
                        numAsString = numAsString.substr(0,numAsString.length-1);

                        there.decimalPressed = false;
                        there.decimalMultiplier = .1;
                    } else {
                        there.decimalMultiplier  *= 10;
                    }
                    if (numAsString === '') {
                        numAsString = "0";
                    }
                    // alert("after == " + numAsString);
                    return numAsString;
                }
              this.numInDisplay = removeLastDigit(this.numInDisplay);
                // alert('numInDisplay second = '+this.numInDisplay);
            },
            clickNumber(num) {
                if (!this.decimalPressed) {
                    this.numInDisplay = (parseFloat(this.numInDisplay) * 10 + num).toString();
                } else {
                    let number = parseFloat(this.numInDisplay) + num * this.decimalMultiplier;
                    if (number === parseFloat(this.numInDisplay)){
                        this.numInDisplay = this.numInDisplay + '0';
                    } else {
                        this.numInDisplay = (number).toString();
                    }
                    this.decimalMultiplier /= 10;
                }
                if (!this.isSecondNumber) {
                    this.firstNumber = parseFloat(this.numInDisplay);
                } else {
                    this.secondNumber = parseFloat(this.numInDisplay);
                }
            },
        clickEquals(){
                if (this.operator === '-') {
                    this.numInDisplay = (this.firstNumber - this.secondNumber).toString();
                } else if (this.operator === '+') {
                    this.numInDisplay = (this.firstNumber + this.secondNumber).toString();
                } else if (this.operator === '*') {
                    this.numInDisplay = (this.firstNumber * this.secondNumber).toString();
                } else if (this.operator === '/') {
                    this.numInDisplay = (this.firstNumber / this.secondNumber).toString();
                }
                this.isSecondNumber = true;
                this.firstNumber = parseFloat(this.numInDisplay);
                if (this.numInDisplay.indexOf(".")>0) {
                    let countOfDigits = this.numInDisplay.split(".")[1].length;
                    this.decimalMultiplier = 1.0 / Math.pow(10, countOfDigits+1);
                    alert("countOfDigits == "+countOfDigits);
                    this.decimalPressed = true;
                } else {
                    this.decimalPressed = false;
                }
            },
            clickDecimal() {
                this.decimalPressed = true;
            },
            clickOperator(operator) {
                this.operator = operator;
                this.isSecondNumber = true;
                this.numInDisplay = "0";
                this.decimalMultiplier = 0.1;
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