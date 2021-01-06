const {createArchive} = require('./multiply/multiply');
const {createLimit} = require('./multiply/multiply');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];

switch(comando){
   case 'listar':
      createLimit(argv.base, argv.limite);
   break;

   case 'crear':
      createArchive(argv.base, argv.limite)
         .then(response => console.log(`The file `, colors.green(`table-${argv.base}.txt`), `has been saved!`))
         .catch(err => console.log(err));   
   break;

   default:
      console.log('No se reconoce el comando');
}




// let base = 5;
// console.log(argv.base);
// console.log(argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];



