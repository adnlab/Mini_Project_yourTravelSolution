function dropDown(){
    const contentNavigation = document.querySelectorAll('.hyperlink-content');

    if (document.querySelector('.content-navigation').querySelectorAll('a').length == 3){
        for (let navItem of contentNavigation){
            if (document.querySelector('.content-navigation').querySelectorAll('a').length == 0){
    
            } else {
                const elementNav = document.getElementsByTagName('nav')[0];
                const itemRow = document.createElement('div');
                itemRow.setAttribute('class', 'flex-container-row');
                itemRow.setAttribute('class', 'dropdown-content');
                elementNav.appendChild(itemRow).appendChild(navItem);
            }
        }
    } else if (document.querySelector('.content-navigation').querySelectorAll('a').length == 0) {
        const contentDropDown = document.querySelectorAll('.hyperlink-content');
        let i = 0
        while (i < contentDropDown.length) {
            document.querySelector('.content-navigation').querySelectorAll('li')[i].appendChild(contentDropDown[i]);
            i++;
        }
        const elementDropDownContent = document.querySelectorAll('.dropdown-content');
        for (item of elementDropDownContent){
            item.parentNode.removeChild(item);
        }
    }
}

function showDetails(e){
    const containerPopUp = document.getElementById('container-popup');
    const buttonClose = document.createElement('button');
    const articleContent = document.createElement('article');
    const imagePopUpCover = document.createElement('img');
    const contentText = document.createElement('p');
    const buttonOrder = document.createElement('button');

    buttonClose.setAttribute('class', 'button-close-popup');
    buttonClose.innerHTML = '&times;';

    articleContent.setAttribute('class', 'content-popup');

    imagePopUpCover.setAttribute('class', 'image-popup')

    contentText.setAttribute('class', 'text-popup');

    buttonOrder.setAttribute('class', 'button-order-popup');
    buttonOrder.innerHTML = 'Mulai Jelajahi';

    containerPopUp.appendChild(articleContent);
    containerPopUp.appendChild(articleContent).appendChild(buttonClose);
    containerPopUp.appendChild(articleContent).appendChild(imagePopUpCover);
    containerPopUp.appendChild(articleContent).appendChild(buttonOrder);

    if(e.currentTarget.innerText == 'Labuan Bajo'){
        imagePopUpCover.setAttribute('src', 'assets/image/img-dst-1.jpg');
        
        contentText.innerHTML = 'Labuan Bajo merupakan sebuah surga tersembunyi yang ada di Indonesia bagian timur. \
                                 Desa ini terletak di Kecamatan Komodo, Kabupaten Manggarai Barat, Provinsi Nusa Tenggara \
                                 Timur yang berbatasan langsung dengan Nusa Tenggara Barat dan dipisahkan oleh Selat Sape. \
                                 <br/><br/> Destinasi ini menyimpan keindahan alam yang menakjubkan dan hewan purba yang mendunia. \
                                 Mulai dari hewan endemik komodo di Taman Nasional Komodo, deretan pulau eksotis, keragaman \
                                 hayati bawah laut, hingga pantai aduhai, semua bisa Sobat Pesona temukan di Labuan Bajo. \
                                 <br/> <br/> Tekan tombol dibawah untuk memesan paket perjalanan';

        containerPopUp.appendChild(articleContent).insertBefore(contentText, document.getElementsByClassName('button-order-popup')[0]);

        buttonOrder.setAttribute('value', e.currentTarget.innerText);

    } else if (e.currentTarget.innerText == 'Raja Ampat') {
        imagePopUpCover.setAttribute('src', 'assets/image/img-dst-2.jpg');
        
        contentText.innerHTML = 'Raja Ampat, sebuah Kabupaten dan merupakan bagian dari Provinsi Papua Barat. \
                                 Suguhan alam yang ditawarkan begitu mengagumkan, hingga bisa membuat wisatawan enggan pulang.\
                                 Buat Kalian yang gemar diving dan snorkeling, wilayah perairan Raja Ampat adalah salah satu \
                                 destinasi diving terbaik di dunia. Beberapa spot menyelam terbaik dan paling terkenal di Raja Ampat \
                                 di antaranya  adalah Kabui Passage, di sekitar Dermaga Pulau Arborek, Sauwandarek, dan banyak lagi!\
                                 <br/><br/>Tak hanya keindahan bawah lautnya yang luar biasa, pemandangan di atas permukaan juga tak kalah memesona. Panorama deretan \
                                 pulau-pulau batu di tengah gradasi air biru terlihat begitu surgawi saat dilihat dari atas bukit. \
                                 <br/> <br/> Tekan tombol dibawah untuk memesan paket perjalanan';

        containerPopUp.appendChild(articleContent).insertBefore(contentText, document.getElementsByClassName('button-order-popup')[0]);

        buttonOrder.setAttribute('value', e.currentTarget.innerText);
        
    } else if (e.currentTarget.innerText == 'Yogyakarta') {
        imagePopUpCover.setAttribute('src', 'assets/image/img-dst-3.jpg');
        
        contentText.innerHTML = 'Kota ini adalah salah satu dari beberapa pusat kebudayaan di Indonesia. Setiap pengunjung bisa menjelajahinya \
                                 dengan berjalan-jalan di Museum Keraton (Istana Sultan), bercengkrama di Alun Alun Kota, melihat proses \
                                 pembuatan perhiasan di Kotagede, sampai berbelanja di Malioboro.\
                                 <br/><br/>Kalian dapat merasakan lima keajaiban di kota yang sangat "nyeni" ini. Mulai dari menikmati keajaiban alam \
                                 dengan mengunjungi pantai sampai berpetualang ke lanskap elok lainnya. Pantai Parangtritis, Indrayanti, \
                                 dan Jogan adalah beberapa pantai yang terkenal di kota ini.\
                                 <br/><br/>Untuk menikmati keajaiban kulinernya, jangan lupa untuk mencoba Gudeg, racikan istimewa dari resep tradisional\
                                 Jawa yang telah menjadi ciri khas kota ini.  Jangan lupa cicipi juga Bakpia, cemilan tradisional dengan banyak\
                                 rasa menarik yang populer sebagai cinderamata.\
                                 <br/> <br/> Tekan tombol dibawah untuk memesan paket perjalanan';

        containerPopUp.appendChild(articleContent).insertBefore(contentText, document.getElementsByClassName('button-order-popup')[0]);

        buttonOrder.setAttribute('value', e.currentTarget.innerText);
    } else if (e.currentTarget.innerText == 'Bandung') {
        imagePopUpCover.setAttribute('src', 'assets/image/img-dst-4.jpg');
        
        contentText.innerHTML = 'Bicara mengenai Bandung, belum lengkap rasanya kalau tidak membahas Kota Lembang. Iya, Lembang yang terletak\
                                 di bagian Bandung Barat ini menjadi salah satu tempat yang ramai oleh wisatawan. Kota Lembang menyimpan begitu\
                                 banyak pesona alam dan suasana menyenangkan yang sangat inspiratif terutama bagi para penggiat konten.\
                                 <br/><br/>Pada masa kolonial Belanda, di awal abad ke-20, Bandung adalah resor favorit pemilik teh dan kopi. Bandung\
                                 kemudian juga dijuluki "Parijs van Java" yang elegan, yang juga berarti Paris of Java. Dari sinilah maka siapapun\
                                 yang berkunjung masih bisa menikmati mahakarya bangunan Art Deco peninggalan kolonial Belanda\
                                 <br/><br/>Ada kata-kata indah yang bilang bahwa memang, "Pasundan (salah satu tanah Sunda di provinsi Jawa Barat) diciptakan \
                                 ketika Tuhan tersenyum", ujar MAW Brouwer, seorang psikolog dan penulis terkenal dari Belanda yang menghabiskan sebagian besar hidupnya di Bandung.\
                                 <br/> <br/> Tekan tombol dibawah untuk memesan paket perjalanan';

        containerPopUp.appendChild(articleContent).insertBefore(contentText, document.getElementsByClassName('button-order-popup')[0]);

        buttonOrder.setAttribute('value', e.currentTarget.innerText);
    }
    containerPopUp.style.display ='block';

    const toClose = document.querySelector('.button-close-popup');
    toClose.addEventListener('click', hideDetails);

    window.onclick = function(e) {
        if (e.target == containerPopUp) {
            hideDetails();
        }
    }
}

