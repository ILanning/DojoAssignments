class Node(object):
    def __init__(self, value = None, prev = None, next = None):
        self.value = value
        self.prev = prev
        self.next = next

class DList(object):
    def __init__(self, array = None):
        if array == None or len(array) == 0:
            self.head = None
        else:
            self.head = self._genNodes(array)[0]

    def _genNodes(self, array):
        firstNode = Node(array[0])
        lastNode = firstNode
        for i in xrange(1, len(array)):
            lastNode.next = Node(array[i], lastNode)
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
        self.head = Node(val, None, self.head)
        return self

    def AddBack(self, val):
        if(self.head == None):
            self.head = Node(val)
        else:
            node = self.head
            while node.next != None:
                node = node.next
            node.next = Node(val, node)
        return self

    def InsertBefore(self, postVal, val):
        if self.head != None:
            if self.head.value == postVal:
                self.head.prev = Node(val, None, self.head)
                self.head = self.head.prev
            elif self.head.next != None:
                node = self.head
                while node.next != None:
                    if node.value == postVal:
                        break
                    node = node.next
                if node.value == postVal:
                    node.prev.next = Node(val, node.prev, node)
                    node.prev = node.prev.next
        return self

    def InsertAfter(self, prevVal, val):
        if self.head != None:
            node = self.head
            while node.next != None:
                if node.value == prevVal:
                    break
                node = node.next
            if node.value == prevVal:
                node.next.prev = Node(val, node, node.next)
                node.next = node.next.prev
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
