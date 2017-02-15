class Node(object):
    def __init__(self, value = None, next = None):
        self.value = value
        self.next = next

class SList(object):
    def __init__(self, array = None):
        if(array == None or len(array) == 0):
            self.head = None
        else:
            self.head = self._genNodes(array)[0]

    def _genNodes(self, array):
        firstNode = Node(array[0])
        lastNode = firstNode
        for i in xrange(1, len(array)):
            lastNode.next = Node(array[i])
            lastNode = lastNode.next
        return (firstNode, lastNode)

    def PrintAll(self):
        valueList = []
        if self.head != None:
            node = self.head
            while node.next != None:
                valueList.append(str(node.value))
                node = node.next
            valueList.append(str(node.value))
        print "<" + " ".join(valueList) + ">"
        return self

    def AddFront(self, val):
        self.head = Node(val, self.head)
        return self

    def AddBack(self, val):
        if(self.head == None):
            self.head = Node(val)
        else:
            node = self.head
            while node.next != None:
                node = node.next
            node.next = Node(val)
        return self

    def InsertBefore(self, postVal, val):
        if self.head != None:
            if self.head.value == postVal:
                self.head = Node(val, self.head)
            elif self.head.next != None:
                prevNode = self.head
                node = self.head.next
                while node.next != None:
                    if node.value == postVal:
                        break
                    prevNode = node
                    node = node.next
                if node.value == postVal:
                    prevNode.next = Node(val, node)
        return self

    def InsertAfter(self, prevVal, val):
        if self.head != None:
            node = self.head
            while node.next != None:
                if node.value == prevVal:
                    break
                node = node.next
            if node.value == prevVal:
                node.next = Node(val, node.next)
        return self

    def RemoveVal(self, val):
        if self.head != None:
            if self.head.value == val:
                self.head = self.head.next
            elif self.head.next != None:
                prevNode = self.head
                node = self.head.next
                while node.next != None:
                    if node.value == val:
                        break
                    prevNode = node
                    node = node.next
                if node.value == val:
                    prevNode.next = node.next
        return self

    def Reverse(self):
        if self.head != None and self.head.next != None:
            if self.head.next.next == None:
                self.head.next.next = self.head
                self.head = self.head.next
                self.head.next = null
            else:
                prevNode = self.head
                node = self.head.next
                self.head.next = None
                while node.next != None:
                    temp = node.next
                    node.next = prevNode
                    prevNode = node
                    node = temp
                self.head = node
            node.next = prevNode
        return self

linked = SList([1, 2, 3, 4]).PrintAll().AddFront(11).AddBack(8).PrintAll().Reverse().PrintAll()
linked.InsertAfter(11, 9).InsertBefore(8, 10).PrintAll().RemoveVal(4).PrintAll()
