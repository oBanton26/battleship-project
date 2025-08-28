import { convertNumberIntoCoords } from "./eventListeners";

test ('converts number into coords', ()=>{
    expect(convertNumberIntoCoords(3)).toEqual([0,3]);
    expect(convertNumberIntoCoords(20)).toEqual([2,0]);
})