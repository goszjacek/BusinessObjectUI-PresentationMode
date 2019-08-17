# Nowe wizytówki programu Profesal - Jacek Gosztyła - 2019-07-29
 

## Opis projektu

Wizytówki w programie na Profesal mają na celu w skomasowany i kompletny sposób prezentować dane obiektów programu Profesal, takich jak Pracownik, Firma, Projekt. 

Wizytówki zostały napisane w Sass, czyli preprocesorze języka CSS.

Do projektu został wykorzystany Bootstrap 4. 

## Struktura projektu

Folder scss:
-	style.scss – główny plik stylów. Importowany jest w nim Bootstrap 4 oraz wszystkie stworzone na potrzeby projektu style. Kolejność importowania jest istotna
-	Variables – wszystkie stałe używane w projekcie, takie jak kolory, rozmiary. 
-	Containers – klasy głównych kontenerów prezentowanych na stronach
    -	Rows – klasy wykorzystywane m. in. do stylizacji nagłówka obiektu
    -	Cards – stylizacja i mechanizm kart -> body oraz content
    -	Footer – stopka wizytówki
-	Components – wielorakie komponenty wykorzystywane wewnątrz wizytówki, w szczególności wewnątrz kontenerów. Posegregowane tematycznie. 
-	Maps
    - html-elements – style nadawane elementom `html`
    - component-styles - style nadawane różnym komponentom, które korzystają z różnych zmiennych z folderu variables. 

Folder libraries (biblioteki zewnętrzne używane w projekcie): 
- bootstrap
    - scss - bootstrap 4 source code
    - css - folder do którego kompilowane są pliki bootstrap, nigdzie nie używany. Teoretycznie można poprzedzić wszystkie pliki bootstrap `_`, wtedy nie będą obserwowane przez `watch sass`

Folder icons:
    - material-icons - ikony ze strony: https://material.io/resources/icons/?style=baseline . Wewnątrz tego folderu znajduje się także skrypt `background.py`. Możemy w nim podać kolor, na jaki chcemy pokolorować ikonki. Gdy go uruchomimy, wszystkie ikonki znajdujące się w tym samym folderze co skrypt, zostaną pokolorowane na dany kolor. Działa tylko z ikonami ze strony https://material.io/resources/icons/?style=baseline (format `.svg`).
    - profesal-icons - ikony używane do tej pory w Profesal, specyficzne dla ASTOR
    - other-icons - ikony z innych stron niż material-icons.

Folder css - do niego kompilowany jest kod scss, najważniejeszy jest plik `style.css`, który jest wyjściowym plikiem stylów używanym w wizytówkach profesal. 

toggle-cards.js - skrypt w JS, który, jeżeli dodasz go do wizytówki w html, symuluje zwijanie zwijanie componentów `card`

## Bootstrap 4 integration 

The project uses bootstrap 4 scss source code. In order to run project move bootstrap 4 "scss/" folder to 
"libraries/bootstrap/" folder. 
Bootstrap is imported in "scss/style.scss" file. This file is compiled to in "css/style.css" and than it can be used by the website. 

## Sassdoc

In order to replace normal comments `//` beginnings with sassdoc comments `///` beginnings use `(?<!/)//(?!/)` regex 

In order to install sassdoc run `npm install sassdoc -g`

In order to generate documentation run `sassdoc scss/` in terminal (path has to be the workspace folder). You can find the generated documentation in `sassdoc/index.html`

@author put in a normal comment, like `// @author John Smith`to prevent it from generating in every single item in the `sassdoc` documentation. 


## Rekomendowane środowisko pracy

Pliki polecam edytować w Visual Studio Code. 

Przydatne rozszerzenia: 
-	Live server – umożliwia śledzenie edytowanych plików online oraz automatycznie odświeżanie stron projektu, po wykonaniu zmiany w jakimkolwiek pliku. 
-	Live Sass Compiler – rozszerzenie oparte o Live Server, obserwuje wszystkie pliki o rozszerzeniu .sass i generuje odpowiednie pliki .css. Polecam dodać w ustawieniach rozszerzenia, aby pliki były generowane do oddzielnego folderu css. 
-   HTMLHint - Podrekreśla odpowiadające sobie tagi HTML.

Przydatne skróty (uruchmiane Ctrl+Shift+P):
-   Emmet: Balance (outward)
-   Emmet: Balance (inward)
-   Emmet: Wrap with abbreviation

## Użycie

Wykorzystanie elementów zaprojektowanych na potrzeby projektu jest silnie uzależnione od Bootstrap 4 Grid system. Projektując kolejne elementy szablonu należy pamiętać o tym, że powinny one zawsze znajdować się w jakimś kontenerze bootstrap, czy to row, czy też col. 

## Do poprawy

W wielu klasach, prawdopodobnie niepotrzebnie znajduje się atrybut `cursor: pointer // clickable`. Przydatny na potrzeby makiety, jednak jezeli okaże się, że wszystkie elementy używające taką klasę znajdują się już wewnątrz `<a>` który może dostarczać tą samą funkjonalność, należy ten atrybut usunąć. 

## Autorzy

Jestem Jacek Gosztyła. Jestem pierwszym autorem projektu. Pracowałem nad nim w trakcie mojego stażu w dziale IT ASTOR (czerwiec - lipiec 2019).
Kontakt: goszjacek@gmail.com
