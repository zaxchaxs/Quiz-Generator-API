

#include <iostream>

using namespace std;


    // While Loop

main() {

    int x, n;

    cout << "\nIni adalah program untuk menulis angka otomatis dari nilai x sampai ke n." << endl;
    cout << "Silahkan masukkan nilai x: " << endl;
    cin >> x;
    cout << "Masukkan nilai n: " << endl;
    cin >> n;

    while (x <= n){
        cout << "caca" << x << endl;
        x++;
    
    };

    cin.get();
    return 0;
}