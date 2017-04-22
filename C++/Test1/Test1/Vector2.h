#pragma once
#include <string>

struct Vector2 {
	float x=0, y=0;
	Vector2();
	Vector2(float);
	Vector2(float, float);

	Vector2 operator+(const Vector2&);
	Vector2 operator-(const Vector2&);
	Vector2 operator/(float);
	Vector2 operator*(float);
	float dot(const Vector2&);
	float magnitude();
	float magnitudeSquared();
	Vector2 normalize();
	std::string to_string();
};