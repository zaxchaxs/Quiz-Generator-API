
#include <iostream>
#include <queue>
#include <cstdlib>
#include <ctime>

using namespace std;

struct Pengunjung {
    string nama;
    int lamaMenginap;
    string notelp;
    int nomorkamar;
    int kodebooking;
    Pengunjung* next;
};
time_t my_time = time(NULL);

// Linked list variables
Pengunjung* head = NULL;
Pengunjung* tail = NULL;


bool isKamarTersedia(int nomorkamar) {
    Pengunjung* temp = head;
    while (temp != nullptr) {
        if (temp->nomorkamar == nomorkamar) {
            return false;
        }
        temp = temp->next;
    }
    return true;
}

int generateKodeBooking() {
    srand (time(NULL));
    int random = rand() % 9999 + 1000;
    return random;
}

void tambahPengunjung(string nama, int lamaMenginap, string notelp, int nomorkamar) {
    Pengunjung* pengunjungBaru = new Pengunjung;
    pengunjungBaru->kodebooking = generateKodeBooking();
    pengunjungBaru->nama = nama;
    pengunjungBaru->lamaMenginap = lamaMenginap;
    pengunjungBaru->notelp = notelp;
    pengunjungBaru->nomorkamar = nomorkamar;
    pengunjungBaru->next = NULL;

    if (isKamarTersedia(nomorkamar)) {
        if (head == NULL) {
            head = pengunjungBaru;
            tail = pengunjungBaru;
        } else {
            tail->next = pengunjungBaru;
            tail = pengunjungBaru;
        }

        queue<Pengunjung> pengunjungQueue;
        pengunjungQueue.push(*pengunjungBaru);

        int hargaKamar = (nomorkamar <= 5) ? 100000 : 250000;
        int totalPembayaran = hargaKamar * lamaMenginap;
        int uangBayar;

        cout << "=================================================" ;
        cout << "\nTotal Harga : " << totalPembayaran << " IDR\n" ;
        cout << "=================================================" ;
        do {
            cout << "\nMasukkan jumlah uang yang dibayarkan: ";
            cin >> uangBayar;

            if (uangBayar >= totalPembayaran) {
                int kembalian = uangBayar - totalPembayaran;
                cout << "Pembayaran berhasil. Kembalian: " << kembalian << " IDR" << endl;
            } else {
                cout << "Pembayaran tidak cukup. Silakan bayar dengan jumlah yang sesuai." << endl;
            }
        } while (uangBayar < totalPembayaran);


        //cout << "\nPengunjung dengan nama " <<  nama<< " telah ditambahkan di kamar " << nomorkamar << " dengan kode pesanan " << pengunjungBaru->kodebooking << endl;
            cout << "\n-------------------------" << endl;
            cout << "Kamar " << nomorkamar << endl;
            cout << "Kode Pesanan : " <<  pengunjungBaru->kodebooking << endl;
            cout << "Nama : " << nama << endl;
            cout << "Lama Menginap : " << lamaMenginap << " hari" << endl;
            cout << "Nomor Telepon : " << notelp << endl;
            cout << "Telah Ditambahkan On ";

            printf("%s", ctime(&my_time));  // ctime() DIGUNAKAN UNTUK MENAMPILKAN WAKTU SKRNG
                } else {
                    cout << "Kamar " << nomorkamar << " sudah dipesan\n";
                }
}

void hapusPengunjung(int kodebooking, string nama) {
    if (kodebooking == 0) {
        return;
    }

    Pengunjung* curr = head;
    Pengunjung* prev = NULL;
    bool pengunjungDitemukan = false;

    while (curr != NULL) {
        if (curr->kodebooking == kodebooking) {
            if (prev == NULL) {
                head = curr->next;
            } else {
                prev->next = curr->next;
            }
            delete curr;
            pengunjungDitemukan = true;
            break;
        }
        prev = curr;
        curr = curr->next;
    }

    if (pengunjungDitemukan) {
        cout << "\nPengunjung dengan nama " << nama << " telah dihapus " << endl;
    } else {
        cout << "\nPengunjung tidak ditemukan." << endl;
    }
}

void tampilDaftarPengunjung() {
    Pengunjung* temp = head;

    cout << "\nDaftar Pengunjung yang Sedang Menginap:" << endl;
    if (temp == NULL) {
        cout << "\nTidak ada pengunjung yang sedang menginap." << endl;
        return;
    }

    while (temp != NULL) {
        if (temp->nomorkamar > 0 && temp->nomorkamar <= 5) {
            cout << "\n-------------------------" << endl;
            cout << "Kamar " << temp->nomorkamar << " (Standart Room)" << endl;
            cout << "Kode Pesanan : " << temp->kodebooking << endl;
            cout << "Nama : " << temp->nama << endl;
            cout << "Lama Menginap : " << temp->lamaMenginap << " hari" << endl;
            cout << "Nomor Telepon : " << temp->notelp << endl;
            cout << "-------------------------";
        }

        if (temp->nomorkamar > 5 && temp->nomorkamar <= 10) {
            cout << "\n-------------------------" << endl;
            cout << "Kamar " << temp->nomorkamar << " (Deluxe Room)" << endl;
            cout << "Kode Pesanan : " << temp->kodebooking << endl;
            cout << "Nama : " << temp->nama << endl;
            cout << "Lama Menginap : " << temp->lamaMenginap << " hari" << endl;
            cout << "Nomor Telepon : " << temp->notelp << endl;
            cout << "-------------------------";
        }

        temp = temp->next;
    }
}


