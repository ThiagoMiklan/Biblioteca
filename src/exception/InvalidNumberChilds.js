class InvalidNumberChilds extends Error {

  // number of childs to the message
  constructor(message) {
    var exception_name = "InvalidNumberChilds";
    super(exception_name +": "+message);
    this.name = exception_name;
  }

}

const assembleDefaultMessage = (number_child_expect,number_childrens_received)=>{
  return "You can provide "+number_child_expect+" components children, however you informed "+ number_childrens_received+" childrens";
}


export  {InvalidNumberChilds,assembleDefaultMessage};