var docs = {
  'align-content': {
    'en': '<p>Aligns a flex container\'s lines within the flex container when there is extra space on the cross-axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'ro': '<p>Aliniază liniile unui container flex cu containerul flex cand există spațiu în plus pe axa transversală.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'bg': '<p>Подравнява реводете на flex контейнера вътре в него ако има допълнително място по вртикалата.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'de': '<p>Richtet die Zeilen innerhalb eines flex-Containers aus, wenn auf der Querachse Platz ist.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'pt-br': '<p>Alinha as linhas dentro de um container flex quando há espaço sobrando no eixo cruzado.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'es': '<p>Alinea las líneas de un contenedor flex cuando exista más espacio en el eje transversal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'fr': '<p>Aligne les lignes d\'un conteneur flex à l\'intérieur du conteneur flex quand il y a de l\'espace superflu sur l\'axe transversal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'ru': '<p>Выравнивает ряды flex-контейнера внутри него (работает только, если элементы расположены больше чем в один ряд).</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'fa': '<p>فرض کنید که ارتفاع flex-container بیشتر از فضایی است که flex-lineها گرفته اند و اصطلاحا مقداری فضای خالی در flex-container وجود دارد. به کمک خاصیت align-content شما می‌توانید محل قرارگیری این flex-line ها را مشخص کنید که از نظر محور عمودی در کجا قرار گیرند.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'zh-cn': '<p>当交叉轴有多余空间时，对齐容器内的轴线。</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'zh-tw': '<p>當交叉軸有多餘空間時，對齊容器內的軸線。</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'tr': '<p>Eğer cross-axis\'de fazladan alan varsa, flex container satırlarını flex container\'ın içinde hizalar.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'it': '<p>Allinea le linee all\'interno di un contenitore flex se c\'è extra spazio verticale</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'ko': '<p>세로선 상에 여분의 공간이 있는 경우 Flex 컨테이너 사이의 간격을 조절합니다.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'lt': '<p>Lygiuoja elastiško supančio elemento eilutes, kai kertančios ašies atžvilgiu yra laisvos vietos.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'vi': '<p>Sắp xếp các dòng trong hộp chứa khi có thêm không gian dọc theo trục ngang.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'pl': '<p>Wyrównuje wiersze wewnątrz kontenera z atrybutem flex w przypadku gdy na osiach poprzecznych jest dodatkowe miejsce.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'cs': '<p>Určuje zarovnání řádků ve směru vedlejší osy, pokud je v kontejneru přebytek místa.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'ja': '<p>直行軸 (cross axis) に余裕がある場合、コンテナー内の行を配置します。</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'hu': '<p>A flex konténer sorvonalait igazítja a flex konténeren belül, amennyiben van szabad tér a másodlagos kereszttengely mentén.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'eo': '<p>Vicigas la liniojn de la fleksujo tie kie estas aldona spaco sur la transversakso.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'sv': '<p>Justerar en flex-containers rader inom flex-containern när det finns extra utrymme på motsata axeln.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'uk': '<p>Вирівнює рядки flex-контейнеру всередені самого flex-контейнеру, коли є додатковий простір на поперечній осі.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'hi': '<p>यह कंटेनर के भीतर रखी वस्तुओं के मध्य की जगह को संरेखित करता है।</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'sr': '<p>Поравњава редове у флекс контејнеру када постоји вишак простора дуж попречне осе.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'nl': '<p>Lijnt de lijnen van een flex container binnen de flex container uit waneer er extra plaats is op de dwarsas.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'ta': '<p>குறுக்கு அச்சு மீது கூடுதல் இடம் இருக்கும் போது flex container-ல் வரிகளை சீரமைக்கும்.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'ml': '<p>ക്രോസ്-അച്ചുതയിൽ അധിക സ്ഥലം ഉള്ളപ്പോൾ ഫ്ലെക്സസ് കണ്ടെയ്നറിലുള്ള നിരകൾ വിന്യസിക്കുന്നു. </p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>'
  },
  'align-items': {
    'en': '<p>Aligns flex items along the cross axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ro': '<p>Aliniază elementele flex de-a lungul axei transversale.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'bg': '<p>Подрежда flex елементите по дължината на осите.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'de': '<p>Richtet die flex-Elemente entlang der Querachse aus.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'pt-br': '<p>Alinha itens flex ao longo do eixo cruzado.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'es': '<p>Alinea elementos Flex a lo largo del eje transversal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'fr': '<p>Aligne les éléments flex selon l\'axe transversal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ru': '<p>Выравнивает flex-элементы вдоль пересекаемой оси.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'fa': '<p>این خاصیت نحوه چینش Flex itemها را در محور Cross مشخص می کند. این خاصیت مانند justify-content  است تنها تفاوت آنها در مقادیرشان است.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'zh-cn': '<p>在交叉轴上对齐多个元素</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'zh-tw': '<p>在交叉軸上對齊多個元素</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'tr': '<p>Flex öğelerini cross-axis boyunca hizalar.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'it': '<p>Allinea elementi flex lungo l\'asse verticale</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ko': '<p>Flex 요소를 세로선 상에서 정렬합니다.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'lt': '<p>Lygiuoja elastiškus elementus palei kertančią ašį.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'vi': '<p>Sắp xếp các hạng mục flex dọc theo trục ngang.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'pl': '<p>Wyrównuje elementy z atrybutem flex wzdłuż osi poprzecznych.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'cs': '<p>Určuje zarovnání všech prvků ve směru vedlejší osy.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ja': '<p>アイテムを直行軸 (cross axis) に沿って配置します。</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'hu': '<p>A másodlagos kereszt-tengely mentén igazítja a flex elemeket.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'eo': '<p>Vicigas transversakse fleksajn erojn.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'sv': '<p>Justerar flex-objekt längs med motsata axeln.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'uk': '<p>Вирівнює flex-елементи вздовж перетинної осі.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'hi': '<p>वस्तुओं को उर्ध्वाधर रूप से संरेखित करता है।</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'sr': '<p>Поравњава флекс елементе дуж попречне осе.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'nl': '<p>Lijnt flex elementen uit over de dwarsas.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ta': '<p>குறுக்கு அச்சு வழியாக உருப்படிகளை ஒழுங்குபடுத்துகிறது.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ml': '<p>ക്രോസ്സ് അക്ഷത്തിൽ വളവുതിരിവുകളുള്ള ഇനങ്ങൾ വിന്യസിക്കുന്നു. </p> <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
  },
  'align-self': {
    'en': '<p>Aligns a flex item along the cross axis, overriding the <code>align-items</code> value.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ro': '<p>Aliniază un element flex de-a lungul axei transversale, suprascriind valoarea proprietății <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'bg': '<p>Подрежда flex елемент по дължината на осите, презаписвайки <code>align-items</code> стойността.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'de': '<p>Richtet die flex-Elemente entlang der Querachse aus, und &uuml;berschreibt den Wert von <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'pt-br': '<p>Alinha um item flex ao longo do eixo cruzado, substituindo o valor de <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'es': '<p>Alinea un elemento flex a lo largo del eje transversal, anulando el valor de <code>align-items</code></p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'fr': '<p>Aligne un élément flex selon l\'axe transversal, outrepassant la valeur de <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ru': '<p>Выравнивает flex-элемент вдоль пересекаемой оси, перекрывая значения свойства <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'fa': '<p>با استفاده از این خاصیت می‌توانید نحوه قرار گرفتن عمودی هر flex item را مشخص کنید. مقادیر این خاصیت دقیقا همان مقادیر خاصیت align-items است. <code>align-items</code> value.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'zh-cn': '<p>在交叉轴上对齐一个元素，覆盖<code>align-items</code>所设定的值.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'zh-tw': '<p>在交叉軸上對齊一個元素，覆蓋<code>align-items</code>所设定的值.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'tr': '<p><code>align-items</code>\'ın değerini ezerek, sadece bu öğeyi cross-axis boyunca hizalar</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'it': '<p>Allinea un elemento flex lungo l\'asse verticale, sovrascrive il valore di <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ko': '<p>지정된 <code>align-items</code> 값을 무시하고 Flex 요소를 세로선 상에서 정렬합니다.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'lt': '<p>Lygiuoja elastišką elementą palei kertančią ašį nepaisant <code>align-items</code> reikšmės.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'vi': '<p>Sắp xếp một hạng mục flex dọc theo trục ngang, ghi đè lên giá trị của <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'pl': '<p>Wyrównuje element z atrybutem flex wzdłuż osi poprzecznych nadpisując wartość właściwości <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'cs': '<p>Určuje zarovnání prvku ve podle vedlejší osy, přebíjí hodnotu <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ja': '<p>アイテムを直行軸 (cross axis) に沿って配置します。<code>align-items</code>の値を上書きします。</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'hu': '<p>A másodlagos kereszttengely mentén igazít egy flex elemet, felülírva a <code>align-items</code>-ben megadott értéket.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'eo': '<p>Vicigas transversakse fleksajn elementojn, anstataŭigante la <code>align-items</code> valoron.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'sv': '<p>Justerar ett flex-objekt längs med motsata axeln, överskrider värdet från <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'uk': '<p>Вирівнює flex-елемент вздовж перетинної осі, перекриваючи значення властивості <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'hi': '<p>छैतिज रूप से किसी विशिष्ट वस्तु के लिए नियम प्रदान करता है, <code>align-items</code> के नियमों को न मानते हुए।</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'sr': '<p>Поравњава појединачни флекс елемент дуж попречне осе надјачавајући вредност <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'nl': '<p>Lijnt een flex element uit over de dwarsas, en overschrijft de waarde van <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ta': '<p><code>align-items</code> மதிப்புகளை புறக்கணித்து, குறுக்கு அச்சு வழியாக உருப்படிகளை ஒழுங்குபடுத்துகிறது.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ml': '<p><code>align-items</code> ഇനെ അസാധു ആക്കി കൊണ്ട്, ക്രോസ്സ് അക്ഷത്തിൽ ഒരു ഫ്ലെക്സ് ഇനത്തെ വിന്യസിക്കുന്നു</p></p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>'
  },
  'flex-direction': {
    'en': '<p>Defines the direction of the main axis.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'ro': '<p>Definește direcția axei principale.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'bg': '<p>Определя посоката на основната ос.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'de': '<p>Legt die Ausrichtung der Hauptachse fest.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'es': '<p>Define la dirección del eje principal.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'pt-br': '<p>Define a direção do eixo principal.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'fr': '<p>Définit la direction de l\'axe principal.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'ru': '<p>Задает направление основной оси.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'fa': '<p>جهت آیتم ها را مشخص می کند.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'zh-cn': '<p>定义主轴的方向。</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'zh-tw': '<p>定義主軸的方向。</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'tr': '<p>main axis\'in yönünü belirler.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'it': '<p>Definisce la direzione dell\'asse principale</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'ko': '<p>정렬할 방향을 지정합니다.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'lt': '<p>Nustato pagrindinės ašies kryptį.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'vi': '<p>Xác định hướng của trục chính.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'pl': '<p>Określa kierunek głównej osi.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'cs': '<p>Určuje směr hlavní osy.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'ja': '<p>主軸 (main axis) の方向を指定します。</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'hu': '<p>Definiálja az elsődleges főtengely irányát.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'eo': '<p>Difinas la direkton de la ĉefa akso.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'sv': '<p>Definierar huvudaxelns håll.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'uk': '<p>Визначає напрямок головної осі.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'hi': '<p>मुख्य धुरी की दिशा परिभाषित करता है।</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'sr': '<p>Одређује правац главне осе.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'nl': '<p>Definieert de richting van de hoofdas.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'ta': '<p>முக்கிய அச்சு திசையை வரையறுக்கிறது.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'ml': '<p>പ്രധാന അക്ഷത്തിന്റെ ദിശ നിർവ്വചിക്കുന്നു.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>'
  },
  'flex-flow': {
    'en': '<p>Shorthand property for <code>flex-direction</code> and <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'ro': '<p>Scurtătura pentru <code>flex-direction</code> și <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'bg': '<p>Съкратена версия на <code>flex-direction</code> and <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'de': '<p>Kurzschreibweise f&uuml;r <code>flex-direction</code> und <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'pt-br': '<p>Propriedade abreviada para <code>flex-direction</code> e <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'es': '<p>Abreviación de las propiedades de <code>flex-direction</code> and <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code></p>',
    'fr': '<p>Raccourci pour <code>flex-direction</code> et <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'ru': '<p>Свойство для быстрой записи <code>flex-direction</code> и <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'fa': '<p>اکنون به کمک flex-flow شما می‌توانید مقادیری که برای <code>flex-direction</code> و <code>flex-wrap</code> در نظر دارید را در یک خاصیت بنویسید.</p>',
    'zh-cn': '<p><code>flex-direction</code>和<code>flex-wrap</code>的缩写性质。</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'zh-tw': '<p><code>flex-direction</code>和<code>flex-wrap</code>的縮寫性質。</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'tr': '<p><code>flex-direction</code> ve <code>flex-wrap</code> için kısa yazım özelliği.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'it': '<p>Scorciatoia per le proprieta\' <code>flex-direction</code> e <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'ko': '<p>다음의 속성들을 간략히 한 속성입니다: <code>flex-direction</code> and <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'lt': '<p>Sutrumpinta komanda atstojanti <code>flex-direction</code> ir <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'vi': '<p>Viết tắt cho từ <code>flex-direction</code> và từ <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'pl': '<p>Skrócona wersja <code>flex-direction</code> i <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'cs': '<p>Zkrácená verze vlastností <code>flex-direction</code> a <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'ja': '<p><code>flex-direction</code>と<code>flex-wrap</code>のショートハンドプロパティーです。</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'hu': '<p>Rövidítésként szolgáló összevonása a <code>flex-direction</code> és a <code>flex-wrap</code> tulajdonságoknak.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'eo': '<p>Mallongita trajto por <code>flex-direction</code> kaj <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'sv': '<p>Kort version av <code>flex-direction</code> och <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'uk': '<p>Скорочена властивість для <code>flex-direction</code> та <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'hi': '<p>शोर्ट हैंड प्रॉपर्टी <code>flex-direction</code> एवं <code>flex-wrap</code> के लिए।</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'sr': '<p>Скраћено својство за <code>flex-direction</code> и <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'nl': '<p>Een verkorte eigenschap voor een combinatie van <code>flex-direction</code> en <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'ta': '<p><code>flex-direction</code> and <code>flex-wrap</code> இரண்டின் சுருக்கெழுத்து.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'ml': '<p><code>flex-direction</code> and <code>flex-wrap</code> ോർട്ട്ഹാൻഡ്.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>'
  },
  'flex-wrap': {
    'en': '<p>Specifies whether flex items are forced on a single line or can be wrapped on multiple lines.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'ro': '<p>Specifică daca elementele flex sunt forțate pe o singură linie sau pot fi impărțit pe mai multe linii.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'bg': '<p>Определя дали flex елементите са на един ред или могат да бъдат разпределени на много редове.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'de': '<p>Legt fest, ob die flex-Element in eine Zeile gezw&auml;ngt werden oder auf mehrere Zeilen umgebrochen werden k&ouml;nnen.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'pt-br': '<p>Especifica se os itens flex são forçados em um linha única ou podem quebrar em múltiplas linhas.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'es': '<p>Especifica si los elementos flex son forzados a una sola línea o pueden ser envueltos en multiples líneas.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'fr': '<p>Spécifie si les éléments flex sont forcés à être sur une seule ligne ou peuvent être enveloppés sur plusieurs lignes.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'ru': '<p>Указывает, нужно ли чтоб элементы принудительно находились в одном ряду или автоматически переносились.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'fa': '<p>در حالت عادی همه flex item ها در یک خط قرار می‌گیرند. به کمک خاصیت flex-wrap شما می‌توانید مشخص کنید که flex item ها در چندین خط قرار بگیرند.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'zh-cn': '<p>定义flex元素必须在单行或自动换行成多行。</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'zh-tw': '<p>定義flex元素必須在單行或自動換行成多行。</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'tr': '<p>Flex öğelerin tek satıra sığmasını ya da çoklu satırlara bölünmesini belirler.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'it': '<p>Specifica se gli elementi flex vengono forzati su una singola linea oppure possono occupare piu\' linee</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'ko': '<p>Flex 요소들을 한 줄 또는 여러 줄에 걸쳐 정렬합니다.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'lt': '<p>Nusako ar elastiški elementai turi būti sutalpinti vienoje eilutėje, ar gali būti paskirstyti per kelias eilutes.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'vi': '<p>Xác định xem các hạng mục flex phải trên một dòng hoặc có thể quấn trên nhiều dòng.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'pl': '<p>Określa czy elementy z atrybutem flex muszą być ściśnięte w jednym wierszu czy mogą być rozproszone.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'cs': '<p>Určuje, zda budou prvky na jednom řádku, nebo se mohou rozdělit na více řádků.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'ja': '<p>アイテムを強制的に一行に並べるか、複数行へ折り返すかを指定します。</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'hu': '<p>Meghatározza, hogy a flex elemek egy sorba vannak kényszerítve vagy megtörhetnek több sorba.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'eo': '<p>Indikas ĉu fleksaj elementoj devige estu sur nura linio aŭ faldkapeblas je pluraj linioj.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'sv': '<p>Specificerar on flex-objekt är låsta till en rad eller om dom får flöda över till flera rader.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'uk': '<p>Визначає, чи будуть елементи знаходитись в одному рядку, чи будуть перенесені до наступних рядків.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'hi': '<p>यह निर्दिष्ठ करता है की कोई वस्तु एक पंक्ति अथवा कई पंक्तियों में आएगी।</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'sr': '<p>Одређује да ли ће флекс елементи стајати у једном реду или ће прећи у нове редове.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'nl': '<p>Specifieert of de flex elementen op een enkele lijn geforceerd worden, of ze over meerdere lijnen gewikkeld worden.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'ta': '<p>ஒரு ஒற்றை வரியில் பொருட்களை கட்டாயமாக்க வேண்டுமா அல்லது பல வரிகளில் மூடப்பட்டிருக்கலாம் என்பதைக் குறிப்பிடுகிறது.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'ml': '<p>ഫ്ലെക്സിങ് ഇനങ്ങളെ ഒരൊറ്റ വരിയിൽ നിർബന്ധിതരാണോ അല്ലെങ്കിൽ ഒന്നിലധികം വരികളിൽ പൊതിഞ്ഞ് വരാമോ എന്ന് നിർദേശിക്കുന്നു.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>'
  },
  'justify-content': {
    'en': '<p>Aligns flex items along the main axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'ro': '<p>Aliniază elementele flex de-a lungul axei principale.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'bg': '<p>Подрежда flex елементи по дължината на основната ос.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'de': '<p>Richtet die flex-Elemente entlang der Hauptachse aus.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'pt-br': '<p>Alinha os itens flex ao longo do eixo principal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'es': '<p>Alinea los elementos flex a lo largo del eje principal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'fr': '<p>Aligne les éléments flex selon l\'axe principal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'ru': '<p>Выравнивает flex-элементы вдоль главной оси.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'fa': '<p>با استفاده از این خاصیت می‌توانید نحوه چیدمان آیتم‌ها بر روی محور اصلی را تعیین کنید (به یاد داشته باشید همانطور که گفتیم اگر خاصیت flex-direction برابر column یا column-reverse باشد، محور اصلی عمودی خواهد بود).</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'zh-cn': '<p>将flex元素和主轴对齐。</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'zh-tw': '<p>將flex元素和主軸對齊。</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'tr': '<p>Flex öğeleri main axis boyunca hizalar.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'it': '<p>Allinea elementi flex lungo l\'asse principale.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'ko': '<p>Flex 요소들을 가로선 상에서 정렬합니다.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'lt': '<p>Lygiuoja elastiškus elementus palei pagrindinę ašį.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'vi': '<p>Sắp xếp các hạng mục flex dọc theo trục chính.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'pl': '<p>Wyrównuje elementy z atrybutem flex wzdłuż głownej osi.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'cs': '<p>Zarovnává prvky ve směru hlavní osy.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'ja': '<p>アイテムを主軸 (main axis) に沿って配置します。</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'hu': '<p>Az elsődleges főtengely mentén igazítja a flex elemeket.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'eo': '<p>Liniigas fleksajn elementojn laŭĉefakse.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'sv': '<p>Justerar flex-objekt längs med huvudaxeln.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'uk': '<p>Вирівнює flex-елементи вздовж головної осі.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'hi': '<p>वस्तुओं को छैतिज रूप से संरेखित करता है।</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'sr': '<p>Поравњава флекс елементе дуж главне осе.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'nl': '<p>Lijnt de flex elementen uit langs de hoofdas.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'ta': '<p>முக்கிய அச்சில் உருப்படிகளை சீரமைக்கும்.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'ml': '<p>ഫ്ലെക്സി ഇനങ്ങളെ മെയിൻ ആക്സിസിൽ വിന്യസിക്കുന്നു</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>'
  },
  'order': {
    'en': '<p>Specifies the order of the flex item.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'ro': '<p>Specifică ordinea elementelor flex.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'bg': '<p>Определя реда на flex елемента.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'de': '<p>Legt die Reihenfolge der flex-Elemente fest.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'pt-br': '<p>Especifica a ordem de um item flex.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'es': '<p>Especifica el orden de los elementos flex.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'fr': '<p>Spécifie l\'ordre de l\'élément flex.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'ru': '<p>Указывает порядок flex-элемента.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'fa': '<p>به کمک خاصیت order شما می‌توانید ترتیب چینش Flex itemها را مشخص کنید. مقادیر این خاصیت اعداد می‌باشند و هرچه عدد کوچکتر باشد اولویت آیتم بالاتر خواهد بود..</p><code>(... -1, 0, 1, ...) &lt;integer&gt;</code>',
    'zh-cn': '<p>决定flex元素的顺序。</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'zh-tw': '<p>決定flex元素的順序。</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'tr': '<p>Flex öğenin sırasını belirler.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'it': '<p>Specifica l\'ordine degli elementi flex</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'ko': '<p>Flex 요소의 순서를 지정합니다.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'lt': '<p>Nusako elastiškų elementų eilės tvarką.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'vi': '<p>Chỉ rõ thứ tự của các hạng mục flex</p><code>&lt;itegeer&gt;(... -1, 0, 1, ...) </code>',
    'pl': '<p>Określa kolejność elementów z atrybutem flex.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'cs': '<p>Určuje pořadí prvku v kontejneru.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'ja': '<p>アイテムの順序を指定します。</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'hu': '<p>Meghatározza a flex elem sorrendiségét.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'eo': '<p>Precizigas la ordon de la fleksa elemento.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'sv': '<p>Specificerar ordningen för flex-objekten.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'uk': '<p>Вказує порядок flex-елементу.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'hi': '<p>फ्लेक्स आइटम का क्रम निश्चित करता है।</p><code>&lt;पूर्णांक&gt; (... -1, 0, 1, ...)</code>',
    'sr': '<p>Дефинише место појединачног флекс елемента.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'nl': '<p>Bepaalt de volgorde van de flex elementen.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'ta': '<p>உருப்படியின் வரிசையைக் குறிப்பிடுகிறது.</p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>',
    'ml': '<p>ഫ്ളക്സ് ഇനങ്ങളുടെ ക്രമം വ്യക്തമാക്കുന്നു</p></p><code>&lt;integer&gt; (... -1, 0, 1, ...)</code>'
  }
};
