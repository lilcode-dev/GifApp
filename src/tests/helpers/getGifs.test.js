import { getGifs } from '../../helpers/getGifs';


describe('Test on getGifs Fecth', () => {
    
    test('should be return 10 elements', async() => {
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 10 );

    })

    test('should be return 0 elements', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    })
    

})


