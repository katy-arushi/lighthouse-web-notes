// // it() or test()
import useColor from '../useColor';
import { renderHook, act } from '@testing-library/react-hooks'
describe('testing the useColor hook', ()=> {

    it('checks if 2 + 2 is equal to 4', () => {
        const result = 2 + 2;
        expect(result).toBe(4);
    })


it('creates a useColor hook, with an array parameter, returns back the current color', () => {
    const arrayOfColors = ['firebrick', 'red', 'green', 'lime', 'salmon', 'darksalmon', 'blue', 'navy'];
    const { result } = renderHook(() => useColor(arrayOfColors))
    expect(result.current.color).toBe('firebrick');
})

it(`creates a usedColor hook, with an array paramter, 
    we run the function called NEXTColor() 
    which changes the currrent color 
    from firebrick to red`, () => {
    const arrayOfColors = ['firebrick', 'red', 'green', 'lime', 'salmon', 'darksalmon', 'blue', 'navy'];
    const { result } = renderHook(() => useColor(arrayOfColors))
    console.log(result.current)
    expect(result.current.color).toBe('firebrick');
    act(() => {
        result.current.nextColor();
    });
    expect(result.current.color).toBe('red');
})

it(`sets a default array in useColor hook, and clicks nextColor() twice. result should be green`, () => {
    const arrayOfColors = ['firebrick', 'red', 'green', 'lime', 'salmon', 'darksalmon', 'blue', 'navy'];
    const { result } = renderHook(() => useColor(arrayOfColors))
    console.log(result.current)
    expect(result.current.color).toBe('firebrick');
    act(() => {
        result.current.nextColor();
    });
    expect(result.current.color).toBe('red');
    act(() => {
        result.current.nextColor();
    });
    expect(result.current.color).toBe('green');
})

it('sets a default array, runs nextColor() once, then runs prevColor() once. result should be firebrick', () => {
    const arrayOfColors = ['firebrick', 'red', 'green', 'lime', 'salmon', 'darksalmon', 'blue', 'navy'];
    const { result } = renderHook(() => useColor(arrayOfColors));
    expect(result.current.color).toBe('firebrick');
    act(() => {
        result.current.nextColor();
    });
    expect(result.current.color).toBe('red');
    act(() => {
        result.current.prevColor();
    });
    console.log(result.current);
    expect(result.current.color).toBe('firebrick');


})

})