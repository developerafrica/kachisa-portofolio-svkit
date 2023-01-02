import { writable } from "svelte/store";

class DataObj{
    /**
     * @param {any} image
     * @param {any} text
     * @param {any} price
     * @param {any} status
     * @param {string} date
     * @param {string} size
     */
    constructor(image, text, price,date,size, status){
        this.price = price        
        this.image = image
        this.text = text
        this.date = date
        this.size = size
        this.status = status
        this.id = crypto.randomUUID()
    }
}

const data = [
    new DataObj('art1.png', "boy in a cap", '$100', "2022", "30 x 20", "avalable"),
    new DataObj('art2.png', "african woman", '$100', "2022", "30 x 20", "avalable"),
    new DataObj('art3.png', "malawian politician", '$100', "2022", "30 x 20", "avalable"),
    new DataObj('art4.png', "malawian singer", '$100', "2022", "30 x 20", "avalable"),
    new DataObj('art5.png', "pangolin", '$100', "2022", "30 x 20", "avalable"),
    new DataObj('art6.png', "african girl", '$100', "2022", "30 x 20", "avalable"),
    new DataObj('art7.png', "solder", '$100', "2022", "30 x 20", "avalable"),
    new DataObj('art8.png', "smiling african girls", '$100', "2022", "30 x 20", "avalable"),
    new DataObj('art9.png', "african boy", '$100', "2022", "30 x 20", "avalable"),
    new DataObj('art10.png', "gilr potrait", '$100', "2022", "30 x 20", "avalable"),
]
export const stores = writable({data})