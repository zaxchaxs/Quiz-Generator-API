

#include <iostream>

using namespace std;

    // Switch Case

int main() {
    int a;

    // Switch case hmpir sama seperti if statement, namun if statement untuk beberpa kasus yang lebih kompleks.
    
    a = 5;

    switch (a)
    {
    case 3:
        cout << "Anda memasukkan nilai " << a <<endl;
        break;
    case 4:
        cout << "Anda memasukkan nilai " << a <<endl;
        break;
    case 5:
        cout << "Anda memasukkan nilai " << a <<endl;
        break;
    default:
        cout << "Anda memasukkan nilai diluar jangkauan." <<endl;
        break;
    }


 return 0;       
}