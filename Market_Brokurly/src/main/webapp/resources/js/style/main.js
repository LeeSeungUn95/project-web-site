
const selected = document.querySelectorAll('.select');
const event_banner = document.querySelector('#event');

document.getElementById('e_1').style.backgroundColor="black";

var chk;

function getEventId(get_id) {
    document.getElementById('e_1').style.backgroundColor="";
    const firstDiv = document.getElementById(get_id);
    firstDiv.style.backgroundColor="black";

    if (chk != null) {
        const chkEvent = document.getElementById(chk);
        chkEvent.style.backgroundColor="";
    }

    chk = get_id;

    const selectedDiv = document.getElementById(get_id);

    selectedDiv.style.backgroundColor="black";

    if(get_id == 'e_1') {
        event_banner.style.backgroundImage="url(../../img/banner/goods1.jpg)";
    } else if (get_id == 'e_2') {
        event_banner.style.backgroundImage="url(../../img/banner/goods2.jpg)";
    } else if (get_id == 'e_3') {
        event_banner.style.backgroundImage="url(../../img/banner/goods3.jpg)";
    } else if (get_id == 'e_4') {
        event_banner.style.backgroundImage="url(../../img/banner/goods4.jpg)";
    } else if (get_id == 'e_5') {
        event_banner.style.backgroundImage="url(../../img/banner/goods5.jpg)";
    } else if (get_id == 'e_6') {
        event_banner.style.backgroundImage="url(../../img/banner/goods6.jpg)";
    }

}
    
const rightBtn = document.querySelectorAll('.right_btn');
const leftBtn = document.querySelectorAll('.left_btn');
const itemList = document.querySelectorAll('.item_list');

var page = 1;
var page2 = 1;
var page3 = 1;
var page4 = 1;
var page5 = 1;
var page6 = 1;
var page7 = 1;
var page8 = 1;

// �� ��ǰ ���
rightBtn[0].onclick = function() {
    if(page == 1) {
        leftBtn[0].style.visibility="visible";
        itemList[0].style.left="-1050px";
        page = 2;
    } else if (page == 2) {
        itemList[0].style.left="-2100px";
        page = 3;
    } else if (page == 3) {
        rightBtn[0].style.visibility="hidden";
        itemList[0].style.left="-3150px";
        page = 4;
    }
}
leftBtn[0].onclick = function() {
    if(page == 2) {
        leftBtn[0].style.visibility="hidden";
        itemList[0].style.left="0px";
        page = 1;
    } else if (page == 3) {
        itemList[0].style.left="-1050px";
        page = 2;
    } else if (page == 4) {
        rightBtn[0].style.visibility="visible";
        itemList[0].style.left="-2100px";
        page = 3;
    }
}

