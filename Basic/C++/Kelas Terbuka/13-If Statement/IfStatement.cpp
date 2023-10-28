

#include <iostream>

using namespace std;

    // If Statement 

 int main() {
    int value, nilai;

    value = -10;


    if ( value > 100)
    {
        cout << "Valuenya melebihi nilai 100." <<endl;
    } else if (value <= 0 ) {
        cout << "Valuenya kurang dari sama dengan 0 \n" <<endl;
    } else {
        cout << "Valuenya kurang dari 100" <<endl;
    }


    nilai = 199;

    if (nilai > 200){
        cout << "value dari variable 'nilai' lebih dari 200, yaitu berjumlah " << nilai <<endl;
    } else if ( nilai < 200) {
        cout << "value dari variable 'nilai' kurang dari 200, yaitu berjumlah " << nilai <<endl;
    } else {
        cout << "Value dari variable 'nilai' adalah " << nilai <<endl;
    }

    return 0;
}