const student={
        id:101,
        name:'kibria',
        balance:5000,
        major:'mathematics',
        idRich:false,
        subject:['english','economics','math 101','calculas'],
        bestFriend:{
                name:'kundu',
                major:'mathematics'
        },
        takeExam: function(){
                console.log(this.name,'taking exam')
        },

        treatDee: function(expense,boksis){
                this.balance=this.balance-expense-boksis

                return this.balance
        }
}

student.takeExam();
// student.treatDee(2000)

const remaining =student.treatDee(2000,200);
const remaining2 =student.treatDee(500,50);

console.log(remaining )
console.log(remaining2)