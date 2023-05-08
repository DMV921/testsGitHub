function getRandomString(a: number): string {
    let chrs: string = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789'
    let str: string = ''
    for (let i = 0; i < a; i++) {
        let pos: number = Math.floor(Math.random() * chrs.length)
        str += chrs.substring(pos, pos + 1)
    }
    return str
}

function getTimeStamp(): string {
    let date: string = Date.now().toString()
    return date
}

function getRandomNumber(a: number): string {
    let chrs: string = '123456789'
    let str: string = ''
    for (let i = 0; i < a; i++) {
        let pos: number = Math.floor(Math.random() * chrs.length)
        str += chrs.substring(pos, pos + 1)
    }
    return str
}

export {
    getRandomString, 
    getTimeStamp, 
    getRandomNumber
}