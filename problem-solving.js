
const describeDeclaration =(keyword)=>{
  if (keyword === "var"){
   return "Can redeclare, can reassign";
  }
  else if (keyword === "let"){
   return "Cannot redeclare,can reassign";
  }
  else if (keyword === "const"){
   return ("Can redeclare,cannot reassign");
  }
  else {
   return "Invalid";
  }
}

console.log(describeDeclaration("let"));
// Cannot redeclare, can reassign

console.log(describeDeclaration("const"));
// Cannot redeclare, cannot reassign

console.log(describeDeclaration("var"));
// Can redeclare, can reassign

console.log(describeDeclaration("int"));
Invalid


