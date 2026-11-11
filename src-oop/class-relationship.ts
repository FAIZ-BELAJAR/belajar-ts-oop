// karena implementasi dari object di typescript adalah javascript object
// jadi sebenernya jika terdapat dua object walaupun berbeda class tetapi secara properties dan function sama, maka bisa dianggap secara struktur javascript object adalah sama
// pada kasus seperti itu, kita bisa membuatobject untuk tipe data A dengan membuat object dari tipe data B asal secaara properties dan method sama

class Person {
    constructor(public name:string){

    }
}

class Customer {
    constructor(public name: string){}
}

export const person: Person = new Customer("ana") //BOOM bisa kan, tapi ini sangat sangat tidak direkomendasikan