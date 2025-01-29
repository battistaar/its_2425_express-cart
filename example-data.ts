import { writeFileSync } from 'fs';
import { faker } from '@faker-js/faker/locale/it';

function genRandomProduct() {
    return {
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        netPrice: parseFloat(faker.commerce.price()),
        weight: faker.number.int({min: 50, max: 2000}),
        discount: faker.number.float({min: 0, max: 1, fractionDigits: 2})
    };
}

function genDataset(num: number) {
    const data: any[] = [];
    for (let i = 0; i < num; i++) {
        data.push(genRandomProduct());
    }
    return data;
}

function writeDataset(data: any[]) {
    writeFileSync('./products.json', JSON.stringify(data, null, 2), { encoding: 'utf-8' });
}

const data = genDataset(200);
writeDataset(data);
console.log('done');
