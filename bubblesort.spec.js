

describe('Bubble Sort', function(){
  beforeAll(function(){
    spyOn(window, 'swap').and.callThrough()
    spyOn(window, 'compare').and.callThrough()
  })
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([])
    expect(window.swap).toHaveBeenCalledTimes(0)
    expect(window.compare).toHaveBeenCalledTimes(0)
  })
  
  it('handles a one-element array', function(){
    expect(bubbleSort([1])).toEqual([1])
    expect(window.swap).toHaveBeenCalledTimes(0)
    expect(window.compare).toHaveBeenCalledTimes(0)
  })
  
  it('handles a multi-element array', function(){
    expect(bubbleSort([9,1,4,2])).toEqual([1,2,4,9])
    expect(swap.calls).toHaveBeenCalledTimes(4)
    expect(compare.calls).toHaveBeenCalledTimes(15)
  })
  
  // it('handles a length array', function(){
  //   expect(bubbleSort([99,40,2,27,15,0,9,14,13,12,88,98])).toEqual([0,2,9,12,13,14,15,27,40,88,98,99])
  // })
})
