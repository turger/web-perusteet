# Web-ohjelmoinnin perusteet 🎀
Kodarit 2 -tason web-devaus-harjoitus.  
Html + css + javascript.

Lopputuloksena yksinkertainen nettisivu.

## Oppitunnit
Jos pitää jakaa jokin urli tai muu kurja copypastettava, niin voidaan perustaa kertakäyttöinen chat oppitunnin ajaksi käyttämällä esim. http://disposablechat.com tai jakaa koodia pastebinilla https://pastebin.com.

⚠️ Huom! Tämän repon commitit on pilkottu pieniin osiin järjestyksessä, jota voi seurata oppitunneilla.

### 1. Web-ohjelmointiin tutustuminen
##### Uutissivun muokkaaminen developer consolella
Käydään ennen harjoitusta läpi mitä on HTML, CSS ja JavaScript. Kurkataan jonkun sivun lähdekoodia.
Avaa Chrome-selain ja developer console Ctrl+Shift+J (Windows) tai Ctrl+Option+J (Mac).
##### HTML-tagit
Käytä `Pick element from the page` ja pyydä oppilaita etsimään HTML-tageja sivulta. Listataan ylös ja käydään läpi mitä ne ovat.
##### CSS-tyylien muokkaaminen
Avaa Chromella Elements panel. Klikkaa hiiren oikealla elementtiä ja valitse `Inspect`. Tai paina Control+Shift+C (Windows) tai Command+Option+C (Mac).
Muokataan värejä, otsikoiden kokoja ym.
CSS colors: https://www.w3schools.com/cssref/css_colors.asp

### 2. Web-sivu
Mene ositteeseen repl.it ja luo uusi repl `HTML, CSS, JS`. Repl.it luo valmiin pohjan web-sivulle: index.html valmiilla rungolla ja tyhjät tiedostot script.js ja style.css.   
Tämän voi tehdä myös ilman repl.ittiä esimerkiksi Atomilla.

- Lisää otsikoita, tekstiä, lista ja linkki.
- Lisää video youtubesta, klikkaa videota hiiren oikealla ja `copy embed code`. Tai giphystä samanlainen embed-code.
- Lisää kuva esim. Googlesta, klikkaa valitsemaasi kuvaa, sen jälkeen klikkaa isommasta aukeavasta kuvasta hiiren oikealla `open image in new tab` ja kopioi url.

### 3. CSS
Lisää css-muotoilut sivulle.
Lisää otsikolle joku kiva fontti Google fontseista https://fonts.google.com/ (mutta ei käytetä fontin valintaan liikaa aikaa). Lisätään ohjeiden mukaan fontin import-rivi index.html-tiedostoon <head> tagin sisään.

### 4. Javascript
Tehdään nappi, jota painamalla sen väri vaihtuu. Sen jälkeen tehdään väristä random. Lisätään myös jotain hienoa CSS-muotoilua ja voidaan toteuttaa oppilaiden CSS-unelmia.

### 5. Responsiivisuus
Web-sivun responsiivisuus tarkoittaa sitä että sivu näyttää hyvältä joka laitteella, riippumatta sen näytön koosta. Tämä toteutetaan HTML:llä ja CSS:llä.  
Lisää: https://www.w3schools.com/css/css_rwd_intro.asp

Repl.itin valmis pohja on lisännyt jo tämälaisen responsiivisuutta auttavan rivin index.html-tiedostoon (lisää scale myös):  
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`  
Tämä rivi antaa selaimelle ohjeet sivun mittasuhteiden ja skaalauksen hallintaan.
Viewport eli näkymä on käyttäjälle näkyvä verkkosivun alue.

Lisäksi voidaan vaihtaa jotain absoluuttisia pikseli eli `px` kokoyksiköitä css-tiedostoista relatiivisiksi `vh` ja `vw` -yksiköiksi.  
Moar: https://www.w3schools.com/cssref/css_units.asp

Testatkaa responsiivisuutta Chrome-selaimella. Control+Shift+C (Windows) tai Command+Option+C (Mac). Paina developer consolen vasemmasta yläkulmasta nappulaa `toggle device toolbar   ja muuttakaa näkyvän sivun kokoa.

@media-querylla voi määritellä erilaisia tyylejä eri kokoisille puhelimen näytöille.
