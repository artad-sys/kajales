const RESTAURANT_DATA = [
  {
    "id": 1793542500000,
    "name": "Sándor Étterem",
    "address": "8600 Siófok, Erkel Ferenc u. 30",
    "open": "11:00-21:00",
    "phone": "+36 84 312 829",
    "email": "sandrest@t-online.hu",
    "menu": ""
  },
  {
    "id": 1793542500001,
    "name": "Roxy Étterem",
    "address": "8600 Siófok, Fő tér 8",
    "open": "08:30-22:00",
    "phone": "+36 84 506 573",
    "email": "info@roxyetterem.hu",
    "menu": ""
  },
  {
    "id": 1793542500002,
    "name": "Bella Italia Étterem",
    "address": "8600 Siófok, Fő tér 4",
    "open": "10:00-19:00",
    "phone": "+36 30 851 0888",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500003,
    "name": "Vadásztanya Bisztró és Borozó",
    "address": "8600 Siófok, Vasúti u. 29",
    "open": "",
    "phone": "+36 84 352 547",
    "email": "vadasztanya.sosto@gmail.com",
    "menu": ""
  },
  {
    "id": 1793542500004,
    "name": "Café Maran",
    "address": "8600 Siófok, Petőfi sétány 38",
    "open": "",
    "phone": "+36 70 315 9227",
    "email": "hello@maran.hu",
    "menu": ""
  },
  {
    "id": 1793542500006,
    "name": "Tequila Taverna",
    "address": "8600 Siófok, Petőfi sétány 5",
    "open": "",
    "phone": "+36 20 435 7337; +36 20 228 8222",
    "email": "info@tequilataverna.hu",
    "menu": ""
  },
  {
    "id": 1793542500007,
    "name": "Ötösfogat Panzió és Étterem",
    "address": "8600 Siófok, Dózsa György u. 53",
    "open": "08:00-15:30",
    "phone": "+36 30 972 6034; +36 30 226 6653; +36 84 311 065",
    "email": "info@otosfogatpanzio.hu",
    "menu": ""
  },
  {
    "id": 1793542500008,
    "name": "Lokomotív Bistro Siófok",
    "address": "8600 Siófok, Vasútállomás, Millenium Park 1",
    "open": "07:00-18:00",
    "phone": "+36 70 630 4440",
    "email": "lokomotivbistro@gmail.hu",
    "menu": ""
  },
  {
    "id": 1793542500009,
    "name": "Park Hotel és Étterem",
    "address": "8600 Siófok, Batthyány Lajos u. 7",
    "open": "",
    "phone": "+36 84 310 539",
    "email": "info@parkhotel.hu",
    "menu": ""
  },
  {
    "id": 1793542500010,
    "name": "Pietro Bistro & Pizzéria",
    "address": "8600 Siófok, Fő u. 178",
    "open": "08:00-21:30",
    "phone": "+36 30 370 8360",
    "email": "info@pietropizzeria.hu",
    "menu": ""
  },
  {
    "id": 1793542500011,
    "name": "Diana Hotel és Étterem",
    "address": "8600 Siófok, Szent László u. 41-43",
    "open": "",
    "phone": "+36 84 315 296",
    "email": "recepcio@enternet.hu",
    "menu": ""
  },
  {
    "id": 1793542500012,
    "name": "János Vendéglő",
    "address": "8600 Siófok, Szent László u. 192/A",
    "open": "10:30-19:30",
    "phone": "+36 84 353 123",
    "email": "janosvendeglo@gmail.com",
    "menu": ""
  },
  {
    "id": 1793542500013,
    "name": "Amigó Étterem és Pizzéria",
    "address": "8600 Siófok, Fő u. 99",
    "open": "10:00-22:00",
    "phone": "+36 84 310 923; +36 30 520 6913",
    "email": "info@amigopizzeria.hu",
    "menu": ""
  },
  {
    "id": 1793542500014,
    "name": "ZORBA sparhelten sült juhtúrós lepény street food",
    "address": "8600 Siófok, Bajcsy-Zsilinszky u. 130",
    "open": "",
    "phone": "+36 20 295 8913",
    "email": "zorbavendeglatas@gmail.com",
    "menu": ""
  },
  {
    "id": 1793542500015,
    "name": "Piroska Csárda és Fogadó",
    "address": "8600 Siófok, Zamárdi u. 37",
    "open": "",
    "phone": "+36 30 615 2990",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500016,
    "name": "KisKert Vendéglő",
    "address": "8600 Siófok, Vécsey Károly u. 19",
    "open": "",
    "phone": "+36 84 350 439",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500017,
    "name": "Egy Csipet Nápoly Pizza & Brunch",
    "address": "8600 Siófok, Vécsey Károly u. 23",
    "open": "12:00-20:30",
    "phone": "+36 20 926 2424",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500018,
    "name": "Öreg Halász Vendéglő",
    "address": "8600 Siófok, Zamárdi u. 10",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500019,
    "name": "Opus Étterem - Hotel Azúr Prémium",
    "address": "8600 Siófok, Erkel Ferenc u. 2/C",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500020,
    "name": "Liliom Étterem - Hotel Sungarden",
    "address": "8600 Siófok, Batthyány u. 24",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500021,
    "name": "Mala Garden Étterem",
    "address": "8600 Siófok, Petőfi sétány 15/A",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500022,
    "name": "Éden Vegán és Mentes Étterem",
    "address": "8600 Siófok",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500023,
    "name": "Lavender Terasz Étterem",
    "address": "8600 Siófok",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500024,
    "name": "Kálmán Terasz Étterem",
    "address": "8600 Siófok",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500025,
    "name": "Egy Csipet Nádas",
    "address": "8600 Siófok",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500026,
    "name": "Rozmaring Kiskert Vendéglő és Pizzéria",
    "address": "8600 Siófok, Akácfa u. 53",
    "open": "12:00-21:00",
    "phone": "+36 30 694 0949",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500027,
    "name": "Sió Étterem és Halsütő",
    "address": "8600 Siófok, Vitorlás u. 1-3",
    "open": "11:00-21:00 / péntek-szombat 22:00",
    "phone": "+36 30 999 7996",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500028,
    "name": "NAMI Sushi & Wok Bár",
    "address": "8600 Siófok, Vitorlás u. 1-3",
    "open": "11:00-21:00",
    "phone": "+36 70 791 6990",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500029,
    "name": "Déli Part Woodfired BBQ",
    "address": "8600 Siófok, Vámház u. 2",
    "open": "Péntek-vasárnap 11:30-22:00",
    "phone": "+36 20 232 6445",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500030,
    "name": "Fehér ló Pub & Steak House",
    "address": "8600 Siófok, Erkel Ferenc u. 7",
    "open": "",
    "phone": "+36 84 310 274",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500031,
    "name": "Boomeráng Étterem, Söröző",
    "address": "8600 Siófok, Koch Róbert u. 7",
    "open": "H-P 11:00-14:30",
    "phone": "+36 84 312 470",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500032,
    "name": "Territórium Siófok",
    "address": "8600 Siófok, Szűcs u. 5",
    "open": "Sze-Cs 11:00-21:00; V 11:00-19:00",
    "phone": "+36 30 751 7471",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500033,
    "name": "Pizza Buster's",
    "address": "8600 Siófok, Zákonyi Ferenc köz",
    "open": "11:00-23:00",
    "phone": "+36 70 622 2121",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500034,
    "name": "Kornélia Cukrászda-Pizzéria",
    "address": "8600 Siófok, Estike u. 16/A",
    "open": "10:00-22:00",
    "phone": "+36 84 314 793",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500035,
    "name": "Petrus Étterem",
    "address": "8600 Siófok, Október 23. u. 2",
    "open": "12:00-17:00",
    "phone": "+36 20 943 3482",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500036,
    "name": "PiazzAttila",
    "address": "8600 Siófok, Pusztatorony tér 1",
    "open": "12:00-22:00",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500037,
    "name": "Matsh Point teniszklub és étterem",
    "address": "8600 Siófok, Sóstó, Bél Mátyás u. 33",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500038,
    "name": "Krisztina Panzió és Étterem",
    "address": "8600 Siófok, Szent László u. 196",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500039,
    "name": "Margó Étkezdéje",
    "address": "8600 Siófok, Új-Piac tér 7",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500040,
    "name": "Zsilip Étterem",
    "address": "8600 Siófok, Fő u. 162",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500041,
    "name": "Piazza Pizzeria Sóstó",
    "address": "8600 Siófok, Pusztatorony tér 4",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500043,
    "name": "Pasty House",
    "address": "8600 Siófok, Fő u. 107",
    "open": "",
    "phone": "",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500044,
    "name": "Pizza Pescara",
    "address": "8600 Siófok, Jókai Mór u.",
    "open": "11:00-22:00",
    "phone": "+36 30 612 5718",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500046,
    "name": "Ramirez étterem",
    "address": "8600 Siófok, Mártírok útja 15",
    "open": "",
    "phone": "+36 84 503 333",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500047,
    "name": "Mustafa étterem és pizzéria",
    "address": "8600 Siófok, Mártírok útja 9",
    "open": "",
    "phone": "+36 70 943 8078",
    "email": "mustafagyros@gmail.com",
    "menu": ""
  },
  {
    "id": 1793542500049,
    "name": "Sanyi Sarok",
    "address": "8600 Siófok Szabadifürdő, Posta utca 2",
    "open": "",
    "phone": "+36 30 541 0113",
    "email": "info@sanyisarok",
    "menu": ""
  },
  {
    "id": 1793542500048,
    "name": "Cseles Csibe",
    "address": "8600 Siófok, Kinizsi Pál utca 11",
    "open": "",
    "phone": "+36 70 559 2517",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500050,
    "name": "Street Mix Kitchen",
    "address": "8600 Siófok, Fő utca 234",
    "open": "",
    "phone": "+36 30 091 4700",
    "email": "riti9173@gmail.com",
    "menu": ""
  },
  {
    "id": 1793542500051,
    "name": "Kornélia cukrászda és pizzéria",
    "address": "8600 Siófok, Estike utca 16/a",
    "open": "",
    "phone": "+36 20 479 67 45",
    "email": "korneliasiofokgmail.com",
    "menu": ""
  },
  {
    "id": 1793542500052,
    "name": "Charley Bisztró",
    "address": "8600 Siófok, Fő utca 47-53",
    "open": "",
    "phone": "+36 30 70 333 00",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500053,
    "name": "Boglya Kitchen",
    "address": "8651 Balatonszabadi, Szabadság u. 79",
    "open": "",
    "phone": "+36 70 321 8062",
    "email": "boglyamenu@gmail.com",
    "menu": ""
  },
  {
    "id": 1793542500054,
    "name": "Urban Döner",
    "address": "8600 Siófok, Szűcs utca 5",
    "open": "",
    "phone": "+36 30 597 9684",
    "email": "",
    "menu": ""
  },
  {
    "id": 1793542500055,
    "name": "Penthouse Bar&Pub",
    "address": "8600 Siófok, Fő tér 6",
    "open": "",
    "phone": "+36 70 633 2235",
    "email": "siopenthouse22@gmail.com",
    "menu": ""
  },
   {
    "id": 1793542500056,
    "name": "Cafe Spirit",
    "address": "8600 Siófok, Fő utca 254/d",
    "open": "",
    "phone": "+36 20 278 0844",
    "email": "info@cafespirit.hu",
    "menu": ""
  }
];
