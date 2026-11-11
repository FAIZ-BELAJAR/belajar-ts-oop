// inheritance adalah pewarisan dari class parent ke class child
export class ParentClassIdentity {
    private readonly id: number;
    nama: string;

    constructor(id: number, nama: string) {
        this.id = id;
        this.nama = nama;
    }

    get idnya(): number {
        return this.id;
    }
}

export class ChildClassSiswa extends ParentClassIdentity {
    nama_sekolah: string;
    nama_kelas: string;
    kelas: number;
    beasiswa: boolean;

    // Menambahkan id dan nama ke dalam parameter object
    constructor( id: number, nama: string, ns: string, nk: string, k: number, b: boolean ) {
        // 1. WAJIB panggil super() pertama kali untuk menginisialisasi Parent Class
        super(id, nama); 
        
        // 2. Lanjutan ngetik properti sisanya
        this.nama_sekolah = ns;
        this.nama_kelas = nk;
        this.kelas = k;
        this.beasiswa = b;
    }
}

// Contoh cara pakainya kalau mau langsung instansiasi:
const siswaBaru = new ChildClassSiswa(
    101,
     "Faiz",
  "SMA Negeri 1",
   "XII-IPA-1",
 12,
     true);

console.log(siswaBaru.idnya); // Output: 101 (akses lewat getter parent)
console.log(siswaBaru.nama);  // Output: Faiz