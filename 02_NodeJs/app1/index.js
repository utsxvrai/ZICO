import { readFile , writeFile} from 'fs/promises';

const filePath = new URL('index.html', import.meta.url);
let contents = await readFile(filePath, {encoding :'utf-8'});



const data = {
  name : "Utsav Rai",
  company : "Google",
  age : "20"
 
}

for(const [key,value] of Object.entries(data)){
  contents = contents.replace(`{{${key}}}`,value);
}

await writeFile('index.html',contents);
await writeFile(new URL('index1.html', import.meta.url),contents);