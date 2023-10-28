

#include <iostream>
#include <string>
#include <cmath>
#include <math.h>

using namespace std;


// Function persegi panjang
double LuasPersegiPanjang(double p, double l){
    double luas;
    luas = p*l;
    return luas;
}

// Function persegi
float luasPersegi(float sisi){
    float luas;
    luas = sisi*sisi;
    return luas;
}

// Function segitiga
float luasSegitiga(float x, float y){
    float luas;
    luas = 1/2*x*y;
    return luas;
}

// function lingkaran
double luasLingkaran(double x){
    double luas;
    luas = M_PI*(x*x);
    return luas;
}



// Void Function
void hasil() {
    cout << hasil << endl;
}

main() {
    string kotak, perPanj, segi, bulat;
    float a,b,c;

    kotak = "Luas persegi adalah: ";
    perPanj = "Luas persegi panjang adalah: ";
    segi = "Luas segitiga adalah: ";
    bulat = "Luas lingkaran adalah: ";


    cout << "\n\nProgram luas bangun datar persegi panjang\n" << "Masukkan nilai panjang" << endl;
    cin >> a;
    cout << "Masukkan nilai lebar" << endl;
    cin >> b;
    cout << perPanj << LuasPersegiPanjang(a,b) << endl;


    cout << "\n\nProgram luas bangun datar persegi\n" << "Masukkan nilai sisi" << endl;
    cin >> a;
    cout << kotak << luasPersegi(a) << endl;


    cout << "\n\nProgram luas bangun datar segitga\n" << "Masukkan nilai alas" << endl;
    cin >> a;
    cout << "Masukkan nilai tinggi" << endl;
    cin >> b;
    cout << segi << luasSegitiga(a,b) << endl;

    cout << "\n\nProgram luas bangun datar persegi\n" << "Masukkan nilai jari-jari" << endl;
    cin>>a;
    cout << bulat << luasLingkaran(a) << endl;


    cin.get();
    return 0;
}