function hideDetails(e){
    const containerPopUp = document.getElementById('container-popup');
    const buttonClose = document.querySelector('.button-close-popup');
    const articleContent = document.querySelector('.content-popup');
    const imagePopUpCover = document.querySelector('.image-popup');
    const contentText = document.querySelector('.text-popup');
    const buttonOrder = document.querySelector('.button-order-popup');

    buttonClose.parentNode.removeChild(buttonClose);
    imagePopUpCover.parentNode.removeChild(imagePopUpCover);
    articleContent.parentNode.removeChild(articleContent);
    contentText.parentNode.removeChild(contentText);
    buttonOrder.parentNode.removeChild(buttonOrder);

    containerPopUp.style.display ='none';
}

const buttonDropdown = document.getElementsByClassName('button-dropdown')[0];
buttonDropdown.addEventListener('click', dropDown);

const buttons = document.getElementsByClassName('button-details');
for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', showDetails);
}

window.onresize = function() {
    if (document.querySelector('.content-navigation').querySelectorAll('a').length == 0) {
        const contentDropDown = document.querySelectorAll('.hyperlink-content');
        let i = 0
        while (i < contentDropDown.length) {
            document.querySelector('.content-navigation').querySelectorAll('li')[i].appendChild(contentDropDown[i]);
            i++;
        }
        const elementDropDownContent = document.querySelectorAll('.dropdown-content');
        for (item of elementDropDownContent){
            item.parentNode.removeChild(item);
        }
    }
}

let previousScrollPosition = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPosition = window.pageYOffset;
  if (previousScrollPosition > currentScrollPosition) {
    document.getElementsByTagName("nav")[0].style.top = '0';
  } else {
    document.getElementsByTagName("nav")[0].style.top = '-300px';
  }
  previousScrollPosition = currentScrollPosition;
}