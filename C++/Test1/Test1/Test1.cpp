// Test1.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include "Vector2.h"
#include <cstdio>
#include <iostream>
#include <string>
using namespace std;

int main()
{
	Vector2 a = Vector2();
	Vector2 b = Vector2(3, 4);
	Vector2 c = Vector2(6);
	Vector2 d = b + c;
	cout << "a: " << a.to_string() << endl;
	cout << "b: " << b.to_string() << endl;
	cout << "c: " << c.to_string() << endl;
	cout << "d: " << d.to_string() << endl;
	cout << "d mag: " << d.magnitude() << endl;
	cout << "d magSquared: " << d.magnitudeSquared() << endl;
	cout << "c dot d: " << c.dot(d) << endl;

	string temp;
	cin >> temp;
    return 0;
}

