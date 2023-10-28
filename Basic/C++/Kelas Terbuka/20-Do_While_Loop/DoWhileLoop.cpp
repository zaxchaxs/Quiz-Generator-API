

#include <iostream>

using namespace std;

    main() {
        int a, b;
        b = 10;

        cout << "Masukkan nilai a: " << endl;
        cin >> a;

        do {
            cout << "\nHasil: " << a << endl;
            a++;
        } while(a <= b);

        /* While Loop dan Do While loop berbeda, di Do While Loop kita akan mengeksekusinya dulu
        baru di cek di penkondisian. Jadi misal kita masukkan nilai 11, nilai itu akan di eksekusi dlu
        baru di cek pengkondisiannya.
        */
        cin.get();
        return 0;
}