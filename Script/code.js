function solve(){

    document.getElementById("countryChange").addEventListener('click',function(){
        let c1 = document.getElementById("country1").value;
        let c2 = document.getElementById("country2").value;


        if(c1 != "--Родина--" && c2 != "--Дестинация--"){
        document.getElementById("country2").value = c1;
        document.getElementById("country1").value = c2;
        }
    });

    document.getElementById("clickMe").addEventListener('click',function(){
        let c1 = document.getElementById("country1").value;
        let c2 = document.getElementById("country2").value;

        //Invalid
        if(c1 === "--Родина--" || c2 === "--Дестинация--"){
            document.getElementById("invalid").innerHTML = "Въведете валидни държави!";
        }

        //Invalid2
        if(c1 == c2){
            document.getElementById("invalid").innerHTML = "Въведете различни държави!";
        }

        //Valid
        if((c1 != "--Родина--" && c2 != "--Дестинация--") && c1 !== c2){
            document.getElementById("invalid").innerHTML = "";
            location.href = "#searchDiv";
        }

        //Bulgaria
        //Bulgaria -> India
        if(c1 === "България" && c2 === "Индия"){
            document.getElementById("parVisa").innerHTML = " eVisa (за 60 дни). <br> Цена: около 150лв (87$).";
            document.getElementById("parVaccine").innerHTML = "Хепатит А, коремен тиф, менингококова инфекция, бяс и холера. <br><br> *Този списък не включва задължителни ваксини за България!";
        }

        //Bulgaria -> North Macedonia
        if(c1 === "България" && c2 === "Северна Македония"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 90 дни).";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за България!";
        }

        //Bulgaria -> Greece
        if(c1 === "България" && c2 === "Гърция"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза.";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за България!";
        }

        //Bulgaria -> Thailand
        if(c1 === "България" && c2 === "Тайланд"){
            document.getElementById("parVisa").innerHTML = "eVisa / виза от граничен пункт (за 15 дни). <br> Цена: около 34лв (20$). <br> *Препоръчваме eVisa. На граничен пунк цените може да са до 140лв (80$).";
            document.getElementById("parVaccine").innerHTML = "Хепатит А, коремен тиф, менингококова инфекция и бяс. <br><br> *Този списък не включва задължителни ваксини за България!";
        }

        //Bulgaria -> Indonesia
        if(c1 === "България" && c2 === "Индонезия"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 30 дни).";
            document.getElementById("parVaccine").innerHTML = "Хепатит А, коремен тиф, менингококова инфекция и бяс. <br><br> *Този списък не включва задължителни ваксини за България!";
        }

        //Bulgaria -> the USA
        if(c1 === "България" && c2 === "САЩ"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете:  bg.usembassy.gov/visas";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за България!";
        }

        //USA
        //the USA -> Bulgaria
        if(c1 === "САЩ" && c2 === "България"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 90 дни).";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br> *Препоръчва се бяс и менингококова инфекция.<br> *Този списък не включва задължителни ваксини за САЩ!";
        }

        //the USA -> Greece
        if(c1 === "САЩ" && c2 === "Гърция"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 90 дни).";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br> *Препоръчва се бяс и менингококова инфекция.<br> *Този списък не включва задължителни ваксини за САЩ!";
        }

        //the USA -> North Macedonia
        if(c1 === "САЩ" && c2 === "Северна Македония"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 90 дни).";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br> *Препоръчва се бяс и менингококова инфекция.<br> *Този списък не включва задължителни ваксини за САЩ!";
        }

        //the USA -> India
        if(c1 === "САЩ" && c2 === "Индия"){
            document.getElementById("parVisa").innerHTML = "eVisa (за 60 дни). <br> Цена: около 182лв (105$).";
            document.getElementById("parVaccine").innerHTML = "Бяс, менингококова инфекция, коремен тиф и холера. <br> *Препоръчват се хапчета против малария. <br> *Този списък не включва задължителни ваксини за САЩ!";
        }

        //the USA -> Indonesia
        if(c1 === "САЩ" && c2 === "Индонезия"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 30 дни).";
            document.getElementById("parVaccine").innerHTML = "Бяс, менингококова инфекция и коремен тиф. <br> *Препоръчват се хапчета против малария. <br> *Този списък не включва задължителни ваксини за САЩ!";
        }

        //the USA -> Thailand
        if(c1 === "САЩ" && c2 === "Тайланд"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 30 дни).";
            document.getElementById("parVaccine").innerHTML = "Бяс, менингококова инфекция и коремен тиф. <br> *Препоръчват се хапчета против малария. <br> *Този списък не включва задължителни ваксини за САЩ!";
        }

        //Greece
        //Greece -> India
        if(c1 === "Гърция" && c2 === "Индия"){
            document.getElementById("parVisa").innerHTML = " eVisa (за 60 дни). <br> Цена: около 150лв (87$).";
            document.getElementById("parVaccine").innerHTML = "Коремен тиф, бяс и холера. <br><br> *Този списък не включва задължителни ваксини за Гърция!";
        }

        //Greece -> Bulgaria
        if(c1 === "Гърция" && c2 === "България"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза.";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини.<br><br> *Този списък не включва задължителни ваксини за Гърция!";
        }

        //Greece -> North Macedonia
        if(c1 === "Гърция" && c2 === "Северна Македония"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 90 дни).";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини.<br><br> *Този списък не включва задължителни ваксини за Гърция!";
        }

        //Greece -> Thailand
        if(c1 === "Гърция" && c2 === "Тайланд"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 30 дни).";
            document.getElementById("parVaccine").innerHTML = "Коремен тиф, бяс и холера. <br><br> *Този списък не включва задължителни ваксини за Гърция!";
        }

        //Greece -> the USA 
        if(c1 === "Гърция" && c2 === "САЩ"){
            document.getElementById("parVisa").innerHTML = "eTA (за 90 дни). <br> Цена: около 25лв (14$).";
            document.getElementById("parVaccine").innerHTML = "Коремен тиф, бяс и холера. <br><br> *Този списък не включва задължителни ваксини за Гърция!";
        }

        //Greece -> Indoneisa
        if(c1 === "Гърция" && c2 === "Индонезия"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 30 дни).";
            document.getElementById("parVaccine").innerHTML = "Коремен тиф, бяс и холера. <br><br> *Този списък не включва задължителни ваксини за Гърция!";
        }

        //North Macedonia
        //North Macedonia -> Bulgaria
        if(c1 === "Северна Македония" && c2 === "България"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 90 дни).";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Северна Македония!";
        }

        //North Macedonia -> Greece
        if(c1 === "Северна Македония" && c2 === "Гърция"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 90 дни).";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Северна Македония!";
        }

        //North Macedonia -> India
        if(c1 === "Северна Македония" && c2 === "Индия"){
            document.getElementById("parVisa").innerHTML = " eVisa (за 60 дни). <br> Цена: около 150лв (87$).";
            document.getElementById("parVaccine").innerHTML = "Хепатит А, коремен тиф, менингококова инфекция, бяс и холера. <br><br> *Този списък не включва задължителни ваксини за Северна Македония!";
        }

        //North Macedonia -> Indonesia
        if(c1 === "Северна Македония" && c2 === "Индонезия"){
            document.getElementById("parVisa").innerHTML = " Няма нужда от виза (за 30 дни).";
            document.getElementById("parVaccine").innerHTML = "Хепатит А, коремен тиф, менингококова инфекция и бяс. <br><br> *Този списък не включва задължителни ваксини за Северна Македония!";
        }

        //North Macedonia -> Thailand
        if(c1 === "Северна Македония" && c2 === "Тайланд"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза!";
            document.getElementById("parVaccine").innerHTML = "Хепатит А, коремен тиф, менингококова инфекция и бяс. <br><br> *Този списък не включва задължителни ваксини за Северна Македония!";
        }

        //North Macedonia -> the USA
        if(c1 === "Северна Македония" && c2 === "САЩ"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете: mk.usembassy.gov/visas";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Северна Македония!";
        }

        //India
        //India -> Indonesia
        if(c1 === "Индия" && c2 === "Индонезия"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 30 дни).";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Индия!";
        }

        //India -> Thailand
        if(c1 === "Индия" && c2 === "Тайланд"){
            document.getElementById("parVisa").innerHTML = "Виза от граничен пункт (за 15 дни). <br> Цена: около 28лв (16$).";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Индия!";
        }
    
        //India -> the USA
        if(c1 === "Индия" && c2 === "САЩ"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете: in.usembassy.gov/visas";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Индия!";
        }

        //India -> Bulgaria
        if(c1 === "Индия" && c2 === "България"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете: indembsofia.gov.in/page/visa/";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Индия!";
        }

        //India -> Greece
        if(c1 === "Индия" && c2 === "Гърция"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете: schengenvisainfo.com/greece-visa/";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Индия!";
        }

        //India -> North Macedonia
        if(c1 === "Индия" && c2 === "Северна Македония"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете: mfa.gov.mk/";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Индия!";
        }

        //Indonesia
        //Indonesia -> India
        if(c1 === "Индонезия" && c2 === "Индия"){
            document.getElementById("parVisa").innerHTML = "eVisa (за 60 дни). <br> Цена: около 150лв (87$).";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Индонезия!";
        }

        //Indonesia -> Thailand
        if(c1 === "Индонезия" && c2 === "Тайланд"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 30 дни).";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Индонезия!";
        }

        //Indonesia -> the USA
        if(c1 === "Индонезия" && c2 === "САЩ"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете: id.usembassy.gov/visas";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Индонезия!";
        }
        
        //Indonesia -> Greece
        if(c1 === "Индонезия" && c2 === "Гърция"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете: mfa.gr/missionsabroad/en/indonesia-en/visas";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Индонезия!";
        }
        
        //Indonesia -> Bulgaria
        if(c1 === "Индонезия" && c2 === "България"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете: mfa.bg/en/services-travel/consular-services/travel-bulgaria/visa-bulgaria";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Индонезия!";
        }
        //Indonesia -> North Macedonia
        if(c1 === "Индонезия" && c2 === "Северна Македония"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете: embassypages.com/missions/embassy12324/ ";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Индонезия!";
        }

        //Thailand

        //Thailand -> Indoneisia
        if(c1 === "Тайланд" && c2 === "Индонезия"){
            document.getElementById("parVisa").innerHTML = "Няма нужда от виза (за 30 дни).";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Тайланд!";
        }

        //Thailand -> India
        if(c1 === "Тайланд" && c2 === "Индия"){
            document.getElementById("parVisa").innerHTML = "eVisa (за 60 дни). <br> Цена: около 150лв (87$).";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Тайланд!";
        }

        //Thailand -> the USA
        if(c1 === "Тайланд" && c2 === "САЩ"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете: th.usembassy.gov/visas";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Тайланд!";
        }

        //Thailand -> Greece
        if(c1 === "Тайланд" && c2 === "Гърция"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете: mfa.gr/missionsabroad/en/thailand-en/visas/";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Тайланд!";
        } 

        //Thailand -> Bulgaria
        if(c1 === "Тайланд" && c2 === "България"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете: mfa.bg/en/services-travel/consular-services/travel-bulgaria/visa-bulgaria";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Тайланд!";
        }

        //Thailand -> North Macedonia
        if(c1 === "Тайланд" && c2 === "Северна Македония"){
            document.getElementById("parVisa").innerHTML = "Задължителна виза! <br> Проверете: mk.china-embassy.org/eng/ <br> Информация има само в посолтвото на Северна Македония в Пекин.";
            document.getElementById("parVaccine").innerHTML = "Няма нужда от специални ваксини. <br><br> *Този списък не включва задължителни ваксини за Тайланд!";
        }

    });
}