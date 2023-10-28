

#include <iostream>

using namespace std;


        // Function

    // Fungsi dengan kembalian 
    int kuadrat(int x){
        int z;
        z = x*x;
        return z;
   }

    // Fungsi void/Tanpa kembalian.
    void tampilkan(int input) {
        cout << input << endl;
    }    



    int main() {
        int input, hasil;

        cout << "Masukkan nilai x" << endl;
        cin >> input;

        cout << "Hasilnya adalah: ";
        // Function diatas dipanggil lewat function main ini. Agak kureng emang c++ ini
        // Urutan function ngaruh, jjika function diatas di taro dibawah function main akan error.
        cout << kuadrat(input) << endl;

        cout << "\nini menampilkan dengan function void: ";
        tampilkan(kuadrat(input));

        
        

        cin.get();
        return 0;
}