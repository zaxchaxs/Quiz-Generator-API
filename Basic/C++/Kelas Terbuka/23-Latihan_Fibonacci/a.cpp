

#include <iostream>

using namespace std;

    main() {
        int n, hasil;
        hasil = 0;

        cout << "\nProgram deret fibonacci\n" << endl;

        cout << "Masukkan nilai ke-n" << endl;
        cin >> n;

        for (int i = 1; i <= n; i++){
            hasil = i + hasil;
        };

        cout << "\nHasilnya yaitu: " << hasil << "\n" << endl;


        cin.get();
        return 0;
}