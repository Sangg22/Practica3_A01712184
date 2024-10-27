const personajes = [
    {
        nombre: "Cypher",
        imagen: "https://img.redbull.com/images/c_crop,x_277,y_0,h_675,w_506/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/11/13/zkqytybgua4vm8lwe5md/cypher-valorant"
    },
    {
        nombre: "Jett",
        imagen: "https://img.redbull.com/images/c_crop,x_231,y_0,h_675,w_506/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/9/28/wgotviw3gjqzyj2u6ql2/jett-valorant"
    },
    {
        nombre: "Phoenix",
        imagen: "https://assetsio.gnwcdn.com/valorant-phoenix-press-picture---dark-scaled-(1).jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    },
    {
        nombre: "Sova",
        imagen: "https://img.redbull.com/images/c_crop,x_739,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/4/14/lyuguphp3zyhcxdvyfat/valorant-sova"
    },
    {
        nombre: "Sage",
        imagen: "https://www.egames.news/img/2021/03/06/quxen_es_sage_y_por_qux_es_tan_popular_dentro_de_valorant.png?__scale=w:1200,h:1200,t:2"
    },
    {
        nombre: "Brimstone",
        imagen: "https://www.zleague.gg/theportal/wp-content/uploads/2023/04/Valorant-Brimstone-title-card-aspect-ratio-2-1.jpg"
    },
    {
        nombre: "Viper",
        imagen: "https://img.redbull.com/images/c_crop,x_1057,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/5/31/zxwpi7hkm1up0nd0p8lg/valorant-agent-viper"
    },
    {
        nombre: "Omen",
        imagen: "https://img.redbull.com/images/c_crop,x_260,y_0,h_675,w_506/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2022/12/28/r4mgsw6smbegnyyacryr/omen-valorant"
    },
    {
        nombre: "Reyna",
        imagen: "https://img.redbull.com/images/c_crop,x_1151,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/6/3/ypiocflf3wcbeeyjyi5x/valorant"
    },
    {
        nombre: "Killjoy",
        imagen: "https://img.redbull.com/images/c_crop,x_246,y_0,h_720,w_540/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/10/30/yrn6erzpnmlqnosjeaws/valorant-operator-killjoy"
    },
    {
        nombre: "Raze",
        imagen: "https://img.redbull.com/images/c_crop,x_535,y_0,h_973,w_730/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/4/15/ybllzd5vwdfnll6jgbzp/valorant-raze"
    },
    {
        nombre: "Breach",
        imagen: "https://img.redbull.com/images/c_crop,x_223,y_0,h_563,w_423/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/10/30/odxgos7ooyc39zura8wn/valorant-operator-breach"
    },
    {
        nombre: "Skye",
        imagen: "https://img.redbull.com/images/c_crop,x_515,y_0,h_1080,w_810/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/11/13/tfoa3mi8rg3edw70fuip/valorant-skye"
    },
    {
        nombre: "Yoru",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbP3pfYXdrecj5l519nFAwKNM51p6EZ3K5Yg&s"
    },
    {
        nombre: "Astra",
        imagen: "https://img.redbull.com/images/c_crop,x_317,y_0,h_1080,w_810/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/3/25/wk6ik95vzmxyagx9md8e/valorant-agent-astra"
    },
    {
        nombre: "KAY/O",
        imagen: "https://img.redbull.com/images/c_crop,x_872,y_0,h_1440,w_1080/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/8/4/xgzweytv8axuwfuqmltt/kay-o-valorant"
    },
    {
        nombre: "Chamber",
        imagen: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2022/6/23/amyfccnxh273aiuokpjy/chamber-valorant"
    },
    {
        nombre: "Neon",
        imagen: "https://img.redbull.com/images/c_crop,x_264,y_0,h_546,w_409/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2022/10/31/yy1oarooqat7lunsjw5r/valorant-neon"
    },
    {
        nombre: "Fade",
        imagen: "https://img.redbull.com/images/c_crop,x_144,y_0,h_1000,w_750/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2022/12/21/ztwjghliscqjl4m3nfrc/fade-valorant"
    },
    {
        nombre: "Harbor",
        imagen: "https://img.redbull.com/images/c_crop,x_336,y_0,h_570,w_428/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2023/1/24/ngljfqaupmiywuqas5tl/harbor-valorant"
    },
    {
        nombre: "Gekko",
        imagen: "https://img.redbull.com/images/c_crop,x_766,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2023/8/28/q7vtjjsu7zmkitqs544f/gekko-valorant"
    }
];

let indiceActual = 0;

function mostrarPersonaje(){
    const personaje = personajes[indiceActual];
    document.getElementById("nombre").innerText = personaje.nombre;
    document.getElementById("imagen").src = personaje.imagen;
}

function siguiente(){
    indiceActual =  (indiceActual + 1) % personajes.length;
    mostrarPersonaje();
}

function anterior(){
    indiceActual =  (indiceActual - 1 + personajes.length) % personajes.length;
    mostrarPersonaje();
}

mostrarPersonaje();
