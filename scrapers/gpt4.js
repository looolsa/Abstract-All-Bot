const axios = require('axios')

exports.gpt4o = (query) => {

return new Promise(async(resolve, reject) => {

try {

const response = await axios.post('https://api.yanzbotz.my.id/api/ai/gpt4', {

query: query,

prompt: "Saya adalah Yanz-GPT asisten virtual yang canggih dan populer saat ini, saya di ciptakan oleh Yanz Dev"

}, {

headers: {

'Content-Type': 'application/json'

}

})

const regex = /"answer":"([^"]*)"/g;

let match;

let result = ''

while ((match = regex.exec(response.data)) !== null) {

result += match[1]

}

resolve(result.replace(/\\n/g, '\n')

.replace(/\\/g, '')

.replace(/\*\*/g, '*')

.replace(/###/g, '>'))

} catch (error) {

reject(error)

}

})

}

// exports.gpt4o('Hello, World!')