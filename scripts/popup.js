let wp1 = document.getElementById('work__pict1'),
    wp2 = document.getElementById('work__pict2'),
    wp3 = document.getElementById('work__pict3'),
    wp4 = document.getElementById('work__pict4'),
    wp5 = document.getElementById('work__pict5'),
    wp6 = document.getElementById('work__pict6'),
    pUp = document.getElementById('popup__div');

    function addImgPup(){
        let img = document.createElement('img');
        pUp.classList.remove("hidden");
        pUp.appendChild(img);
        img.style.width='40%';
        img.style.marginTop="3%";
        return img;
    }

    function openWp1(){
        addImgPup().setAttribute('src', '/img/1.png');
    };
    function openWp2(){
        addImgPup().setAttribute('src', '/img/2.png');
    };
    function openWp3(){
        addImgPup().setAttribute('src', '/img/3.png');
    };
    function openWp4(){
        addImgPup().setAttribute('src', '/img/4.png');
    };
    function openWp5(){
        addImgPup().setAttribute('src', '/img/5.png');
    };
    function openWp6(){
        addImgPup().setAttribute('src', '/img/6.png');
    };


    function closePup(){
        document.querySelector("#popup__div > img").remove();
        pUp.classList.add("hidden");
    }
