import { ParentClassIdentity, ChildClassSiswa } from "../src-oop/inheritance"

describe('it should support inheritance', () => { 
    it('support inheritance', () => {
        // 1. Instansiasi objek dengan parameter berurutan (sudah benar)
        const siswapp = new ChildClassSiswa(1, "Faiz", "Prestasi Prima", "RPL2", 2, false);

        // 2. Pembuktian bahwa ChildClassSiswa adalah turunan dari ParentClassIdentity
        expect(siswapp).toBeInstanceOf(ChildClassSiswa);
        expect(siswapp).toBeInstanceOf(ParentClassIdentity); // Ini bukti inheritance jalan!

        // 3. Pembuktian bahwa data dari ParentClassIdentity berhasil diwarisi & diakses
        expect(siswapp.nama).toBe("Faiz");
        expect(siswapp.idnya).toBe(1); // Mengakses id privat lewat getter milik parent

        // 4. Pembuktian properti milik ChildClassSiswa sendiri
        expect(siswapp.nama_sekolah).toBe("Prestasi Prima");
        expect(siswapp.nama_kelas).toBe("RPL2");
        expect(siswapp.kelas).toBe(2);
        expect(siswapp.beasiswa).toBe(false);
    });
});