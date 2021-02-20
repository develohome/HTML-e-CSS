var user = {
    nome: 'Alex dos santos',
    funcao: "desenvolvedor front-end",
    texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat tenetur alias aut ratione sapiente excepturi eveniet. A harum maxime reprehenderit hic quas repellendus optio praesentium, quae deleniti corrupti vitae saepe.'
}
var list_menu = ['inicio', 'sobre', 'contato'];
var divsMain = ['capa', 'descricao'];

var container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
//============================================================

    container = document.querySelector('.container');

//============================================================

    header = document.createElement('header');
    main = document.createElement('main');
    footer = document.createElement('footer');

//============================================================

    header.classList.add('header');
    main.classList.add('main');
    footer.classList.add('footer');
    
//============================================================

    container.appendChild(header);
    container.appendChild(main);
    container.appendChild(footer);

//============================================================    

const class_header = document.querySelector('.header');
const class_main = document.querySelector('.main');
const class_footer = document.querySelector('.footer');

//============================================================

//---------------------------- HEADER ------------------------
    //-------------------------- logo ------------------------

        let logo = document.createElement('div');
            logo.classList.add('logo');
            class_header.appendChild(logo);

        let logo_class = document.querySelector('.logo');
        let h1_logo = document.createElement('h1');
            logo_class.appendChild(h1_logo);

        let desc_logo = document.querySelector('.logo h1');
        let h1_a = document.createElement('a');
            h1_a.innerHTML = '{ desenvolvedor }';
            desc_logo.appendChild(h1_a);

    //--------------------------------------------------------
    
    //-------------------------- menu ------------------------

       
        let menu = document.createElement('div');
            menu.classList.add('menu');
            class_header.appendChild(menu);

        //------------------ Elemento nav

        let menu_class = document.querySelector('.menu'); 
        let el_nav = document.createElement('nav');
            menu_class.appendChild(el_nav);

        //------------------ Elemento ul

        let elemento_nav = document.querySelector('.menu nav');
        let el_ul = document.createElement('ul');
            elemento_nav.appendChild(el_ul)

        //------------------ Elemento li

        var elemento_ul = document.querySelector('.menu ul');
        for(let i = 0; i < list_menu.length;i++){
            let el_li = document.createElement('li');
            elemento_ul.appendChild(el_li);
        }

        //------------------ Elemento
        
        var elemento_li = document.querySelectorAll('.menu ul li');
        for(let i = 0; i < elemento_li.length;i++){
            let el_a = document.createElement('a');
            el_a.innerHTML = list_menu[i]
            elemento_li[i].appendChild(el_a);
        }

//============================================================

//----------------------------- MAIN -------------------------
        for(let i = 0; i<2;i++){
            let el_span_main = document.createElement('span');
            class_main.appendChild(el_span_main);
        }
        
        let class_slider = document.createElement('div');
            class_slider.classList.add('slide--width');
            class_main.appendChild(class_slider);
        let divs_slide = document.querySelector('.slide--width')
        for(let i = 0 ; i < list_menu.length ; i++){
            el_slide = document.createElement('div')
            el_slide.classList.add(list_menu[i])
            divs_slide.appendChild(el_slide)
        }
        
        let slider_width = document.querySelector(`.${list_menu[0]}`);
        for(let i = 0; i< divsMain.length;i++){
            el_div_main = document.createElement('div');
            el_div_main.classList.add(divsMain[i]);
            slider_width.appendChild(el_div_main);
        }
    //------------------------- capa
        let campos_capa = ['photo_capa', 'desc_capa', 'social_capa' ]
        let div_capa = document.querySelector('.capa')
        for(let i = 0; i< campos_capa.length;i++){
           let el_capa = document.createElement('div');
            el_capa.classList.add(campos_capa[i])
            div_capa.appendChild(el_capa)
        }
    //------------------------- capa photo

        let photo_capa = document.querySelector('.photo_capa');
            div_photo = document.createElement('i');
            div_photo.classList.add('fa');
            div_photo.classList.add('fa-user-circle')
            photo_capa.appendChild(div_photo);
            div_photo = document.createElement('h2');
            div_photo.innerHTML = user.nome;
            photo_capa.appendChild(div_photo);

    //------------------------ capa desc

        let desc_capa = document.querySelector('.desc_capa');
        let el_desc_capa_p = document.createElement('p');
            el_desc_capa_p.innerHTML = user.texto;
            desc_capa.appendChild(el_desc_capa_p)
    //------------------------ capa social
        //-------------------- icons
        var iconsSocial =['fa-facebook', 'fa-instagram', 'fa-github','fa-twitter'];

        let social_capa = document.querySelector('.social_capa');
        for(let i = 0; i< iconsSocial.length;i++){
            let el_i_social = document.createElement('i');
                el_i_social.classList.add('fa');
                el_i_social.classList.add(iconsSocial[i]);
                social_capa.appendChild(el_i_social);
        }
    //---------------------- Descricao

        let descricao = document.querySelector('.descricao');
        let el_descricao_h1 = document.createElement('h1');
            el_descricao_h1.innerHTML = user.funcao;
            descricao.appendChild(el_descricao_h1);

        let  el_descricao_p = document.createElement('p');
            el_descricao_p.innerHTML = user.texto;
            descricao.appendChild(el_descricao_p)
        
//============================================================
        // let sobre =  document.querySelector(`.${list_menu[1]}`);
        // let sobre_h2 = document.createElement('h2')
        //     sobre_h2.innerHTML = list_menu[1]
        //     sobre.appendChild(sobre_h2)


        // let contato =  document.querySelector(`.${list_menu[2]}`);
        // let contato_h2 = document.createElement('h2')
        //     contato_h2.innerHTML = list_menu[2]
        //     contato.appendChild(contato_h2)
//----------------------------- FOOTER -----------------------

        let hoje = new Date();
        let ano = hoje.getFullYear()
            el_p = document.createElement('p');
            el_p.innerHTML = `Todos os direitos&copy; - ${ano}`
            class_footer.appendChild(el_p);


            //============================================================

// ===================================== funções

            function escrever(elemento){
                const textoArray = elemento.innerHTML.split('');
                elemento.innerHTML = '';
                textoArray.forEach((letra, i) => {
                    setTimeout(() => {
                        elemento.innerHTML += letra;
                    }, 175 * i)
                });
            }
            const titulo = document.querySelector('.descricao h1');
            
            setTimeout(acionaMsg,1600);
            function acionaMsg(){
                escrever(titulo)
            }
            
                divs_slide.style.width = parseInt(list_menu.length) * 100 

                var links_menu =  document.querySelectorAll('.menu a');
                for(let i = 0;i < links_menu.length ; i++){
                    links_menu[i].addEventListener('click', function(){
                        divs_slide.style.marginLeft = -(i*100) + "%"
                    });
                }
            