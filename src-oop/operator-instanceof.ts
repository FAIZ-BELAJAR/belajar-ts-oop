import { Pengguna } from "./parameter-properties"

// kadang ada kasus kita ingin ngecek apakah sebuah object merupakan kelas apaan

// kita tak bisa menggunakan operator type of karna bakal menghasilkan output Object aja

// ts menyediakan operator instanceof yang nantinya akan menghasilkan output kelasnya yang merupakan

export function CekClass(classnya: any): string {
    if (classnya instanceof Pengguna) {
        return "pengguna"
    } 

    return "gak tau"
}

// export function* generatormen(data:string): Generator<string>{
//     for (const d of data){
//         yield d
//     }
// }