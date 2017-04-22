#include "stdafx.h"
#include "Vector2.h"
#include <cmath>
#include <string>

Vector2::Vector2(): x(0.0f), y(0.0f) { }
Vector2::Vector2(float value): x(value), y(value) { }
Vector2::Vector2(float x, float y): x(x), y(y) { }

Vector2 Vector2::operator+(const Vector2& b) 
{
	return Vector2(x + b.x, y + b.y);
}

Vector2 Vector2::operator-(const Vector2& b)
{
	return Vector2(x - b.x, y - b.y);
}

Vector2 Vector2::operator/(float val) 
{
	return Vector2(x / val, y / val);
}

Vector2 Vector2::operator*(float val) 
{
	return Vector2(x / val, y / val);
}

float Vector2::dot(const Vector2& b)
{
	return x * b.x + y * b.y;
}

float Vector2::magnitude() 
{
	return std::sqrt(x * x + y * y);
}

float Vector2::magnitudeSquared()
{
	return x * x + y * y;
}

Vector2 Vector2::normalize()
{
	return (*this) / this->magnitude();
}

std::string Vector2::to_string() 
{
	return std::string("(") + std::to_string(x) + ", " + std::to_string(y) + ")";
}