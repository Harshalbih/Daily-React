function base(a){
    return (b)=> {
        return a+b;       
    }
}
var addsix = base(6);

console.log(addsix(10));