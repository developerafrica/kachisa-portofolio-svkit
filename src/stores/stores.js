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
class AFIObj{
    /**
     * @param {string} intro
     * @param {string[]} purpose
     * @param {string[]} activities
     */
    constructor(intro, purpose, activities){
        this.name = 'art for impact malawi'
        this.image = '/afi.jpg'
        this.introduction = intro;
        this.purpose = purpose;
        this.activities = activities;
    }
}
const AFI = [
    new AFIObj(
        'An initiative by Edison Kachisa to commit part of his earnings from art to environmental conservation, sustainable rural livelihoods and quality of education in primary schools in rural areas of Malawi. ',
        [
            'Reafforestation',
            'Promote quality primary school education in rural areas',
            'Achieve sustainability and improvement in rural livelihoods'
        ],
        [
            'Tree planting programmes',
            'Stationery (exercise books, pens,pencils) donations to needy students',
            'Sanitary pads donations in primary schools in rural areas',
            'Free agricultural extension services to smallholder farmers ( Edison is a passionate  agriculture and natural resources specialist he is currently studying Bsc in Agriculture at Lilongwe University of Agriculture and natural resources and he is about to graduate'
        ]
    )
]

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
let dataSplice = [...data].splice(0,4      )

export const stores = writable({data,dataSplice,AFI})