var user = [
        {
            nome: 'alex dos santos silva',
            funcao: 'desenvolvedor front-end',
            texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam nemo voluptate earum reiciendis adipisci ipsum maxime harum ducimus? Ipsum sint, voluptatem nemo hic harum libero at facilis quis sit!'
        }
]
var lista_menu = ['inicio', 'sobre','contato'];
var name_logo = "{ desenvolvedor}"
var icons = ['fa-user-circle', 'fa-facebook', 'fa-github', 'fa-twitter', 'fa-linkedin', 'fa-instagram']
//=========================================== container

let container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

//=========================================== header

const class_container = document.querySelector('.container');
let el_header = document.createElement('header');
    el_header.classList.add('header');
    class_container.appendChild(el_header);

    //--------------------------------------- logo

    const class_header = document.querySelector('.header');

    let el_logo = document.createElement('div');
        el_logo.classList.add('logo');
        class_header.appendChild(el_logo);
    //--------------------------------------------------------------
    let class_logo = document.querySelector('.logo');
    let el_logo_h1 = document.createElement('h1');
        class_logo.appendChild(el_logo_h1);
    //--------------------------------------------------------------
    let elemento_logo_h1 = document.querySelector('.logo h1');
    let el_h1_a = document.createElement('a');
        el_h1_a.innerHTML = name_logo;
        elemento_logo_h1.appendChild(el_h1_a);

    //------------------------------------------- menu
          
    let el_menu = document.createElement('div');
        el_menu.classList.add('menu');
        class_header.appendChild(el_menu)

    let class_menu = document.querySelector('.menu');
    let el_nav = document.createElement('nav');
        el_nav.classList.add('nav');
        class_menu.appendChild(el_nav);

    let class_nav = document.querySelector('.nav');
    let el_nav_ul = document.createElement('ul');
        class_nav.appendChild(el_nav_ul);

    var class_menu_ul = document.querySelector('.menu nav ul');
        for(let i = 0; i < lista_menu.length ; i++){
            let el_menu_ul_li = document.createElement('li');
            class_menu_ul.appendChild(el_menu_ul_li);
        }
    
    var elemento_menu_ul_li = document.querySelectorAll('.menu nav ul li');
    for(let i = 0; i < lista_menu.length ; i++){
        let el_menu_ul_li_a = document.createElement('a')
            el_menu_ul_li_a.innerHTML = lista_menu[i]
            elemento_menu_ul_li[i].appendChild(el_menu_ul_li_a)
    }

//==================================================== main

    const main = document.createElement('main');
          main.classList.add('main')
          class_container.appendChild(main);

    let main_width = document.createElement('div');
        main_width.classList.add('main_width');
        main.appendChild(main_width);
    document.querySelector('.main_width').style.width = parseInt(lista_menu.length)*100+"%";

    var class_main_width = document.querySelector('.main_width');
    for(let i = 0; i < lista_menu.length;i++){
        let el_divs_main = document.createElement('div');
            el_divs_main.classList.add(lista_menu[i]);
            class_main_width.appendChild(el_divs_main);
        let elemento_divs_main = document.querySelector("."+lista_menu[i]);
            elemento_divs_main.style.width = "100%";
            elemento_divs_main.style.height= "inherit";
    }
    var links_menu = document.querySelectorAll(".menu li a");
    for(let i = 0 ; i < lista_menu.length ;i++){
        links_menu[i].addEventListener('click', function(){
            class_main_width.style.marginLeft = -(i*100)+"%"
        });
    }

    const inicio = document.querySelector('.inicio');
    let capa_main = document.createElement('div');
        capa_main.classList.add('capa_main');
        inicio.appendChild(capa_main)

    let capa_principal = document.querySelector('.capa_main')
    let capa = document.createElement('div');
        capa.classList.add('capa');
        capa_principal.appendChild(capa);

    let class_capa = document.querySelector('.capa')
    for(let i = 0 ; i < lista_menu.length ;i++){
        let capa_divs = document.createElement('div');
        capa_divs.classList.add('capa_bx');
        class_capa.appendChild(capa_divs);
    }
    
    let class_capa_bx = document.querySelectorAll('.capa_bx');

        el_capa_bx1 = document.createElement('i');
        el_capa_bx1.classList.add('fa') 
        el_capa_bx1.classList.add(icons[0])       
        class_capa_bx[0].appendChild(el_capa_bx1)
        el_capa_h2 =  document.createElement('h2');
        el_capa_h2.innerHTML = user[0].nome
        class_capa_bx[0].appendChild(el_capa_h2)
    
        el_capa_p =  document.createElement('p');
        el_capa_p.innerHTML = user[0].texto
        class_capa_bx[1].appendChild(el_capa_p)

        for(let i = 1; i< icons.length ;i++){
            let el_capa_bx3 = document.createElement('i');
                el_capa_bx3.classList.add('fa') 
                el_capa_bx3.classList.add(icons[i])       
                class_capa_bx[2].appendChild(el_capa_bx3)
        }



    let el_inicio_direito = document.createElement('div');
        el_inicio_direito.classList.add('inicio_direito');
        inicio.appendChild(el_inicio_direito);

    let class_inicio_direito = document.querySelector('.inicio_direito');
        elemento_main_direito = document.createElement('div');
        elemento_main_direito.classList.add('main_direito');
        class_inicio_direito.appendChild(elemento_main_direito)
//==================================================== footer
    var hoje = new Date();
    let ano = hoje.getFullYear()
    let class_footer = document.createElement('footer');
        class_footer.classList.add('footer');
        class_footer.innerHTML = `<p>Todos os direito &copy;${ano}</p>`
        container.appendChild(class_footer);

    

