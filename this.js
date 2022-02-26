console.log(this);
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

function add(){
        console.log(this)
}