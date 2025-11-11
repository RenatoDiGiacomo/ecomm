import { ProductRepository } from '../../repositories/product.repo';
import { Product } from '../../models/product';

describe('Product Repository', () => {
    describe('all()', () => {
        it('should return all products', () => {
            //Arrange
            const expectedP1 = new Product('produto1', 10.0);
            const expectedP2 = new Product('produto2', 20.0);
            const expectedP3 = new Product('produto3', 30.0);


            const expectedProducts = [expectedP1, expectedP2, expectedP3];


            //Act
            const productRepo = new ProductRepository();
            productRepo.populate(expectedProducts);

            const products = productRepo.all();

            //Assert
            expect(products).toEqual(expectedProducts);
            expect(products).toHaveLength(3);

        })
    })
    describe('populate()', () => {
        it('should populate the repository with products', () => {
            //Arrange
            const p1 = new Product('produto1', 10.0);
            const p2 = new Product('produto2', 20.0);
            const productsToPopulate = [p1, p2];

            //Act
            const productRepo = new ProductRepository();
            productRepo.populate(productsToPopulate);
            const products = productRepo.all();

            //Assert
            expect(products).toEqual(productsToPopulate);
            expect(products).toHaveLength(2);
        })
    })
})