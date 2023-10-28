#include <iostream>

using namespace std;

// Tipe Data Fundamental
// dan memory yg digunakannya.
int main() {

    // Bilangan bulat
    int a = 1; // 4 bit
    long b = 12; // 8 byte
    short c = 12; // 2 byte

    // Bilangan Decimal.
    float d = 1.22131;
    double e = 0.212;

    // Character
    char f = 'a'; // 1 bit

    // boolean
    bool g = true;


    // untuk menghitung memorynya berapa byte.
    cout << sizeof(a) << " byte" << endl;

    cin.get();
    return 0;
}