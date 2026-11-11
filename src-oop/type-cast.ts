// di ts dasar kita pernah belajar tentang type assertions dimana kita bisa mengubah tipe data dari satu tipe data ke tipe data lain nya 
// ini juga bisa kita lakukan dalam kasus method polymorphism
// kita bisa kombinasikan operator instance of dan type assertions
import { Employee, Manager, VicePresident } from "./polymorphism";
export function sayHello(employee: Employee):void {
    // aturan harus dari child terbawah untuk instance of polymorphism
    // karna yang diatas pasti kompatibel dengan dibawah namun tidak sebaliknya
    if (employee instanceof VicePresident) {
        const vp = employee as VicePresident
        console.info(vp.namaNya())
    } else if (employee instanceof Manager) {
        const vp = employee as Manager 
        console.info(vp.namaNya())
    }
    
}