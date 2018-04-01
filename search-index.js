var searchIndex = {};
searchIndex["min_max_heap"] = {"doc":"A double-ended priority queue.","items":[[3,"MinMaxHeap","min_max_heap","A double-ended priority queue.",null,null],[3,"Iter","","A borrowed iterator over the elements of the min-max-heap in arbitrary order.",null,null],[3,"IntoIter","","An owning iterator over the elements of the min-max-heap in arbitrary order.",null,null],[3,"Drain","","A draining iterator over the elements of the min-max-heap in arbitrary order.",null,null],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"minmaxheap"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",0,{"inputs":[],"output":{"name":"self"}}],[11,"new","","Creates a new, empty `MinMaxHeap`.",0,{"inputs":[],"output":{"name":"self"}}],[11,"with_capacity","","Creates a new, empty `MinMaxHeap` with space allocated to hold `len` elements.",0,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"len","","The number of elements in the heap.",0,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"is_empty","","Is the heap empty?",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"push","","Adds an element to the heap.",0,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"peek_min","","Gets a reference to the minimum element, if any.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"peek_max","","Gets a reference to the maximum element, if any.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"pop_min","","Removes the minimum element, if any.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"pop_max","","Removes the maximum element, if any.",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"push_pop_min","","Pushes an element, then pops the minimum element.",0,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"t"}}],[11,"push_pop_max","","Pushes an element, then pops the maximum element in an optimized fashion.",0,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"t"}}],[11,"replace_min","","Pops the minimum, then pushes an element in an optimized fashion.",0,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"option"}}],[11,"replace_max","","Pops the maximum, then pushes an element in an optimized fashion.",0,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"option"}}],[11,"into_vec_asc","","Returns an ascending (sorted) vector, reusing the heap’s storage.",0,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"into_vec_desc","","Returns an descending (sorted) vector, reusing the heap’s storage.",0,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"clear","","Drops all items from the heap.",0,{"inputs":[{"name":"self"}],"output":null}],[11,"capacity","","The number of elements the heap can hold without reallocating.",0,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"reserve_exact","","Reserves the minimum capacity for exactly `additional` more elements to be inserted in the given `MinMaxHeap`.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"reserve","","Reserves the minimum capacity for at least `additional` more elements to be inserted in the given `MinMaxHeap`.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"shrink_to_fit","","Discards extra capacity.",0,{"inputs":[{"name":"self"}],"output":null}],[11,"into_vec","","Consumes the `MinMaxHeap` and returns its elements in a vector in arbitrary order.",0,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"iter","","Returns a borrowing iterator over the min-max-heap’s elements in arbitrary order.",0,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"drain","","Returns a draining iterator over the min-max-heap’s elements in arbitrary order.",0,{"inputs":[{"name":"self"}],"output":{"name":"drain"}}],[11,"next","","",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"next_back","","",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"next","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"next_back","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"into_iter","","",0,null],[11,"next","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"next_back","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"from_iter","","",0,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"vec"}],"output":{"name":"self"}}],[11,"extend","","",0,{"inputs":[{"name":"self"},{"name":"i"}],"output":null}],[11,"extend","","",0,{"inputs":[{"name":"self"},{"name":"i"}],"output":null}]],"paths":[[3,"MinMaxHeap"],[3,"Iter"],[3,"IntoIter"],[3,"Drain"]]};
initSearch(searchIndex);