void tampilKamarTersedia() {
    cout << "== Pilihan Kamar yang Tersedia== " << endl;
    cout << "\n===============" << endl;
    cout << "Standard Room" << endl;
    cout << "===============" << endl;
    for (int nomorKamar = 1; nomorKamar <= 5; nomorKamar++) {
        if (isKamarTersedia(nomorKamar)) {
            cout << "Kamar " << nomorKamar << endl;
        }
    }
    cout << "\n=============" << endl;
    cout << "Deluxe Room" << endl;
    cout << "=============" << endl;
    for (int nomorKamar = 6; nomorKamar <= 10; nomorKamar++) {
        if (isKamarTersedia(nomorKamar)) {
            cout << "Kamar " << nomorKamar << endl;
        }
    }
}



int main() {
    int pilihan;
    int kodebooking;
    string nama;
    int lamaMenginap;
    string notelp;
    int nomorkamar;
    char ulangi;


    do {
        system("cls");
        cout << "==========================================" << endl;
        cout << "Tanggal :    " ; system("date/t");
        cout << "==========================================" << endl;
        cout << "|         MENU PEMESANAN HOTEL            |" << endl;
        cout << "==========================================" << endl;
        cout << "| 1. Pemesanan kamar                      |" << endl;
        cout << "| 2. Hapus Data Pemesanan                 |" << endl;
        cout << "| 3. Daftar Pengunjung                    |" << endl;
        cout << "| 4. Cek Ketersediaan Kamar               |" << endl;
        cout << "| 0. Keluar                               |" << endl;
        cout << "|                                         |\n";
        cout << "|                                         |\n";
        cout << "==========================================" << endl;
        cout << endl;
        cout << "Pilihan: ";
        cin >> pilihan;


        switch (pilihan) {
            case 1:
                do {
                    system("cls");
                    tampilKamarTersedia();

                    cout << "\n== KETIK 0 UNTUK KEMBALI KE MENU AWAL ==";
                    cout << "\nMasukkan nomor kamar yang ingin dipesan: ";
                    cin >> nomorkamar;

                    if (nomorkamar == 0) {
                        break;
                    }


                    if (nomorkamar > 0 && nomorkamar <= 10) {
                        if (isKamarTersedia(nomorkamar)) {
                            cout << "Tekan apapun untuk melanjutkan pembayaran!\n";
                            system("pause");
                            system("cls");
                            cout << "Kamar " << nomorkamar << endl;
                            cout << "Masukkan nama pengunjung: ";
                            cin >> nama;
                            cout << "Masukkan lama menginap (dalam hari): ";
                            cin >> lamaMenginap;
                            cout << "Masukkan Nomor HP : ";
                            cin >> notelp;
                            tambahPengunjung(nama, lamaMenginap, notelp, nomorkamar);
                        } else {
                            cout << "Kamar " << nomorkamar << " sudah dipesan\n";
                        }
                    } else {
                        cout << "\nKamar " << nomorkamar << " Tidak tersedia..." << endl;
                        cout << "Harap periksa nomor kamar yang diinput!" << endl;
                    }

                    // Memeriksa apakah pengguna ingin memesan kamar lagi
                    cout << "\nIngin memesan kamar lagi? (y/n): ";
                    cin >> ulangi;
                } while (ulangi == 'y' || ulangi == 'Y');
                break;
            case 2:
                do {
                    system("cls");
                if (head == NULL) {
                    cout << "Tidak ada pengunjung di kamar." << endl;
                    system("pause");
                    break;
                }
                cout << "\n== Hapus Pengunjung ==" << endl;
                cout << "== KETIK 0 UNTUK KEMBALI KE MENU AWAL ==\n";
                cout << "Masukkan kode pesanan yang akan dihapus: ";
                cin >> kodebooking;
                hapusPengunjung(kodebooking,nama);
                system("pause");
                } while (ulangi == 'y' || ulangi == 'Y');
                break;
            case 3:
                system("cls");
                cout << "\n== Tampil Data Pengunjung ==" << endl;
                tampilDaftarPengunjung();
                system("pause");
                break;
            case 4:
                system("cls");
                tampilKamarTersedia();
                break;
            case 0:
                break;
            default:
                cout << "Pilihan tidak valid." << endl;
                break;
        }

        if (pilihan != 0) {
            cout << "\nTekan ENTER untuk melanjutkan...";
            cin.ignore();
            cin.get();
        }

    } while (pilihan != 0);

    Pengunjung* curr = head;
    while (curr != NULL) {
        Pengunjung* next = curr->next;
        delete curr;
        curr = next;
    }

    return 0;
};