//��ġ�� ��ȸ�� ����
rightBtn[1].onclick = function() {
    if(page2 == 1) {
        leftBtn[1].style.visibility="visible";
        itemList[1].style.left="-1050px";
        page2 = 2;
    } else if (page2 == 2) {
        rightBtn[1].style.visibility="hidden";
        itemList[1].style.left="-2100px";
        page2 = 3;
    }
}
leftBtn[1].onclick = function() {
    if(page2 == 2) {
        leftBtn[1].style.visibility="hidden";
        itemList[1].style.left="0px";
        page2 = 1;
    } else if (page2 == 3) {
        itemList[1].style.left="-1050px";
        rightBtn[1].style.visibility="visible";
        page2 = 2;
    }
}
//MD�� ��õ
rightBtn[2].onclick = function() {
    if(page3 == 1) {
        leftBtn[2].style.visibility="visible";
        itemList[2].style.left="-525px";
        rightBtn[2].style.visibility="hidden";
        page3 = 2;
    } 
}
leftBtn[2].onclick = function() {
    if(page3 == 2) {
        leftBtn[2].style.visibility="hidden";
        rightBtn[2].style.visibility="visible";
        itemList[2].style.left="0px";
        page3 = 1;
    }
}
// ���� ���� ���� ��ǰ
rightBtn[3].onclick = function() {
    if(page4 == 1) {
        leftBtn[3].style.visibility="visible";
        itemList[3].style.left="-525px";
        rightBtn[3].style.visibility="hidden";
        page4 = 2;
    } 
}
leftBtn[3].onclick = function() {
    if(page4 == 2) {
        leftBtn[3].style.visibility="hidden";
        rightBtn[3].style.visibility="visible";
        itemList[3].style.left="0px";
        page4 = 1;
    }
}
// ������ ��̰�!
rightBtn[4].onclick = function() {
    if(page5 == 1) {
        leftBtn[4].style.visibility="visible";
        itemList[4].style.left="-525px";
        rightBtn[4].style.visibility="hidden";
        page5 = 2;
    } 
}
leftBtn[4].onclick = function() {
    if(page5 == 2) {
        leftBtn[4].style.visibility="hidden";
        rightBtn[4].style.visibility="visible";
        itemList[4].style.left="0px";
        page5 = 1;
    }
}
// ������ ����
rightBtn[5].onclick = function() {
    if(page6 == 1) {
        leftBtn[5].style.visibility="visible";
        itemList[5].style.left="-525px";
        rightBtn[5].style.visibility="hidden";
        page6 = 2;
    } 
}
leftBtn[5].onclick = function() {
    if(page6 == 2) {
        leftBtn[5].style.visibility="hidden";
        rightBtn[5].style.visibility="visible";
        itemList[5].style.left="0px";
        page6 = 1;
    }
}
// ���� �� ���
rightBtn[6].onclick = function() {
    if(page7 == 1) {
        leftBtn[6].style.visibility="visible";
        itemList[6].style.left="-525px";
        rightBtn[6].style.visibility="hidden";
        page7 = 2;
    } 
}
leftBtn[6].onclick = function() {
    if(page7 == 2) {
        leftBtn[6].style.visibility="hidden";
        rightBtn[6].style.visibility="visible";
        itemList[6].style.left="0px";
        page7 = 1;
    }
}
// ������ ķ��
rightBtn[7].onclick = function() {
    if(page8 == 1) {
        leftBtn[7].style.visibility="visible";
        itemList[7].style.left="-525px";
        rightBtn[7].style.visibility="hidden";
        page8 = 2;
    } 
}
leftBtn[7].onclick = function() {
    if(page8 == 2) {
        leftBtn[7].style.visibility="hidden";
        rightBtn[7].style.visibility="visible";
        itemList[7].style.left="0px";
        page8 = 1;
    }
}











// �ٸ� ī�װ� ���� �� ù �������� �̵�
function MD_click() {
    if(page3 == 2) {
        leftBtn[2].style.visibility="hidden";
        rightBtn[2].style.visibility="visible";
        itemList[2].style.left="0px";
        page3 = 1;
    }
}

var checked;
const linkBtn_inner = document.getElementById('list_name');
const linkBtn = document.getElementById('link_a');
const items = document.querySelectorAll('#md_list > .items')

document.querySelector('#list_1').style.backgroundColor="rgb(0, 107, 14)";
document.querySelector('#list_1').style.color="white";

