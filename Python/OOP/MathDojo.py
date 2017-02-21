class MathDojo(object):
    def __init__(self):
        self.result = 0

    def add(self, *args):
        self.result += self._add(args)
        return self

    def subtract(self, *args):
        self.result -= self._add(args)
        return self

    def _add(self, array):
        sum = 0
        for value in array:
            if isinstance(value, tuple) or isinstance(value, list):
                sum += self._add(value)
            else:
                sum += value
        return sum

print MathDojo().add(2).add(2, 5, (2,(2,50))).subtract(3, 2).result
