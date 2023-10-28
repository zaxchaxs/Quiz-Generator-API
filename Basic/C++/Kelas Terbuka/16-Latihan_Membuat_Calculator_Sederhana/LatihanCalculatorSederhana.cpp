

#include <iostream>

using namespace std;



    // Latihan Membuat Calculator Sederhana.


    main() {
        float a, b, hasil;
        char aritmatika;

        cout << "\nIni adalah program calculator sangat sangat sangat sangat sederhana \n" <<endl;

        // Input dari user
        cout << "Masukkan angka pertama" <<endl;
        cin >> a;

        cout << "Pilih operator, seperti +, -, *, /" <<endl;
        cin >> aritmatika;

        cout << "Masukkan angka kedua" << endl;
        cin >> b;

        // Program Aritmatikanya.

        if (aritmatika == '+'){
            hasil = a + b;
            cout << "\n Hasil perhitungan dari ";
            cout << a << aritmatika << b << " adalah: " << hasil << "\n" << endl;
        } else if (aritmatika == '-') {
            hasil = a - b;
            cout << "\n Hasil perhitungan dari ";
            cout << a << aritmatika << b << " adalah: " << hasil << "\n" << endl;
        } else if (aritmatika == '/') {
            hasil = a / b;
            cout << "\n Hasil perhitungan dari ";
            cout << a << aritmatika << b << " adalah: " << hasil << "\n" << endl;
        } else if (aritmatika == '*') {
            hasil = a * b;
            cout << "\n Hasil perhitungan dari ";
            cout << a << aritmatika << b << " adalah: " << hasil << "\n" << endl;
        } else {
            cout << "\n Operator yang kamu masukkan tidak sesuai." << "\n" << endl;
        };


        return 0;
}