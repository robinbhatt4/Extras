const student={
    name:"robin",
    marks:23,
    prop:this, //global scope
    getname:function(){
        console.log(this);
        return this.name;
    },
    getmarks:()=>{  //for this function the parent is Student object
        console.log(this);// parent scope
       return this.marks;
    }
};


hello=()=>{
    console.log("world");
}
hello();