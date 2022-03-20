const mesg='this is my first javscript code'
const mesg1='this is my\n first javascript code'
const mesg2='this is my\n'+
            '\'first\' javascript code';

//literals:
//object = {}
//Boolean = true, false
//String = '', ""
//ES6: template Literals ---> back tick chars ---> ``

let product = function(){
    return 'Apple';
}

let name= 'Tom';
const mailBody = `Hi ${name} ${2+4} ${product()},
this is Shashank here,
thanks for adding me in your 'mailing' list

have a great day!

Regards
Shashank`

console.log(mailBody);
