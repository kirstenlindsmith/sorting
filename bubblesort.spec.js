

describe('Bubble Sort', function(){
  beforeAll(function(){
    spyOn(swap).and.callThrough()
    spyOn(compare).and.callThrough()
  })
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([])
    expect(swap.calls.count()).toEqual(0)
    expect(compare.calls.count()).toEqual(0)
  })
  
  it('handles a one-element array', function(){
    expect(bubbleSort([1])).toEqual([1])
    expect(swap.calls.count()).toEqual(0)
    expect(compare.calls.count()).toEqual(0)
  })
  
  it('handles a multi-element array', function(){
    expect(bubbleSort([9,1,4,2])).toEqual([1,2,4,9])
    expect(swap.calls.count()).toEqual(4)
    expect(compare.calls.count()).toEqual(15)
  })
  
  // it('handles a length array', function(){
  //   expect(bubbleSort([99,40,2,27,15,0,9,14,13,12,88,98])).toEqual([0,2,9,12,13,14,15,27,40,88,98,99])
  // })
})
