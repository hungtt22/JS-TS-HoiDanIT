const fullName = "John Doe";
const birthYear = 2005;
const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - birthYear;
const isStudent = true;

console.log(`
Full Name: ${fullName}  
Birth Year: ${birthYear}  
Age: ${age} 
Is Student: ${isStudent}
`);