function getId(clicked_id) {
    
    document.querySelector('#list_1').style.backgroundColor="";
    document.querySelector('#list_1').style.color="";
    
    itemList[2].classList.add('pre-ani');
    
    if(checked != null){
        const check = document.getElementById(checked);
        check.style.backgroundColor="";
        check.style.color="";
    }

    checked = clicked_id;
    
    const list = document.getElementById(clicked_id);
    
    innerText = list.innerText; /* ������ ��� �� �ؽ�Ʈ�� ������ */
    linkBtn_inner.innerHTML = innerText; /* ������ �ؽ�Ʈ ��ư�� �ֱ� */
    
    list.style.backgroundColor="rgb(0, 107, 14)";
    list.style.color="white";
    
    var getTitle = list.getAttribute('data-title'); /* ������ ����� data-title ���� ������(�� �ȿ� ��ũ�� ������ ��) */
    
    linkBtn.setAttribute('href', '../TEST/' + getTitle + ".html");/* �Ӽ� �� ���� */
    
    if (getTitle == 'ä��') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=36965'\"><img src='../assets/ȣ����150g.jpg' alt='items'></div>     <span class='product_name'><a href=''>ȣ���� 150g</a></span> <br>    <span style='font-size: 17px; color: #333; font-weight: 1000;'>2,490��</span> <br>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=36965'\"><img src='../assets/ȣ����150g.jpg' alt='items'></div>     <span class='product_name'><a href=''>ȣ���� 150g</a></span> <br>    <span style='font-size: 17px; color: #333; font-weight: 1000;'>2,490��</span> <br>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=36965'\"><img src='../assets/ȣ����150g.jpg' alt='items'></div>     <span class='product_name'><a href=''>ȣ���� 150g</a></span> <br>    <span style='font-size: 17px; color: #333; font-weight: 1000;'>2,490��</span> <br>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=36965'\"><img src='../assets/ȣ����150g.jpg' alt='items'></div>     <span class='product_name'><a href=''>ȣ���� 150g</a></span> <br>    <span style='font-size: 17px; color: #333; font-weight: 1000;'>2,490��</span> <br>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=36965'\"><img src='../assets/ȣ����150g.jpg' alt='items'></div>     <span class='product_name'><a href=''>ȣ���� 150g</a></span> <br>    <span style='font-size: 17px; color: #333; font-weight: 1000;'>2,490��</span> <br>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=36965'\"><img src='../assets/ȣ����150g.jpg' alt='items'></div>     <span class='product_name'><a href=''>ȣ���� 150g</a></span> <br>    <span style='font-size: 17px; color: #333; font-weight: 1000;'>2,490��</span> <br>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '����') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=54655'\"><img src='../assets/����3.jpg' alt='items'></div>     <span class='product_name'><a href=''>GAP õ�������� 1.5kg</a></span> <br>    <span style='font-size: 17px; color: #333; font-weight: 1000;'>9,990��</span> <br>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=54655'\"><img src='../assets/����3.jpg' alt='items'></div>     <span class='product_name'><a href=''>GAP õ�������� 1.5kg</a></span> <br>    <span style='font-size: 17px; color: #333; font-weight: 1000;'>9,990��</span> <br>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=54655'\"><img src='../assets/����3.jpg' alt='items'></div>     <span class='product_name'><a href=''>GAP õ�������� 1.5kg</a></span> <br>    <span style='font-size: 17px; color: #333; font-weight: 1000;'>9,990��</span> <br>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=54655'\"><img src='../assets/����3.jpg' alt='items'></div>     <span class='product_name'><a href=''>GAP õ�������� 1.5kg</a></span> <br>    <span style='font-size: 17px; color: #333; font-weight: 1000;'>9,990��</span> <br>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=54655'\"><img src='../assets/����3.jpg' alt='items'></div>     <span class='product_name'><a href=''>GAP õ�������� 1.5kg</a></span> <br>    <span style='font-size: 17px; color: #333; font-weight: 1000;'>9,990��</span> <br>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=54655'\"><img src='../assets/����3.jpg' alt='items'></div>     <span class='product_name'><a href=''>GAP õ�������� 1.5kg</a></span> <br>    <span style='font-size: 17px; color: #333; font-weight: 1000;'>9,990��</span> <br>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '����') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=81561'\"> <img src='../assets/�ι����.jpg' alt='items'> </div>  <span class='product_name' style='line-height: 30px;'> <a href=''>[�ٺ�] �ι���� (������ī) 400g ���� (����)</a></span> <br>  <span class='price_tag'><span class='discounted_price'>6%</span>&emsp;<span style='font-size: 17px; color: #333; font-weight: 1000;'>27,180��</span> <br> <span class='price'>29,000��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=81561'\"> <img src='../assets/�ι����.jpg' alt='items'> </div>  <span class='product_name' style='line-height: 30px;'> <a href=''>[�ٺ�] �ι���� (������ī) 400g ���� (����)</a></span> <br>  <span class='price_tag'><span class='discounted_price'>6%</span>&emsp;<span style='font-size: 17px; color: #333; font-weight: 1000;'>27,180��</span> <br> <span class='price'>29,000��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=81561'\"> <img src='../assets/�ι����.jpg' alt='items'> </div>  <span class='product_name' style='line-height: 30px;'> <a href=''>[�ٺ�] �ι���� (������ī) 400g ���� (����)</a></span> <br>  <span class='price_tag'><span class='discounted_price'>6%</span>&emsp;<span style='font-size: 17px; color: #333; font-weight: 1000;'>27,180��</span> <br> <span class='price'>29,000��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=81561'\"> <img src='../assets/�ι����.jpg' alt='items'> </div>  <span class='product_name' style='line-height: 30px;'> <a href=''>[�ٺ�] �ι���� (������ī) 400g ���� (����)</a></span> <br>  <span class='price_tag'><span class='discounted_price'>6%</span>&emsp;<span style='font-size: 17px; color: #333; font-weight: 1000;'>27,180��</span> <br> <span class='price'>29,000��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=81561'\"> <img src='../assets/�ι����.jpg' alt='items'> </div>  <span class='product_name' style='line-height: 30px;'> <a href=''>[�ٺ�] �ι���� (������ī) 400g ���� (����)</a></span> <br>  <span class='price_tag'><span class='discounted_price'>6%</span>&emsp;<span style='font-size: 17px; color: #333; font-weight: 1000;'>27,180��</span> <br> <span class='price'>29,000��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=81561'\"> <img src='../assets/�ι����.jpg' alt='items'> </div>  <span class='product_name' style='line-height: 30px;'> <a href=''>[�ٺ�] �ι���� (������ī) 400g ���� (����)</a></span> <br>  <span class='price_tag'><span class='discounted_price'>6%</span>&emsp;<span style='font-size: 17px; color: #333; font-weight: 1000;'>27,180��</span> <br> <span class='price'>29,000��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '����') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=81561'\"><img src='../assets/����.jpg' alt='items'></div>     <span class='product_name' style='line-height: 30px;'><a href=''>[PPUL]1++�ѿ� �ν� ��� 150g<br> <span style='position:relative; top: -5px;'> (����)</span></a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>38,000��</span</span>>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=81561'\"><img src='../assets/����.jpg' alt='items'></div>     <span class='product_name' style='line-height: 30px;'><a href=''>[PPUL]1++�ѿ� �ν� ��� 150g<br> <span style='position:relative; top: -5px;'> (����)</span></a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>38,000��</span</span>>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=81561'\"><img src='../assets/����.jpg' alt='items'></div>     <span class='product_name' style='line-height: 30px;'><a href=''>[PPUL]1++�ѿ� �ν� ��� 150g<br> <span style='position:relative; top: -5px;'> (����)</span></a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>38,000��</span</span>>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=81561'\"><img src='../assets/����.jpg' alt='items'></div>     <span class='product_name' style='line-height: 30px;'><a href=''>[PPUL]1++�ѿ� �ν� ��� 150g<br> <span style='position:relative; top: -5px;'> (����)</span></a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>38,000��</span</span>>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=81561'\"><img src='../assets/����.jpg' alt='items'></div>     <span class='product_name' style='line-height: 30px;'><a href=''>[PPUL]1++�ѿ� �ν� ��� 150g<br> <span style='position:relative; top: -5px;'> (����)</span></a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>38,000��</span</span>>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=81561'\"><img src='../assets/����.jpg' alt='items'></div>     <span class='product_name' style='line-height: 30px;'><a href=''>[PPUL]1++�ѿ� �ν� ��� 150g<br> <span style='position:relative; top: -5px;'> (����)</span></a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>38,000��</span</span>>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '��') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '������') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '��') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '����') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '����') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '����Ŀ��') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '�ǰ���ǰ') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '��Ȱ��ǰ') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '��Ų�ɾ�') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '���') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '�ֹ��ǰ') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '������ǰ') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '���̺�') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    } else if (getTitle == '�ݷ�����') {
        MD_click();
        items[0].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[1].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[2].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[3].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[4].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        items[5].innerHTML="<div onclick=\"location.href='https://www.kurly.com/shop/goods/goods_view.php?&goodsno=26920'\"><img src='../assets/���̼ҹ���.jpg' alt='items'></div>     <span class='product_name' style='line-height: 40px;'><a href=''>[�����׹���] ���̼ҹ���</a></span> <br> <span class='price_tag'><span style='font-size: 17px; color: #333; font-weight: 1000;'>8,500��</span></span>";
        setTimeout(function() {    itemList[2].classList.remove('pre-ani'); }, 100);
    }
    
    
}