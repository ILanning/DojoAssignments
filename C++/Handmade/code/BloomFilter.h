typedef int(*HashFunctionPtr)(char* string);
int hashA(char* string);
int hashB(char* string);
int hashC(char* string);

class BloomFilter {
	bool* boolArray;
	int capacity;
	HashFunctionPtr hashFunctions[3] = { hashA, hashB, hashC };
public:
	BloomFilter(int capacity);
	void add(char* string);
	bool get(char* string);
	~BloomFilter();
};

#include "BloomFilter.cpp"