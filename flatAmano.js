const spliceAmano = function (arr = []) {
    let arrRes = [];
    const insertar = function (arrVa = []) {
        for (let a = 0; a < arrVa.length; a++) {
            if (Array.isArray(arrVa[a])) {
                insertar(arrVa[a]);
            } else {
                arrRes.push(arrVa[a]);
            }
        }
    }
    insertar(arr);
    return arrRes;
}


let arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [
        [1, 2],
        [3, 4]
    ],
    [
        [1, 2],
        [3, 4]
    ],
    [
        [1, 2],
        [3, 4],
        [
            [1, 2],
            [3, 4]
        ],
        [
            [1, 2],
            [3, 4]
        ]
    ]
]

console.log(spliceAmano(arr));

console.log(arr.flat())