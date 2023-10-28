    // Komparasi/Relation Expression

#include <iostream>

using namespace std;

main() {
    int a, b;
    bool hasil1, hasil2;

    a = 50;
    b = 50;

    // Sebanding.
    cout << (a == b) << "\n" << endl; //Output = 0, jika outputnya 1 artinya true jika 0 maka false.
    
    hasil1 = (a == b);
    cout << hasil1 << " ini yang sebanding." <<endl; // sama aja.
    
    // tidak sebanding.
    hasil2 = (a != b);
    cout << hasil2 << " ini yang tidak sebanding."<<endl;

    // Lebih dari dan lebihsama
    hasil1 = (a > b);
    cout << hasil2 << " Ini yg lebih dari." <<endl;

    hasil2 = (a >= b);
    cout << hasil2 <<" ini yg lebih dari samadengan." <<endl;
    return 0;
}