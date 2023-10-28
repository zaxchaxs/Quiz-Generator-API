    // Aritmatika

#include <iostream>

using namespace std;

int main() {
    int a, b, hasil;

    a = 40;
    b = 12;

    hasil = a + b;
    cout << a << " + "   << b << " = "   << hasil << endl;

    hasil = a - b;
    cout << a << " - "   << b << " = "   << hasil << endl;

    hasil = a * b;
    cout << a << " x "   << b << " = "   << hasil << endl;

    hasil = a % b;
    cout << a << " % "   << b << " = "   << hasil << "\n" << endl;

    hasil = a / b;
    cout << a << " / " << b << " = " << hasil << endl;
    cout << "Ini kenapa tidak menjadi bilangan desimal?\nKarena tipe data yang dipakai di variable a & b itu integer.\nCara untuk mengubahnya, ubah salah satu var dan var penampungnya menjadi tipe data float/double.\n" << endl;

    // Agar yang dibagi bisa memiliki nilai decimal
    int c = 14;
    float d = 3;
    float hasil2 = c / d;
    cout << c << " / " << d << " = " << hasil2 <<endl;


    return 0;
}
