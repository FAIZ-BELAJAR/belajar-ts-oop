// sama seperti di js, di ts pun mendukung error handling menggunakan try catch
// cara penggunaan error handling di ts sama saja seperti di js
// termasuk jika ingin membuat class error secara manual itu juga bisa kita lakukan dengan membuatclass turunan dari error, sama seperti di js

export class ValidationError extends Error {
    constructor(public message:string){
        super(message)
    }
}

export function doubleIr(value: number): number {
    if (value < 0){
        throw new ValidationError("tai, lu ngeremehin gw, gitu loh, ibaratah")
    }

    return value *2
}