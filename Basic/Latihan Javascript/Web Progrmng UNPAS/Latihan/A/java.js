


    function tebakHari(tanggal, bulan, tahun) {

        const tahunDalamAbad = tahun % 100;
        const abad = tahun/100;
        
        if(bulan === 1) {
            bulan = 13;
            tahun -1;
        } else if(bulan === 2) {
            bulan = 14;
            tahun -1;
        };

        const hari = (tanggal + (13*(bulan + 1)/5) + tahunDalamAbad +(tahunDalamAbad / 4) + (abad / 4)) % 7; 
        return hari;
    }

    const hari = tebakHari(21, 6, 2004);
    console.log(hari)