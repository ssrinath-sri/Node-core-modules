const fs=require('fs');
const path=require('path');

// // Create folder 

// fs.mkdir(path.join(__dirname,'/test'),{},err =>{
//     if(err) throw err;
//     console.log('Folder created successfully');
// });

//Create & write to file 

fs.writeFile(path.join(__dirname,'/test','hello.txt'),'hello world', err => {
    if(err) throw err;
    console.log('file written to');
});

//File Append 
fs.appendFile(path.join(__dirname,'/test','hello.txt'),'hello world', err => {
    if(err) throw err;
    console.log('file written to');
});


//Read File 

fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) => {
    if (err) throw err;
console.log(data);
});