//this module simulates a block of memory. The implementation is terrible but it is perfect as a learning tool.
//ptr is shorthand for pointer
//pointer = variable containing memory address

//get(ptr) - returns memory stored at certain address 
//set(ptr, value) - sets value stored at certain memory addrss
//allocate(size) - reserves contiguous block of memory consisting of "size" boxes which you can safely modify,
//returning a pointer to first box or null if allocation fails
//free(ptr) - frees block of memory reserved using allocate
//copy(to, from, size) - copies "size" boxes of data from pointer to pointer
//copy(10, 0, 3) = copy values at boxes 0,1,2 to boxes at 10, 11, 12

class Memory {
    constructor() {
      this.memory = new Float64Array(1024);
      this.head = 0;
    }
  
    allocate(size) {
      if (this.head + size > this.memory.length) {
        return null;
      }
  
      let start = this.head;
  
      this.head += size;
      return start;
    }
  
    free(ptr) {}
  
    copy(toIdx, fromIdx, size) {
      if (fromIdx === toIdx) {
        return;
      }
  
      if (fromIdx > toIdx) {
        // Iterate forwards
        for (let i = 0; i < size; i++) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      } else {
        // Iterate backwards
        for (let i = size - 1; i >= 0; i--) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      }
    }
  
    get(ptr) {
      return this.memory[ptr];
    }
  
    set(ptr, value) {
      this.memory[ptr] = value;
    }
  }
  
  module.exports = Memory;