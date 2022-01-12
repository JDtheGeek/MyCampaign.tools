import axios from 'axios'
import {  } from 'ioredis'

// fetch("https://eu1-viable-tahr-34333.upstash.io/get/foo", {
//   headers: {
//     Authorization: "Bearer AYYdASQgZDhkNThjYTUtMDY1Ni00ZjU1LWIyM2UtZDk4ZTMyMjI3MDc5ZTgyOGI3NzIxYzFiNGY4NGFlMmY2OGZhOWE1MDY1MmU="
//   }
// }).then(response => response.json())
//   .then(data => console.log(data));

const instance = axios.create({	
	baseURL: 'https://eu1-viable-tahr-34333.upstash.io/get/',
	headers: {
		Authorization: "Bearer AYYdASQgZDhkNThjYTUtMDY1Ni00ZjU1LWIyM2UtZDk4ZTMyMjI3MDc5ZTgyOGI3NzIxYzFiNGY4NGFlMmY2OGZhOWE1MDY1MmU="
	}
})

const foo = instance.post('/foo',{foo: true})

console.log(foo)