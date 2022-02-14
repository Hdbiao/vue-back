const http = require('http')

const users = [
    { id: 1, name: 'lilei' },
    { id: 2, name: 'hanmeimei' },
    { id: 3, name: 'yuanhua' },
    { id: 4, name: 'ali' },
]

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users))
    } else {
        res.end('Not Found')
    }
})

server.listen(3000, () => {
    console.log('服务启动到3000端口');
})
