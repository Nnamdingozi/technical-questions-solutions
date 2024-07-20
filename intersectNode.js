// class ListNode  {
//     constructor(value) {
//         this.value = value,
//         this.next = null
//     }

// };

// function getIntersectNode (headA, headB) {
//             if(!headA || !headB) {
//                 return null;
//             }
//             let lengthA = 0;
//             let lengthB = 0;
//             let currentNodeA = headA;
//             let currentNodeB = headB;

// while(currentNodeA){
//     lengthA++;
//     currentNodeA = currentNodeA.next;
// }
// while(currentNodeB){
//     lengthB++;
//     currentNodeB = currentNodeB.next;
// }
// currentNodeA = headA;
// currentNodeB = headB;



//             if(lengthA > lengthB) {
//                 for(let i = 0; i < lengthA - lengthB; i++) {
//                     currentNodeA = currentNodeA.next;
//                 } 
//             } else {
//                 for(let i = 0; i < lengthB - lengthA; i++) {
//                     currentNodeB = currentNodeB.next
//                 }

//             }
//             while(currentNodeA && currentNodeB) {
//                 if(currentNodeA === currentNodeB) {
//                     return currentNodeA;
//                 }
//                 currentNodeA = currentNodeA.next;
//                 currentNodeB = currentNodeB.next;
//             }
//             return null

// };

// const a1 = new ListNode(3);
// const a2 = new ListNode(7);
// const a3 = new ListNode(8);
// const a4 = new ListNode(10);
// a1.next = a2;
// a2.next = a3;
// a3.next = a4;

// const b1 = new ListNode(99);
// const b2 = new ListNode(1);
// b1.next = b2;
// b2.next = a3; // Intersection point

// const intersectionNode = getIntersectNode(a1, b1);
// console.log(intersectionNode ? intersectionNode.value : 'No intersection'); // Outp


class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};

const getIntersectNode = (headA, headB) => {
    if (!headA || !headB) {
        return null;
    }
    let lengthA = 0;
    let lengthB = 0;
    currentNodeA = headA;
    currentNodeB = headB;

    while (currentNodeA) {
        lengthA++
        currentNodeA = currentNodeA.next;
    }

    while (currentNodeB) {
        lengthB++
        currentNodeB = currentNodeB.next;
    }
    currentNodeA = headA;
    currenNodeB = headB

    if (lengthA > lengthB) {
        for (let i = 0; i < lengthA - lengthB; i++) {
            currentNodeA = currentNodeA.next
        }
    } else {
        for (let i = 0; i < lengthB - lengthA; i++) {
            currentNodeB = currenNodeB.next;
        }
    }

    while (currentNodeA && currentNodeB) {
        if (currentNodeA === currenNodeB) {
            return currentNodeA;
        }
        currentNodeA = currentNodeA.next;
        currentNodeB = currenNodeB.next;
    };
    return null
};



const a1 = new ListNode(3);
const a2 = new ListNode(7);
const a3 = new ListNode(8);
const a4 = new ListNode(10);
a1.next = a2;
a2.next = a3;
a3.next = a4;

const b1 = new ListNode(99);
const b2 = new ListNode(1);

b1.next = b2;
b2.next = a3; // Intersection point

const intersectionNode = getIntersectNode(a1, b1);
console.log(intersectionNode ? intersectionNode.data : 'No intersection'); // Outp