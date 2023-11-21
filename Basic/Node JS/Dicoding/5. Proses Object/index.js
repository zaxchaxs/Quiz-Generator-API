const initialMemoryUsage = process.memoryUsage().heapUsed;
const myName = process.argv[2];
const environtmen = process.env.Node_ENV;

for(let i = 0; i <= 1000000; i++){
 console.log();
}

const currentMemoryUsage = process.memoryUsage().heapUsed;
console.log(`Hai, ${myName}`);
console.log(`Mode environment: ${environtmen}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);