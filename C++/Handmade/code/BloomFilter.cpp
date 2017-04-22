BloomFilter::BloomFilter(int capacity) {
	boolArray = new bool[capacity];
	this->capacity = capacity;
}

void BloomFilter::add(char* string) {
	for (int i = 0; i < 3; i++) {
		boolArray[hashFunctions[i](string) % capacity] = true;
	}
}

bool BloomFilter::get(char* string) {
	for (int i = 0; i < 3; i++) {
		if (!boolArray[hashFunctions[i](string) % capacity])
			return false;
	}
	return true;
}
BloomFilter::~BloomFilter() {
	delete boolArray;
}

int hashA(char* string) {
	return (int)string[0];
}
int hashB(char* string) {
	return (int)string[1];
}
int hashC(char* string) {
	return (int)string[2];
}