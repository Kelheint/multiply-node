const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');


let createLimit = async (base, limite) => {
   for(let i = 1; i <= limite; i++){
      console.log (`${base} x ${i} = ${base * i}\n`.green);
   }
}


let createArchive = async (base, limite) => {
   let data = '';

   for(let i = 1; i <= limite; i++){    
      data += `${base} x ${i} = ${base * i}\n`;
   }
   
   fs.writeFile(`./tables/table-${base}.txt`, data, (err) => {
      if(err)
         throw (err);
      else
         return `table-${base}.txt saved!`;
   });
}

module.exports = {
   createArchive,
   createLimit
}



