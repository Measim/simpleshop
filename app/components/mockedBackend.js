var app = angular.module('myApp.mock', ['ngMockE2E']);

// define our fake backend
app.run(['$httpBackend','CONFIG', function($httpBackend, CONFIG) {

    var tabletItems = [
        {
            modelName:'Lenovo A7-30',
            id:1,
            img: CONFIG.BASE_IMG_URL + '1.jpg',
            description:'2G Tablet (8GB, WiFi, 2G, Voice Calling, A3300-GV), White',
            price:'246',
            quantity: 1
        },
        {
            modelName:'Dell Venue 7 3000',
            id:2,
            img: CONFIG.BASE_IMG_URL + '2.jpg',
            description:'16GB, WiFi, 3G, Voice calling, Black',
            price:'256',
            quantity: 1
        },
        {
            modelName:'Micromax Canvas Tab P470 ',
            id:3,
            img: CONFIG.BASE_IMG_URL + '3.jpg',
            description:'Tablet (WiFi, 3G, Voice Calling, Dual SIM), Grey',
            price:'354',
            quantity: 1
        },
        {
            modelName:'HP Slate 7 VoiceTab',
            id:4,
            img: CONFIG.BASE_IMG_URL + '4.jpg',
            description:'Tablet (16GB, WiFi, 3G, Voice Calling), Snow White',
            price:'433',
            quantity: 1
        },
        {
            modelName:'Datawind Ubislate 7CZ Tablet',
            id:5,
            img: CONFIG.BASE_IMG_URL + '5.jpg',
            description:'4GB, WiFi, 3G via Dongle, Voice calling',
            price:'265',
            quantity: 1
        },
        {
            modelName:'Acer Iconia A1-713',
            id:6,
            img: CONFIG.BASE_IMG_URL + '6.jpg',
            description:'Tablet (8GB, WiFi, 3G, Voice Calling), Black',
            price:'211',
            quantity: 1
        },
        {
            modelName:'iBall Performance Slide 3G 6095-D20 Tablet',
            id:7,
            img: CONFIG.BASE_IMG_URL + '7.jpg',
            description:'(8GB, WiFi, 3G, Voice Calling), White',
            price:'432',
            quantity: 1
        },
        {
            modelName:'Lenovo Tab 2 A7-30 Tablet',
            id:8,
            img: CONFIG.BASE_IMG_URL + '8.jpg',
            description:'WiFi, 3G, Voice Calling, 16GB), Ebony Black',
            price:'256',
            quantity: 1
        },
        {
            modelName:'Unbranded model',
            id:9,
            img: CONFIG.BASE_IMG_URL + '2.jpg',
            description:'16GB, WiFi, 3G, Voice calling, Black',
            price:'256',
            quantity: 1
        },
        {
            modelName:'Unbranded model',
            id:10,
            img: CONFIG.BASE_IMG_URL + '2.jpg',
            description:'16GB, WiFi, 3G, Voice calling, Black',
            price:'256',
            quantity: 1
        },
        {
            modelName:'Unbranded model',
            id:11,
            img: CONFIG.BASE_IMG_URL + '2.jpg',
            description:'16GB, WiFi, 3G, Voice calling, Black',
            price:'256',
            quantity: 1
        },
        {
            modelName:'Unbranded model',
            id:12,
            img: CONFIG.BASE_IMG_URL + '2.jpg',
            description:'16GB, WiFi, 3G, Voice calling, Black',
            price:'256',
            quantity: 1
        },
        {
            modelName:'Unbranded model',
            id:13,
            img: CONFIG.BASE_IMG_URL + '2.jpg',
            description:'16GB, WiFi, 3G, Voice calling, Black',
            price:'256',
            quantity: 1
        },
        {
            modelName:'Unbranded model',
            id:14,
            img: CONFIG.BASE_IMG_URL + '2.jpg',
            description:'16GB, WiFi, 3G, Voice calling, Black',
            price:'256',
            quantity: 1
        },
        {
            modelName:'Unbranded model',
            id:15,
            img: CONFIG.BASE_IMG_URL + '2.jpg',
            description:'16GB, WiFi, 3G, Voice calling, Black',
            price:'256',
            quantity: 1
        },
        {
            modelName:'Unbranded model',
            id:16,
            img: CONFIG.BASE_IMG_URL + '2.jpg',
            description:'16GB, WiFi, 3G, Voice calling, Black',
            price:'256',
            quantity: 1
        },
        {
            modelName:'Unbranded model',
            id:17,
            img: CONFIG.BASE_IMG_URL + '2.jpg',
            description:'16GB, WiFi, 3G, Voice calling, Black',
            price:'256',
            quantity: 1
        },
        {
            modelName:'Unbranded model',
            id:18,
            img: CONFIG.BASE_IMG_URL + '2.jpg',
            description:'16GB, WiFi, 3G, Voice calling, Black',
            price:'256',
            quantity: 1
        },
        {
            modelName:'Unbranded model',
            id:19,
            img: CONFIG.BASE_IMG_URL + '2.jpg',
            description:'16GB, WiFi, 3G, Voice calling, Black',
            price:'256',
            quantity: 1
        },
        {
            modelName:'Unbranded model',
            id:20,
            img: CONFIG.BASE_IMG_URL + '2.jpg',
            description:'16GB, WiFi, 3G, Voice calling, Black',
            price:'256',
            quantity: 1
        }
      ],
    notebooksItems = [
        {
            modelName: 'Lenovo A10',
            id: 21,
            img: CONFIG.BASE_IMG_URL + 'n1.jpg',
            description: '4Gb Ram Intel Graphics 1TbGb',
            price: '1246',
            quantity: 1
        },
        {
            modelName: 'Dell Inspirion 3000',
            id: 22,
            img: CONFIG.BASE_IMG_URL + 'n2.jpg',
            description: '16Gb Ram Intel Graphics 1TbGb',
            price: '1256',
            quantity: 1
        },
        {
            modelName: 'Asus LB-40H',
            id: 23,
            img: CONFIG.BASE_IMG_URL + 'n3.jpg',
            description: '8Gb Ram Nvidia Graphics 1TbGb',
            price: '1354',
            quantity: 1
        },
        {
            modelName: 'HP Pavilion',
            id: 24,
            img: CONFIG.BASE_IMG_URL + 'n4.jpg',
            description: '4Gb Ram Intel Graphics 1TbGb',
            price: '1433',
            quantity: 1
        },
        {
            modelName: 'Samsung 10l',
            id: 25,
            img: CONFIG.BASE_IMG_URL + 'n5.jpg',
            description:'4Gb Ram Intel Graphics 1TbGb',
            price:'1265',
            quantity: 1
        }
    ],
    homepageData = [
        {
            image: CONFIG.BASE_IMG_URL + 'main.jpg',
            text:'Simple shop'
        },
        {
            image: CONFIG.BASE_IMG_URL + 'main.jpg',
            text:'Simple steps'
        },
        {
            image: CONFIG.BASE_IMG_URL + 'main.jpg',
            text:'Fast shipping'
        }
    ];

  $httpBackend.whenGET(CONFIG.BASE_URL + '/get_tablets_catalog').respond(function(method, url, data) {
    return [200, tabletItems, {}];
  });

  $httpBackend.whenGET(CONFIG.BASE_URL + '/get_notebooks_catalog').respond(function(method, url, data) {
    return [200, notebooksItems, {}];
  });

  $httpBackend.whenGET(CONFIG.BASE_URL + '/homepage_data').respond(function(method, url, data) {
    return [200, homepageData, {}];
  });

  $httpBackend.whenGET(/^\w+.*/).passThrough();
  $httpBackend.whenGET(/components\/\w+.*/).passThrough();
}]);
