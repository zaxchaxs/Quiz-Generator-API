import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
})
it("should can do agregate function", async () => {
    const result = await prismaClient.product.aggregate({
        _max: {
            price: true,
        },
        _min: {
            price: true,
        },
        _avg: {
            price: true
        }
    });
    console.log(result); 
});

it("should can do agregate function with group by", async () => {
    const result = await prismaClient.product.groupBy({
        by: ["category"],
        _max: {
            price: true,
        },
        _min: {
            price: true,
        },
        _avg: {
            price: true
        },
        having: {
            price: {
                _avg: {
                    gt: 2000,
                }
            }
        }

    });
    
    console.log(result);
});