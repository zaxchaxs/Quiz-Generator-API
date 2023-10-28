

#include <iostream>

using namespace std;


    // Increment dan Decrement
    
    // Increment ada dua yaitu pre increment dan post increment.

    main() {

        int a, b;
        a = 5;
        b = 10;

        cout << "\n Increment \n" << endl;
        // Post Increment
        cout << "ini sebelum di increment " << a << endl;
        a++;
        cout << "ini sesudah di increment " << a << endl;
        
        // Pre Increment 
        cout << "sebelum " << b << endl;
        ++b;
        cout << "Sesudah " << b << endl;

        cout << "\n \n";

        /*  Perbedaan dari pre dan post increment maupun decrement intinya.
        Saat pre increment, si value nya itu di tambah dlu.. klo post kebalikannya.
        Contoh ae lah langsung, pusing gua ngetik apa.
        Contoh
*/
        int c = 20;
        int d = 30;

        // Increment

        cout << c << endl;
        cout << c++ << endl;
        cout << c << endl;

        // Decrement
        cout << d << endl;
        cout << ++d << endl;
        cout << d << endl;

        cin.get();
        return 0;
}