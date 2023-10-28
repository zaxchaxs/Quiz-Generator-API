

#include <iostream>

using namespace std;
    
    // Operator Logika

    int main() {
        int a, b;
        bool hasil1, hasil2, hasil3, hasil4;

        a = 5;
        b = 10;

        hasil1 = (a == 5); // Output true/1
        hasil2 = (b > 8 ); // Output true/1

        cout << hasil1 <<endl;
        cout << hasil2 <<endl;



        // Untuk or dan and itu sama konsepnya. Di "and", jika ada salah satu yang false maka jadi false.
        // Sedangkan untuk "or". Jika ada salah satu ada yang true, maka akan bernilai true meskipun salah satunya ada yang false.

        // and
        hasil3 = (a == 5 and b > 12); // Akan false/0, karena salah satu ada yang false.
        cout << "\nand = false/" << hasil3 << " Karena salah satu ada yg false" <<endl;

        hasil3 = (a == 5 and b <  12);
        cout << "and = true/" << hasil3 << " Karena true semua." <<endl;


        // or
        hasil4 = (a > 7 or b > 9); // True/1, karena ada salah saatu yang true.
        cout << "Or = true/" << hasil4 << " Karena salah satu ada yang true." <<endl;

        hasil4 = (a > 7 or b == 9); 
        cout << "Or = false/" << hasil4 << " Karena false semua." <<endl;

    return 0;
}