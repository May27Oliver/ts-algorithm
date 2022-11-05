import linkedList from "../linkedList";

describe("data structure testing", () => {
  test("linked list", () => {
    const arr = [4, 7, 1, 2, 5, 3, 8, 10, 33, 6, 77, 100, 101];
    arr.forEach((val) => {
      linkedList.append(val);
    });
    expect(linkedList.size).toEqual(13);
    expect(linkedList.indexOf(2)).toEqual(3);
    linkedList.deleteNode(2);
    expect(linkedList.size).toEqual(12);
    linkedList.insert(2, 3);
    expect(linkedList.indexOf(2)).toEqual(3);
    linkedList.append(55);
    expect(linkedList.size).toBe(14);
  });
});
