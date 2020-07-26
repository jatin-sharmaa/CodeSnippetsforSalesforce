// export default class UtilityIcons {

//     private readonly label: string;
//     private readonly svg: string;

//     constructor(label: string, svg: string){};

//     private get_icon_for_documentation( label ) {

//         var icons = this.allIcons();
//         return icons[label];
//     }

//     private allIcons() {
//         return [
//             "utility:activity" : {
//                 label: "utility:activity",
//                 svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAGDUlEQVR4AWIYSWAUhGZ1SQDatQZoWXIgOmuetW3btr0z09/G/O6s7d1vJpm1bdu2bXzbtus+9qupnukM1n1OHjKVSt1OpXKrMimlm6aVuc4LzKupwPRPB2YCtblo+Bt9+Awyad82adrh2nX/ViBOP+PGNT3fnklGfk4GLyqmYSx0QNdfBuTkzG0respcQQZNhVHladClL4fuP8+tvMeXSvmmHU0+AkZUqI3AHJiromCSmez65B6fFDDmR9obNuXbRt6ZducmZ/bZwDvProCGv1NBv12q95nWJPtZAVf8BHNWZmUCvSdNMrzg21U66aK3cabvlmnfXEVjx4j6fDsseUZ2j7KCIcUetZnChLPJmGs8ZV6qe6tKp4vek4E5n3TMF+bB3F5ZwMB1IlbjtVSnvltDhkLxo7X9+JtAntQ0o9eKO0ebNp2XT/u6eTqw7+RbfdhSEhgsdcTKXJZILFoCMk387Gb0/5AII/6gqHV3Uum9Jf2nnZtdjcD3IbmJMYPFTNhUdACA/zKFCz3fBLUyWCFakaFxjKFx76WUPblz585LeoiUynSk/rH4LGeOwHwbpQc24QB3Ds20uT9myhbALepkOukdqG+Ue0jWvwoGw1UHITg0UWZjrL4X2IuidMA2p5BOvtw2V4npWu+KelPqG1emM2cw9gZWjttBIFvQ5/PEFVemTSwwOC+4q+GNHNa589L4HBMT4LfKAQYREgEh78tV9hiSnS65HmwtCEhY6inemf02D721M8rFCBAJHc7AMYLXXJh/YKb3qjzigFvVfa7sVtQ3o/KA5AMY7sl0TGx+1vWrRA7CpmcDZnjt7Rq1gYI284fo/ysA4cERkEuPbLN8jODxsHBKmRs8r/OyNOhQ8vfb0ffXAjI3ChHvMVH4+LOuX44EpjUMpfZ+8tPRlWLVcHEn1hLovoKeabBdWs7jmWCl22ScN44rlJVDuD1OQG9M1OTVbEDfwjZlqe1rZ5Lsm4cjDlqdIwzGLAD5jfob4wyKOnBLSLufdE9hzNuyPvuixA5+b8hsTXfumwAGwlkOQNgProCi8jG8eGkPjQ8LRRFAnNzlAWR9J7J8Vp+NwryS6RsnoZ8TFspHK1CCKgOoD5CSuySZYebOE83cAYwE5uNYmcxty5DMu2UANZZY+9HxQra9LURMr2B65kmAJjXMX+yGeTfoWdevLSZ20W1aTSTtiZwnnP+AyUvpADsjJ9a7a/YoToGksD0oLHR6J7Nr4Uppdjcpo2VtFN5os6DX6qFc6mie3CH95hWeOnavrArJDkcuxnMpKcq9xaLQaVxGmgzKwmUnUCQAQKkKZDbq8MT+yakhgJX4/Q7D53gB1Hcuoi9/QdDN0pA3pRW62TWs0mQHh13KUzet7Fy0DHQX5oJzwc8KrPwr4f9he45yhhrtoxiR547Q270rUeSDPcHzHbnJYRtFf7ECwyLdvHw3Awjr4GO18kk/eyCXcT1nQrUGlzYXJDfqfHmdcaSL8zDf08IntbxXnJlA7yIAvSaoktNrbEhs/AhAXQRyWCqgV1wBIQJyPSzymLmMorSOIIpPhoC3LROgka7uBpsLlX6vZYNGStEL9bW6/ROY/UrEgsCwRRHulhWVCQxgKuddtL8eDDcU1XnmWcqDIqPr5VjcFB7ny5UuilF3KAUMAgr2qwsgHN6x1be8sN9KTtmpb54tBZTn231cq62w0WkS8DSnGpwyT4OFu8wRShrvcAAzvTDPjAwQJuVaJ8CVYyH3QiUWtw81kXKyW5jWyVI36zWOoOZhDMJpjSt5RE0uQI0PNYEYd0GzousQ9mp3BAKjdj/B3a9YcNGMy688NYve8iFf9MbVLVmaXkqbhG+TEJCzGqvs9ljF6IqOmY1rlUQlHhygyFkcGPGP1J5DDSKl9Hlk9Cm4wsTNH+53yNA7eaLH8yP3Q9vxOd3vt07a1zeJt9Vym0CG/ULG/wzjATTGmPmYA3NVEgvjctdui1Bd/v1kn4LuxF/1wCVwzVHid36mQgd3r7/0QcKHImRK2V6omxXIQMdABrIYg7GJf8KDLBhBAN/5QcPf6EvEf/5/FgPXN9YqoU3sRgAAAABJRU5ErkJggg==",
//             },
//             "ad_set":{
//                 label: "utility:ad_set",
//                 svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0BAMAAAA3VgbYAAAAMFBMVEUAAABUaIxUaY5Uao1UaYxUaY1TaIxTZ45VaopVaYxUaY5UaY1UaYxVbI5VaY1UaY2m8tf8AAAAEHRSTlMAW9ro7P9HNBi7tPJtLdDMQD4tYAAAAHhJREFUeAFjGDRAyBgKFFHYIOAaCgUhKGwQCIUDZDZhqfRyICgDcuFsuFQDiOIAcuFsCqVmrQKClUAunI3HhcNBaiuMF43CBoHTMO4eFDYdAR5n4HE8RQF1owMIeoFcOJt2ie39fyD4B+TC2cM3seEpHPAVKYMFAAA+xvmx9kCnKgAAAABJRU5ErkJggg=="
//             },
//         ]
//     }
// }