

#include <iostream>

using namespace std;

    // break dan continue

    main() {

        // Break
        for (int i = 0; i <= 10; i++){
            if (i == 5){
                break;
            };
            cout << i << endl;
        }

        cout << "Akhir dari eksekusi break \n" << endl;

        // Comtinue
        for (int a = 0; a <=10; a++){
           if ( a == 5){
            continue; // Output 5 gaada, diloncat.
           }
            cout << a << endl;
            
        }

        cout << "Akhir dari eksekusi continue\n" << endl;

        cin.get();
        return 0;
}