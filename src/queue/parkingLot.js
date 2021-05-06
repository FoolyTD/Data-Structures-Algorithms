const Queue = require("../queue/queue");

/**
 * Implement a Parking Lot.
 *
 */
class ParkingLot {
  constructor(capacity, rate) {
    this.spaces = new Array(capacity).fill("vacant");
    this.rate = rate;
    this.revenue = 0;
    this.queue = new Queue();
  }

  /**
   * Returns the number of vacant parking spaces
   * @returns {Number}
   *  the total number of spaces where the value is "vacant".
   */

  get vacantSpaces() {
    return this.spaces.reduce(
      (sum, space, index) => sum + (space === "vacant" ? 1 : 0),
      0
    );
  }

  /**
   * As cars enter the parking lot, the license plate number is entered and the car is parked in the first vacant space.
   * If the lot is full, the car is added to the queue to be parked when a spot is available.
   *
   * @param licensePlateNumber
   *  the license plate number of the car entering
   */
  enter(licensePlateNumber) {
   // get index of first vacant spot, then replace vacant with LPN
    let index = this.spaces.indexOf("vacant");
    // check that there are available parking spaces, add the LPN to vacant spot
    if (index >= 0) {
    // replace vacancy with LPN
    this.spaces[index] = licensePlateNumber;
    } else {
      this.queue.enqueue(licensePlateNumber);
    }
    return this;
  }

  /**
   * As a car leaves the parking lot, or the queue, the leave method is called with the license plate number of the car leaving.
   * @param licensePlateNumber
   *    *  the license plate number of the car leaving.
   */
  leave(licensePlateNumber) {
    
    // get index of the car leaving 
    let indexLeaving = this.spaces.indexOf(licensePlateNumber);
    // check if the car is in the queue, if not it's leaving parking lot
    if (indexLeaving < 0) {
      // remove the car from the linked list (queue)
      // start from the head and iterate through the list until you find the node & previous
      // remove that node 
      let node = this.queue.first;
      let previous = null;

      while (node) {
        if(node.value === licensePlateNumber) {
          if(previous === null) {
            this.queue.first = node.next;
          } else if (node.next === null) {
            previous.next = null;
          } else {
            previous.next = node.next;
          }
          break;
        }
        previous = node;
        node = node.next;
      }

    } else {
    //mark the space vacant
    this.spaces[indexLeaving] = "vacant";
    this.revenue += this.rate;

    // if there is a queue, dequeue and call enter with 
    if (!this.queue.isEmpty()) {
      let car = this.queue.dequeue();
      this.enter(car);
    }
    }
    
    
  }

  /**
   * Lists each space in the parking lot along with the license plate number of the car parked there, or
   * "vacant" as the license plate if the spot is vacant.
   * @returns {{licensePlateNumber: string, space: Number}[]}
   */
  get occupants() {
    return this.spaces.map((licensePlateNumber, index) => ({
      space: index + 1,
      licensePlateNumber,
    }));
  }

  /**
   * The total cumulative revenue for the parking lot. The parking rate is paid when the car leaves, it does not matter how long the car stays in the spot.
   * @returns {number}
   *  the total revenue for the parking lot.
   */
  get totalRevenue() {
    return this.revenue;
  }
}

module.exports = ParkingLot;
