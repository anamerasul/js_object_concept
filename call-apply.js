const kibria={
        id:101,
        name:'kibria',
        balance:5000,

        treatDee: function(expense,boksis,tax=(expense*.15)){
                this.balance=this.balance-expense-boksis-tax
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

// kibria.treatDee.call(heroBalam,500,100)
// kibria.treatDee.call(heroBalam,300,50)
// kibria.treatDee.apply(heroBalam,[500,100,50])
kibria.treatDee.apply(heroBalam,[1000,200])