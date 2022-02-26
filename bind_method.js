const kibria={
        id:101,
        name:'kibria',
        balance:5000,

        treatDee: function(expense){
                this.balance=this.balance-expense
                console.log('454',this)

                return this.balance
        }
}

const heroBalam ={
        id:102,
        name:'hero',
        balance:5000,

        // treatDee: function(expense){
        //         this.balance=this.balance-expense

        //         return this.balance
        // }
}
const normalGalam ={
        id:103,
        name:'golam',
        balance:7000,

        // treatDee: function(expense){
        //         this.balance=this.balance-expense

        //         return this.balance
        // }
}

kibria.treatDee(100)

const heroTreatDey =kibria.treatDee.bind(heroBalam);
const normalTreatDey =kibria.treatDee.bind(normalGalam);
heroTreatDey(500);
heroTreatDey(500);
heroTreatDey(500);
heroTreatDey(500);
heroTreatDey(500);
heroTreatDey(500);
heroTreatDey(500);
heroTreatDey(500);


kibria.treatDee(100)
kibria.treatDee(100)
kibria.treatDee(100)
kibria.treatDee(100)
kibria.treatDee(500)
kibria.treatDee(100)
kibria.treatDee(1000)
normalTreatDey (1000)