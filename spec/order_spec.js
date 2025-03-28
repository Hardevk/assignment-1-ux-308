import { Order } from '../Order.js';

describe("Tests all stages of an order", function() {
    it("test hello", function() {
        const oOrder = new Order("111-111-1111");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Rich's Acton Rapid Test.");
    });
    it("test yes", function() {
        const oOrder = new Order("111-111-1111");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("yes");
        expect(aResults[0]).toBe("Your rapid test is reserved under the phone number 111-111-1111");
    });
    it("test no", function() {
        const oOrder = new Order("111-111-1111");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("no");
        expect(aResults[0]).toBe("Thanks for trying our reservation system");
    });
  });
  
  