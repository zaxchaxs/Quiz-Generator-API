

function Angkot (nama, sakuSopir, penumpang, jalur ){
    this.namaSopir = nama;
    this.penumpang = penumpang;
    this.sakuSopir = sakuSopir;
    this.jalur = jalur;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;

    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.lenght === 0){
            console.log(`Di angkot tidak ada penumpang`);
            return this.penumpang;
        } else {
            for (let i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] === namaPenumpang){
                    this.penumpang[i] = undefined;
                    this.sakuSopir += bayar;
                    return this.penumpang;
                } else {
                    console.log(`Tidak ada penumpang yang bernama ${namaPenumpang} di dalam angkot ini.`)
                    
                }
                
            }
        }
    };
}

const angkot1 = new Angkot(`Irzi Rahmatullah`, 0, [undefined], [`Pamijahan - Cemplang`]);