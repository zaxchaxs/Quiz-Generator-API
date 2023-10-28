

#include <iostream>

using namespace std;

    main() {

        int n;
        n = 5;

        // Segitiga 1
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j < i; j++){
                cout << "*";
            };
            cout << endl;
        };
        cout << "\n" << endl;

        // Segitiga 2
        for (int i = 0; i <= n; i++){
            for (int j = n; j > i; j--){
                cout << "*";
            };
            cout << endl;
        };
        cout << "\n";


        // Segitiga 3
        for (int i = 1; i <= n; i++){
            for (int k = 1; k < i; k++){
                cout << " ";
            };
            for (int j = n; j >= i; j--){
                cout << "*";
            };

            cout << endl;
        };
        cout << "\n" <<endl;


        // Segitiga 4
        for (int i = 1; i <= n; i++){
            for (int k = n; k > i; k--){
                cout << " ";
            };
            for (int j = 1; j <= i; j++){
                cout << "*";
            };

            cout << endl;
        };
        cout << "\n" <<endl;


        // Segitiga 5
        for (int i = 1; i <= n; i++ ){
            for (int j = i; j < n; j++){
                cout << " ";
            };
            for (int k = 1; k <= (2 * i )- 1 ; k++) {
                cout << "*";
            };
            cout <<  endl;
        };
        cout << "\n" << endl;


        // Segitiga 6
        for (int i = 1; i <= n; i++ ){
            for (int j = 1; j <  i; j++){
                cout << " ";
            };
            for (int k = n; k >= (2*i)- n ; k--) {
                cout << "*";
            };
            cout <<  endl;
        };
        cout << "\n" << endl;

    std::cout <<"Irzi Rahmatullah\n" <<std::endl;






        return 0;
    }