const {sum} = require("../fn")

describe('sum function',()=>{
    test("im just testing sum here",()=>{
        const add = sum(2,3);
        expect(add).toEqual(5)
    })
})