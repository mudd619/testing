const {sum} = require("./fn")

describe('sum call 1',()=>{
    test("testing the first sum",()=>{
        const add = sum(2,3);
        expect(add).toBe(5)
    })
})

describe("sum call 2",()=>{
    test("testing the second sum",()=>{
        const add = sum(-2,-3);
        expect(add).toBe(-5)
    })
})

describe("sum call 3",()=>{
    test("testing the third sum",()=>{
        const add = sum(5,5);
        expect(add).not.toBe(9)
    })
})

describe("sum call 4",()=>{
    test("testing the fourth sum",()=>{
        const add = sum(4,-9)
        expect(add).not.toBe(-1)
    })
})

describe("sum call 5",()=>{
    test("testing the fifth sum",()=>{
        expect(sum(1,1)).not.toBe(3)
    })
})

describe("sum call 6",()=>{
    try{
        expect(sum(1,1)).toBe(10)
    }
    catch(err){
        console.log("-----------sum call 6 went wrong------------------")
    }
})

describe("sum call 7",()=>{
    try{
        expect(sum(-10,10).not.toBe(0))
    }
    catch{
        console.log("------------sum call 7 went wrong---------------")
    }
})

describe("sum call 8",()=>{
    test("testing the eight sum",()=>{
        expect(sum(100,100)).not.toBe(100)
    })
})